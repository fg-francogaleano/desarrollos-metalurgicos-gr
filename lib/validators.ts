/**
 * Validadores para el formulario de contacto
 * Cada validador retorna un objeto con isValid y message
 */

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validador de nombre
 * - Obligatorio
 * - 2-80 caracteres
 * - No solo espacios
 * - Permite nombres compuestos
 */
export function validateName(value: string): ValidationResult {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, message: "El nombre es obligatorio." };
  }

  if (trimmed.length < 2) {
    return { isValid: false, message: "El nombre debe tener al menos 2 caracteres." };
  }

  if (trimmed.length > 80) {
    return { isValid: false, message: "El nombre no puede exceder 80 caracteres." };
  }

  return { isValid: true };
}

/**
 * Validador de empresa
 * - Obligatorio
 * - 2-120 caracteres
 * - No solo espacios
 * - Permite espacios, números y caracteres comerciales
 */
export function validateCompany(value: string): ValidationResult {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, message: "La empresa es obligatoria." };
  }

  if (trimmed.length < 2) {
    return { isValid: false, message: "El nombre de la empresa debe tener al menos 2 caracteres." };
  }

  if (trimmed.length > 120) {
    return { isValid: false, message: "El nombre de la empresa no puede exceder 120 caracteres." };
  }

  return { isValid: true };
}

/**
 * Validador de email
 * - Obligatorio
 * - Formato válido
 * - Máximo 50 caracteres (aunque algunos emails pueden ser más largos, es un límite razonable para contactos)
 * - Sin espacios
 */
export function validateEmail(value: string): ValidationResult {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, message: "El email es obligatorio." };
  }

  if (trimmed.length > 50) {
    return { isValid: false, message: "El email no puede exceder 50 caracteres." };
  }

  // Expresión regular robusta pero no excesivamente compleja para email
  // Valida el formato básico de email: algo@dominio.algo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmed)) {
    return { isValid: false, message: "Ingresá un email válido." };
  }

  // Validaciones adicionales
  if (trimmed.includes("..")) {
    return { isValid: false, message: "El email tiene un formato inválido." };
  }

  if (trimmed.startsWith(".") || trimmed.endsWith(".")) {
    return { isValid: false, message: "El email tiene un formato inválido." };
  }

  return { isValid: true };
}

/**
 * Validador de teléfono
 * - Obligatorio
 * - Permite formatos con +, espacios, guiones, paréntesis
 * - Mínimo 7 dígitos (considera formato internacional y local)
 * - Máximo 20 caracteres
 * - Especialmente adaptado para Argentina (+54 9 XXXX-XXXX-XXXX)
 */
export function validatePhone(value: string): ValidationResult {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, message: "El teléfono es obligatorio." };
  }

  if (trimmed.length > 20) {
    return { isValid: false, message: "El teléfono no puede exceder 20 caracteres." };
  }

  // Extraer solo los dígitos para contar
  const digitsOnly = trimmed.replace(/\D/g, "");

  if (digitsOnly.length < 7) {
    return { isValid: false, message: "El teléfono debe tener al menos 7 dígitos." };
  }

  // Permitir caracteres válidos: dígitos, +, espacios, guiones, paréntesis, puntos
  const validCharacterRegex = /^[0-9+\s\-().]*$/;

  if (!validCharacterRegex.test(trimmed)) {
    return { isValid: false, message: "Ingresá un número de teléfono válido." };
  }

  // No permitir solo caracteres especiales
  if (!/\d/.test(trimmed)) {
    return { isValid: false, message: "El teléfono debe contener dígitos." };
  }

  return { isValid: true };
}

/**
 * Validador de consulta/mensaje
 * - Obligatorio
 * - 7-1000 caracteres
 * - No solo espacios
 */
export function validateMessage(value: string): ValidationResult {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, message: "La consulta es obligatoria." };
  }

  if (trimmed.length < 7) {
    return { isValid: false, message: "La consulta debe tener al menos 7 caracteres." };
  }

  if (trimmed.length > 1000) {
    return { isValid: false, message: "La consulta no puede exceder 1000 caracteres." };
  }

  return { isValid: true };
}

/**
 * Validar todo el formulario
 */
export interface FormValidationErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function validateForm(formData: {
  name: string;
  company: string | undefined;
  email: string;
  phone: string | undefined;
  message: string;
}): FormValidationErrors {
  const errors: FormValidationErrors = {};

  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.message;
  }

  // Company es opcional, solo validar si tiene contenido
  if (formData.company) {
    const companyValidation = validateCompany(formData.company);
    if (!companyValidation.isValid) {
      errors.company = companyValidation.message;
    }
  }

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
  }

  // Phone es opcional, solo validar si tiene contenido
  if (formData.phone) {
    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      errors.phone = phoneValidation.message;
    }
  }

  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message;
  }

  return errors;
}

/**
 * Sanitizar y normalizar datos
 * - Trim espacios al inicio y final
 * - Normalizar espacios múltiples internos
 */
export function sanitizeFormData(formData: {
  name: string;
  company: string | undefined;
  email: string;
  phone: string | undefined;
  message: string;
}) {
  return {
    name: formData.name.trim().replace(/\s+/g, " "),
    company: formData.company ? formData.company.trim().replace(/\s+/g, " ") : undefined,
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone ? formData.phone.trim() : undefined,
    message: formData.message.trim().replace(/\s+/g, " "),
  };
}
