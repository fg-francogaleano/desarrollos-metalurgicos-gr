"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export default function Proyectos() {
  return (
    <div data-testid="proyectos-page">
      <section
        className="border-b border-[#4a4954] px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28 lg:pt-52"
        data-testid="proyectos-intro-section"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            Proyectos destacados / 03
          </p>
          <h1
            className="mt-7 max-w-5xl font-heading text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]"
            data-testid="proyectos-page-title"
          >
            La técnica se ve en el resultado.
          </h1>
          <p
            className="mt-9 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="proyectos-page-intro"
          >
            Mostrar proyectos realizados, con fotos, descripción, industria y
            tecnologías usadas.
          </p>
        </div>
      </section>
      <section
        className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32"
        data-testid="projects-grid-section"
      >
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              key={project.number}
              className={`${index === 0 ? "md:col-span-2" : ""}`}
              data-testid={`project-card-${project.number.replaceAll(" ", "-").toLowerCase()}`}
            >
              <div
                className={`group relative overflow-hidden border border-[#4a4954] bg-[#1c1b22] ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100f15] via-[#100f15]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c7c6cb]">
                      {project.number}
                    </span>
                    <ArrowUpRight
                      size={19}
                      className="text-[#f1f0f4] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                  <h2
                    className="mt-5 max-w-2xl font-heading text-2xl leading-tight tracking-[-0.04em] text-[#f1f0f4] sm:text-4xl"
                    data-testid={`project-title-${index + 1}`}
                  >
                    {project.title}
                  </h2>
                </div>
              </div>
              <div className="grid gap-5 border-x border-b border-[#4a4954] p-6 sm:grid-cols-[1.4fr_0.8fr_1fr] sm:p-7">
                <p className="text-sm leading-relaxed text-[#a1a0a6]">
                  {project.description}
                </p>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#757480]">
                    Industria
                  </p>
                  <p className="mt-2 text-sm text-[#e0dfe3]">
                    {project.industry}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#757480]">
                    Tecnologías
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#e0dfe3]">
                    {project.technologies.join(" / ")}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section
        className="border-t border-[#4a4954] bg-[#1c1b22]"
        data-testid="projects-growth-section"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a0a6]">
              Portafolio en expansión
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#c7c6cb]">
              La sección está preparada para crecer con nuevos proyectos,
              industrias y tecnologías usadas.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 self-start border border-[#f1f0f4] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:bg-[#f1f0f4] hover:text-[#100f15]"
            data-testid="projects-contact-link"
          >
            Presentar un proyecto <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
