"use client"

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactPayload } from "@/lib/content";

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

export default function ContactForm({ source, compact = false }: ContactFormProps) {
  const [form, setForm] = useState<ContactPayload>({ ...initialForm, source });

  const updateField = (field: keyof ContactPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hola");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid={`${source}-contact-form`}>
      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div className="space-y-2" data-testid={`${source}-name-field`}>
          <Label htmlFor={`${source}-name`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]">Nombre</Label>
          <Input id={`${source}-name`} required minLength={2} value={form.name} onChange={(event) => updateField("name", event.target.value)} className="h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4]" placeholder="Nombre y apellido" data-testid={`${source}-name-input`} />
        </div>
        <div className="space-y-2" data-testid={`${source}-company-field`}>
          <Label htmlFor={`${source}-company`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]">Empresa</Label>
          <Input id={`${source}-company`} value={form.company} onChange={(event) => updateField("company", event.target.value)} className="h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4]" placeholder="Nombre de la empresa" data-testid={`${source}-company-input`} />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div className="space-y-2" data-testid={`${source}-email-field`}>
          <Label htmlFor={`${source}-email`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]">Correo electrónico</Label>
          <Input id={`${source}-email`} type="email" required value={form.email} onChange={(event) => updateField("email", event.target.value)} className="h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4]" placeholder="correo@empresa.com" data-testid={`${source}-email-input`} />
        </div>
        <div className="space-y-2" data-testid={`${source}-phone-field`}>
          <Label htmlFor={`${source}-phone`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]">Teléfono</Label>
          <Input id={`${source}-phone`} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="h-12 rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4]" placeholder="Teléfono de contacto" data-testid={`${source}-phone-input`} />
        </div>
      </div>

      <div className="space-y-2" data-testid={`${source}-message-field`}>
        <Label htmlFor={`${source}-message`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c7c6cb]">Consulta</Label>
        <Textarea id={`${source}-message`} required minLength={10} value={form.message} onChange={(event) => updateField("message", event.target.value)} className="min-h-32 resize-y rounded-none border-[#4a4954] bg-[#1c1b22] text-[#f1f0f4] placeholder:text-[#757480] focus-visible:ring-[#f1f0f4]" placeholder="Contanos qué solución industrial necesitás" data-testid={`${source}-message-input`} />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 rounded-none border border-[#f1f0f4] bg-[#f1f0f4] px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#100f15] transition-colors duration-200 hover:bg-transparent hover:text-[#f1f0f4] disabled:opacity-60" data-testid={`${source}-contact-submit-button`}>
          Enviar consulta
        </Button>
        <span className="text-xs text-[#757480]" data-testid={`${source}-form-note`}>Respuesta comercial a la brevedad.</span>
      </div>
    </form>
  );
}