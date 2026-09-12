/**
 * Utilidades para integración con EmailJS
 * Gestiona la inicialización y envío de emails
 */

import emailjs from "@emailjs/browser";
import type { ContactPayload } from "./content";

/**
 * Inicializar EmailJS con la Public Key
 * Esta función debe llamarse una sola vez, preferentemente en el componente raíz o en el formulario
 */
export function initEmailJS(): void {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!publicKey) {
    console.error("EmailJS Public Key no configurada en las variables de entorno.");
    throw new Error("EmailJS Public Key no está configurada");
  }

  emailjs.init(publicKey);
}

/**
 * Enviar email de contacto
 * @param formData - Datos del formulario validados y sanitizados
 * @returns Promesa que se resuelve cuando el envío es exitoso
 */
export async function sendContactEmail(
  formData: Omit<ContactPayload, "source">
): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    console.error("EmailJS configuration is missing");
    throw new Error("Configuración de EmailJS incompleta");
  }

  // Las variables de template en EmailJS se acceden como {{variable_name}}
  // Asegúrate de que estos nombres coincidan con los definidos en tu template
  const templateParams = {
    name: formData.name,
    email: formData.email,
    company: formData.company || "No especificada",
    phone: formData.phone || "No especificado",
    message: formData.message,
    reply_to: formData.email,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    // No exponer detalles técnicos al usuario
    console.error("Error al enviar email:", error);
    throw new Error("No se pudo enviar el mensaje. Intentá nuevamente.");
  }
}

/**
 * Validar que EmailJS esté disponible
 * (Útil para testing o verificación)
 */
export function isEmailJSConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  );
}
