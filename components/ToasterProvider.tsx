"use client";

import { Toaster } from "sonner";

/**
 * Componente proveedor de notificaciones (toasts)
 * Configura sonner con posición inferior izquierda
 * Las notificaciones aparecen de izquierda a derecha y desaparecen hacia la izquierda
 */
export function ToasterProvider() {
  return (
    <Toaster
      position="bottom-left"
      richColors
      closeButton
      expand
      visibleToasts={4}
    />
  );
}
