"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { solutions } from "@/lib/content";

export default function Soluciones() {
  return (
    <div data-testid="soluciones-page">
      <section
        className="border-b border-[#4a4954] px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28 lg:pt-52"
        data-testid="soluciones-intro-section"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Soluciones / 02
          </p>
          <h1
            className="mt-7 max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[7.8rem]"
            data-testid="soluciones-page-title"
          >
            Del diseño al montaje.
          </h1>
          <p
            className="mt-9 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="soluciones-page-intro"
          >
            Cada solución como bloque independiente, con imagen, descripción,
            beneficios, aplicaciones y botón de contacto.
          </p>
        </div>
      </section>
      <section
        className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32"
        data-testid="solutions-list-section"
      >
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              key={solution.number}
              className={`grid gap-10 border-t border-[#4a4954] pt-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              data-testid={`solution-block-${solution.number}`}
            >
              <div
                className="relative min-h-[320px] overflow-hidden border border-[#4a4954] bg-[#1c1b22] lg:min-h-[460px]"
                data-testid={`solution-image-${solution.number}`}
              >
                <img
                  src={solution.image}
                  alt={`${solution.title} en Desarrollos Metalúrgicos GR`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#100f15]/30" />
                <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1f0f4]">
                  Solución / {solution.number}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-xs text-[#a1a0a6]">
                    {solution.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a1a0a6]">
                    Capacidad industrial
                  </span>
                </div>
                <h2
                  className="mt-8 max-w-2xl font-heading text-4xl leading-[1.02] tracking-[-0.05em] sm:text-5xl"
                  data-testid={`solution-title-${solution.number}`}
                >
                  {solution.title}
                </h2>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-[#c7c6cb]">
                  {solution.description}
                </p>
                <div className="mt-9 grid gap-7 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a0a6]">
                      Beneficios
                    </p>
                    <ul className="mt-4 space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-3 text-sm text-[#e0dfe3]"
                        >
                          <Check
                            size={14}
                            className="text-[#c5c4d4]"
                            aria-hidden="true"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a0a6]">
                      Aplicaciones
                    </p>
                    <ul className="mt-4 space-y-3">
                      {solution.applications.map((application) => (
                        <li
                          key={application}
                          className="border-l border-[#757480] pl-3 text-sm text-[#e0dfe3]"
                        >
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contacto"
                  className="mt-10 inline-flex items-center gap-3 self-start border-b border-[#f1f0f4] pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:text-[#c5c4d4]"
                  data-testid={`solution-contact-link-${solution.number}`}
                >
                  Contactar sobre esta solución{" "}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section
        className="border-t border-[#4a4954] bg-[#f1f0f4] text-[#100f15]"
        data-testid="solutions-growth-section"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6f6b94]">
              Arquitectura preparada para crecer
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#595676]">
              El sistema de soluciones está preparado para sumar nuevas
              propuestas fácilmente en el futuro.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 self-start border border-[#100f15] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 hover:bg-[#100f15] hover:text-[#f1f0f4]"
            data-testid="solutions-growth-contact-link"
          >
            Hablar con el equipo <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
