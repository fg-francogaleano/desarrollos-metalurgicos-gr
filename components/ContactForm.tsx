"use client";

import { useState, type FormEvent, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { ContactPayload } from "@/lib/content";
import {
  validateForm,
  sanitizeFormData,
  type FormValidationErrors,
} from "@/lib/validators";
import { initEmailJS, sendContactEmail, isEmailJSConfigured } from "@/lib/emailjs";

interface ContactFormProps {
  source: ContactPayload["source"];
  compact?: boolean;
}

const initialForm: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  source: "contact",
};

export default function ContactForm({
  source,
  compact = false,
}: ContactFormProps) {
  const [form, setForm] = useState<ContactPayload>({ ...initialForm, source });
  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  // Inicializar EmailJS cuando el componente monta
  useEffect(() => {
    if (isEmailJSConfigured()) {
      try {
        initEmailJS();
      } catch (error) {
        console.error("Error al inicializar EmailJS:", error);
        toast.error("Hubo un problema al configurar el formulario. Intentá más tarde.");
      }
    }
  }, []);

  const updateField = (field: keyof ContactPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[field as keyof FormValidationErrors]) {
      setErrors((current) => {
        const newErrors = { ...current };
        delete newErrors[field as keyof FormValidationErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validar formulario
    const validationErrors = validateForm({
      name: form.name,
      company: form.company || undefined,
      email: form.email,
      phone: form.phone || undefined,
      message: form.message,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Completá todos los campos correctamente.");
      return;
    }

    // Sanitizar datos
    const sanitizedData = sanitizeFormData({
      name: form.name,
      company: form.company || undefined,
      email: form.email,
      phone: form.phone || undefined,
      message: form.message,
    });

    setIsSubmitting(true);

    try {
      await sendContactEmail(sanitizedData);

      // Éxito
      setIsSuccess(true);
      setForm({ ...initialForm, source });
      setErrors({});

      toast.success("¡Consulta enviada! Nos contactaremos a la brevedad.");

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      // Error al enviar
      console.error("Error al enviar formulario:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la consulta. Intentá nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* {isSuccess && (
        <div
          className="mb-5 border border-green-500 bg-green-500/10 p-4 text-sm text-green-400"
          data-testid={`${source}-success-message`}
        >
          ¡Consulta enviada exitosamente! Nos contactaremos a la brevedad.
        </div>
      )} */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        data-testid={`${source}-contact-form`}
      >
        <div
          className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}
        >
          <div className="space-y-2" data-testid={`${source}-name-field`}>
            <Label
              htmlFor={`${source}-name`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]"
            >
              Nombre
            </Label>
            <Input
              id={`${source}-name`}
              required
              minLength={2}
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              disabled={isSubmitting}
              className={`h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4] disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Nombre y apellido"
              data-testid={`${source}-name-input`}
            />
            {errors.name && (
              <p
                className="text-xs text-red-400"
                data-testid={`${source}-name-error`}
              >
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2" data-testid={`${source}-company-field`}>
            <Label
              htmlFor={`${source}-company`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]"
            >
              Empresa
            </Label>
            <Input
              id={`${source}-company`}
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              disabled={isSubmitting}
              className={`h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4] disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.company ? "border-red-500" : ""
              }`}
              placeholder="Nombre de la empresa"
              data-testid={`${source}-company-input`}
            />
            {errors.company && (
              <p
                className="text-xs text-red-400"
                data-testid={`${source}-company-error`}
              >
                {errors.company}
              </p>
            )}
          </div>
        </div>

        <div
          className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}
        >
          <div className="space-y-2" data-testid={`${source}-email-field`}>
            <Label
              htmlFor={`${source}-email`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]"
            >
              Correo electrónico
            </Label>
            <Input
              id={`${source}-email`}
              type="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              disabled={isSubmitting}
              className={`h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4] disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="correo@empresa.com"
              data-testid={`${source}-email-input`}
            />
            {errors.email && (
              <p
                className="text-xs text-red-400"
                data-testid={`${source}-email-error`}
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className="space-y-2" data-testid={`${source}-phone-field`}>
            <Label
              htmlFor={`${source}-phone`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]"
            >
              Teléfono
            </Label>
            <Input
              id={`${source}-phone`}
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              disabled={isSubmitting}
              className={`h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4] disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Teléfono de contacto"
              data-testid={`${source}-phone-input`}
            />
            {errors.phone && (
              <p
                className="text-xs text-red-400"
                data-testid={`${source}-phone-error`}
              >
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2" data-testid={`${source}-message-field`}>
          <Label
            htmlFor={`${source}-message`}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]"
          >
            Consulta
          </Label>
          <div className="space-y-1">
            <Textarea
              id={`${source}-message`}
              required
              minLength={7}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              disabled={isSubmitting}
              className={`min-h-32 resize-y rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4] disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Contanos qué solución industrial necesitás"
              data-testid={`${source}-message-input`}
            />
            {errors.message && (
              <p
                className="text-xs text-red-400"
                data-testid={`${source}-message-error`}
              >
                {errors.message}
              </p>
            )}
            {!errors.message && (
              <p className="text-xs text-[#757480]">
                {form.message.length}/1000
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-none border border-[#f1f0f4] bg-[#f1f0f4] px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#100f15] transition-colors duration-200 hover:bg-transparent hover:text-[#f1f0f4] disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            data-testid={`${source}-contact-submit-button`}
          >
            {isSubmitting && (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            )}
            {isSubmitting ? "Enviando..." : "Enviar consulta"}
          </Button>
          <span
            className="text-xs text-[#757480]"
            data-testid={`${source}-form-note`}
          >
            Respuesta comercial a la brevedad.
          </span>
        </div>
      </form>
    </>
  );
}
