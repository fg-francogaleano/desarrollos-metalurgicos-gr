"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { media } from "@/lib/content";
import {
  ShieldCheck,
  ArrowUpRight,
  Headset,
  CalendarClock,
  SlidersVertical,
} from "lucide-react";

const values = [
  "Sólida",
  "Confiable",
  "Innovadora",
  "Técnicamente especializada",
  "Altos estándares de calidad",
];

export default function Nosotros() {
  return (
    <div data-testid="nosotros-page">
      <section
        className="px-5 pb-20 pt-40 sm:px-8 lg:px- lg:pb-28 lg:pt-52 grid grid-cols-1 lg:grid-cols-2 gap-11"
        data-testid="nosotros-intro-section"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            01 / Nosotros
          </p>
          <h2
            className="mt-7 max-w-5xl font-heading text-4xl leading-[1.1] tracking-[-0.06em] sm:text-7xl lg:text-6xl xl:text-7xl"
            data-testid="nosotros-page-title"
          >
            Ingeniería, <br className="hidden lg:block" /> compromiso y <br className="hidden lg:block" /> respaldo <br className="hidden lg:block" /> en cada momento.
          </h2>
          <p
            className="mt-9 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="nosotros-page-intro"
          >
            En desarrollo metalúrgicos GR nos consolidamos como un socio
            estratégico para la industria nacional, especializándonos en la
            construcción e instalación de líneas de piping, bateas y estructuras
            de alta complejidad.
          </p>
          <p
            className="mt-9 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="nosotros-page-intro"
          >
            Combinamos capacidad técnica equipamiento de precisión y una gestión
            en planta orientada a responder a las más altas exigencias
            normativas y operativas de nuestros clientes.
          </p>
        </div>

        <div className="mx-auto md:grid max-w-[1440px] gap-4 px-0 py-0 md:grid-cols-2 hidden">
          {[
            {
              title: "NORMAS Y RIGOR TÉCNICO",
              copy: "Ejecución bajo normas ASME B31.3 y soldaduras calificadas ASME Sección IX. Procedimientos WPS y trazabilidad total de materiales certificados.",
              icon: ShieldCheck,
            },
            {
              title: "ADAPTABILIDAD",
              copy: "Capacidad para ejecutar proyectos complejos según las especificaciones de cada planta, con experiencia en industrias alimenticias, petroquímicas, químicas y laboratorios.",
              icon: SlidersVertical,
            },
            {
              title: "EJECUCIÓN A TIEMPO",
              copy: "Planificación rigurosa para el cumplimiento estricto de los plazos de entrega y la optimización de tiempos en paradas de planta.",
              icon: CalendarClock,
            },
            {
              title: "ASESORAMIENTO",
              copy: "Atención directa y acompañamiento técnico personalizado desde la revisión inicial del pliego hasta el montaje final.",
              icon: Headset,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                key={item.title}
                className="
            group border border-[#4a4954] px-8 py-8 flex justify-center align-center gap-4 bg-[#1C1B22] hover:border hover:border-[#8466A9] transition-transform duration-300"
                data-testid={`nosotros-principle-${item.title.toLowerCase()}`}
              >
                <div className="">
                  <div>
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#8466A9] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="font-heading mt-3 text-xl xl:text-xl tracking-[-0.04em]">
                    {/* <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6b94]">
                      0{index + 1}
                    </span> */}
                    {item.title}
                  </h2>

                  <p className="mt-5 text-sm leading-relaxed text-[#a1a0a6]">
                    {item.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section
        className="border-y border-[#4a4954] bg-[#f1f0f4] text-[#100f15] sm:hidden block"
        data-testid="nosotros-mission-section"
      >
        <div className="mx-auto grid max-w-[1440px] gap-0 px-0 py-0 md:grid-cols-2">
          {[
            {
              title: "NORMAS Y RIGOR TÉCNICO",
              copy: "Ejecución bajo normas ASME B31.3 y soldaduras calificadas ASME Sección IX. Procedimientos WPS y trazabilidad total de materiales certificados.",
              icon: ShieldCheck,
            },
            {
              title: "ADAPTABILIDAD",
              copy: "Capacidad operativa para interpretar, ajustar y ejecutar proyectos complejos en estricta conformidad con las especificaciones de su planta. Industrias Alimenticias, Petroquímicas, Químicas y Laboratorios",
              icon: SlidersVertical,
            },
            {
              title: "EJECUCIÓN A TIEMPO",
              copy: "Planificación rigurosa para el cumplimiento estricto de los plazos de entrega y la optimización de tiempos en paradas de planta.",
              icon: CalendarClock,
            },
            {
              title: "ASESORAMIENTO UNO A UNO",
              copy: "Atención directa y acompañamiento técnico personalizado desde la revisión inicial del pliego hasta el montaje final.",
              icon: Headset,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                key={item.title}
                className="
            border-b border-[#c5c4d4]
            px-5 py-12
            sm:px-8 flex justify-center align-center gap-5
            md:border-r md:px-12 md:py-16
            md:[&:nth-child(2n)]:border-r-0
            md:[&:nth-child(n+3)]:border-b-0
          "
                data-testid={`nosotros-principle-${item.title.toLowerCase()}`}
              >
                <div className="self-center">
                  <div className="flex items-center justify-between">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#634983]"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="mt-14 font-heading text-2xl tracking-[-0.04em]">
                    {/* <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6b94]">
                      0{index + 1}
                    </span> */}
                    {item.title}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-[#595676]">
                    {item.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section
        className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 lg:py-32"
        data-testid="nosotros-history-section"
      >
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Historia y experiencia
          </p>
          <h2
            className="mt-6 max-w-xl font-heading text-4xl leading-tight tracking-[-0.05em] sm:text-5xl"
            data-testid="nosotros-history-title"
          >
            Experiencia principal en sistemas que mueven industrias.
          </h2>
          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-[#c7c6cb]"
            data-testid="nosotros-history-copy"
          >
            La empresa se especializa en la construcción e instalación de
            sistemas de PIPING para la conducción de fluidos, trabajando con
            acero inoxidable y acero al carbono para responder a las exigencias
            de distintos procesos industriales.
          </p>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="nosotros-complementary-copy"
          >
            Acompañando esta especialización, desarrolla soluciones en
            estructuras metálicas, incluyendo entrepisos y bateas de proceso,
            integrando los distintos componentes requeridos para brindar
            soluciones completas en cada proyecto.
          </p>
        </motion.div>
        <div
          className="relative min-h-[380px] overflow-hidden border border-[#4a4954]"
          data-testid="nosotros-image-panel"
        >
          <img
            src={media.team}
            alt="Equipo de trabajo industrial"
            loading="lazy"
            className="absolute inset-0 size-full object-cover grayscale transition-[filter,transform] duration-700 hover:scale-105 hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[#100f15]/25" />
          <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1f0f4]">
            Capacidad / Equipo / Precisión
          </span>
        </div>
      </section>
    </div>
  );
}
