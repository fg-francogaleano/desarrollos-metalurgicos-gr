import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <div data-testid="contacto-page">
      <section
        className="border-b border-[#4a4954] px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28 lg:pt-52"
        data-testid="contacto-intro-section"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Contacto / 04
          </p>
          <h1
            className="mt-7 max-w-5xl font-heading text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]"
            data-testid="contacto-page-title"
          >
            Hablemos de soluciones.
          </h1>
          <p
            className="mt-9 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="contacto-page-intro"
          >
            Contanos sobre tu necesidad industrial. Nuestro formulario está
            disponible para consultas comerciales.
          </p>
        </div>
      </section>
      <section
        className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-32"
        data-testid="contacto-main-section"
      >
        <aside data-testid="contacto-details-panel">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Información de contacto
          </p>
          <h2
            className="mt-6 max-w-sm font-heading text-4xl leading-tight tracking-[-0.05em]"
            data-testid="contacto-details-title"
          >
            Una conversación puede ser el primer paso.
          </h2>
          <div className="mt-12 space-y-7 border-t border-[#4a4954] pt-7">
            {[
              {
                icon: Phone,
                label: "Teléfono",
                value: "Consultar mediante el formulario",
              },
              {
                icon: Mail,
                label: "Correo",
                value: "Consultar mediante el formulario",
              },
              {
                icon: MapPin,
                label: "Dirección",
                value: "No especificada en el documento",
              },
              {
                icon: Clock3,
                label: "Horarios",
                value: "No especificados en el documento",
              },
            ].map(({ icon: Icon, label, value }, index) => (
              <div
                className="flex gap-4"
                key={label}
                data-testid={`contact-detail-${index + 1}`}
              >
                <Icon
                  size={17}
                  className="mt-0.5 text-[#c5c4d4]"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a1a0a6]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-[#e0dfe3]">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-10 border border-[#4a4954] bg-[#1c1b22] p-5"
            data-testid="contacto-whatsapp-note"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a1a0a6]">
              WhatsApp
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#c7c6cb]">
              Enlace opcional contemplado en la especificación. No se
              proporcionó un número para activar la integración.
            </p>
          </div>
        </aside>
        <div
          className="border border-[#4a4954] bg-[#1c1b22] p-6 sm:p-9"
          data-testid="contacto-form-panel"
        >
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#4a4954] pb-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a0a6]">
                Consulta comercial
              </p>
              <h2
                className="mt-3 font-heading text-3xl tracking-[-0.04em]"
                data-testid="contacto-form-title"
              >
                Contanos sobre tu proyecto.
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#757480]">
              GR / 04
            </span>
          </div>
          <ContactForm source="contact" />
        </div>
      </section>
      <section
        className="border-t border-[#4a4954] bg-[#f1f0f4] text-[#100f15]"
        data-testid="contacto-map-section"
      >
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6f6b94]">
              Mapa
            </p>
            <h2
              className="mt-4 font-heading text-3xl tracking-[-0.04em]"
              data-testid="contacto-map-title"
            >
              Ubicación a confirmar.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#595676]">
              El mapa es opcional y la dirección no está especificada en el
              documento de requerimientos. Esta área queda preparada para
              incorporarla.
            </p>
          </div>
          <div
            className="flex min-h-40 items-center justify-center border border-dashed border-[#a9a6bf] bg-[#e2e1ea]"
            data-testid="contacto-map-placeholder"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6f6b94]">
              Mapa opcional / Próxima configuración
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
