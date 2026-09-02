"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { media } from "@/lib/content";

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
        className="border-b border-[#4a4954] px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28 lg:pt-52"
        data-testid="nosotros-intro-section"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Nosotros / 01
          </p>
          <h1
            className="mt-7 max-w-5xl font-heading text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]"
            data-testid="nosotros-page-title"
          >
            Soluciones industriales con criterio técnico.
          </h1>
          <p
            className="mt-9 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="nosotros-page-intro"
          >
            Transformamos necesidades industriales en soluciones pensadas para funcionar, perdurar y responder a cada desafío.
          </p>
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
           La empresa se especializa en la construcción e instalación de sistemas de PIPING para la conducción de fluidos, trabajando con acero inoxidable y acero al carbono para responder a las exigencias de distintos procesos industriales.
          </p>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="nosotros-complementary-copy"
          >
           Acompañando esta especialización, desarrolla soluciones en estructuras metálicas, incluyendo entrepisos y bateas de proceso, integrando los distintos componentes requeridos para brindar soluciones completas en cada proyecto.
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
      <section
        className="border-y border-[#4a4954] bg-[#f1f0f4] text-[#100f15]"
        data-testid="nosotros-mission-section"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:gap-px lg:bg-[#c5c4d4] lg:px-0 lg:py-0">
          {[
            {
              title: "Misión",
              copy: "Ofrecer soluciones personalizadas para diferentes tipos de industrias.",
            },
            {
              title: "Visión",
              copy: "Transmitir confianza, experiencia y capacidad técnica.",
            },
            {
              title: "Experiencia",
              copy: "Sistemas de tuberías, estructuras metálicas industriales, fabricaciones especiales a medida y montajes industriales.",
            },
          ].map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={item.title}
              className="border-b border-[#c5c4d4] pb-8 lg:border-0 lg:bg-[#f1f0f4] lg:p-12 lg:pb-16"
              data-testid={`nosotros-principle-${item.title.toLowerCase()}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6b94]">
                0{index + 1}
              </span>
              <h2 className="mt-14 font-heading text-3xl tracking-[-0.04em]">
                {item.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#595676]">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section
        className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32"
        data-testid="nosotros-values-section"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Valores
          </p>
          <h2
            className="mt-6 font-heading text-4xl tracking-[-0.05em] sm:text-5xl"
            data-testid="nosotros-values-title"
          >
            Una forma de trabajar.
          </h2>
        </div>
        <div className="border-y border-[#4a4954]">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group flex items-center gap-5 border-b border-[#4a4954] px-4 py-5 transition-colors duration-300 last:border-b-0 hover:bg-[#1c1b22] sm:px-6 sm:py-6"
              data-testid={`nosotros-value-${index + 1}`}
            >
              <span className="w-8 font-mono text-[10px] tracking-[0.2em] text-[#6f6b94] transition-colors duration-300 group-hover:text-[#c5c4d4]">
                0{index + 1}
              </span>
              <span className="font-heading text-xl tracking-[-0.03em] text-[#e0dfe3] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                {value}
              </span>
              <span className="ml-auto h-px w-8 bg-[#6f6b94] transition-[width,background-color] duration-300 group-hover:w-14 group-hover:bg-[#c5c4d4]" />
            </motion.div>
          ))}
        </div>
      </section>
      <section
        className="border-t border-[#4a4954] bg-[#1c1b22]"
        data-testid="nosotros-certifications-section"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-start gap-4">
            <ShieldCheck
              size={22}
              className="mt-1 text-[#c5c4d4]"
              aria-hidden="true"
            />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a1a0a6]">
                Equipo y certificaciones
              </p>
              <p
                className="mt-3 max-w-2xl text-sm leading-relaxed text-[#c7c6cb]"
                data-testid="nosotros-certifications-copy"
              >
                Equipo y certificaciones que respaldan la capacidad técnica y la calidad de cada proyecto industrial.
              </p>
            </div>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 self-start border border-[#4a4954] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:bg-[#f1f0f4] hover:text-[#100f15]"
            data-testid="nosotros-contact-link"
          >
            Consultar capacidades <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
