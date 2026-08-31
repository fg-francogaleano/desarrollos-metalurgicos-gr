"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Crosshair,
  Gauge,
  MoveUpRight,
  Ruler,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { media, projects, solutions } from "@/lib/content";

export default function Home() {
  return (
    <div className="overflow-hidden" data-testid="home-page">
      <section
        className="relative flex min-h-[720px] items-end bg-[#100f15] pb-16 pt-36 sm:min-h-screen sm:pb-24"
        data-testid="home-hero-section"
      >
        <video
          className="absolute inset-0 hidden size-full object-cover md:block"
          autoPlay
          muted
          loop
          playsInline
          poster={media.industrial}
          aria-label="Video de soldadura y sistemas de piping industriales"
          data-testid="hero-desktop-video"
        >
          <source src={media.desktopVideo} type="video/mp4" />
        </video>
        <video
          className="absolute inset-0 block size-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster={media.welding}
          aria-label="Video móvil de soldadura y sistemas de piping industriales"
          data-testid="hero-mobile-video"
        >
          <source src={media.mobileVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#100f15]/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#100f15] via-[#100f15]/35 to-[#100f15]/20"
          aria-hidden="true"
        />
        <div
          className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12"
          data-testid="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div
              className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#c7c6cb]"
              data-testid="hero-eyebrow"
            >
              <span className="size-2 bg-[#f1f0f4]" /> Ingeniería industrial /
              Soluciones a medida
            </div>
            <h2
              className="max-w-4xl font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#f1f0f4] sm:text-7xl lg:text-[7.4rem]"
              data-testid="hero-title"
            >
              La precisión también se construye.
            </h2>
            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-[#e0dfe3] sm:text-lg"
              data-testid="hero-subtitle"
            >
              Construcción e instalación de montaje de líneas de conducción de
              fluidos, estructuras metálicas y montajes industriales.
            </p>
            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              data-testid="hero-actions"
            >
              <div
                // href="/soluciones"
                className="inline-flex h-12 items-center justify-center gap-3 border border-[#f1f0f4] bg-white px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#100f15] transition-colors duration-200 hover:bg-transparent hover:text-[#f1f0f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4]"
                data-testid="hero-solutions-link"
              >
                Ver soluciones <ArrowUpRight size={15} aria-hidden="true" />
              </div>
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/35 px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:border-[#f1f0f4] hover:bg-[#f1f0f4]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4]"
                data-testid="hero-contact-link"
              >
                Iniciar consulta <MoveUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
          <div
            className="mt-20 flex items-center justify-between border-t border-white/20 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#a1a0a6] sm:mt-28"
            data-testid="hero-meta-row"
          >
            <span>Desarrollos Metalúrgicos GR</span>
            <span className="hidden sm:inline">
              Acero inoxidable / Acero al carbono
            </span>
            <a
              href="#home-about"
              className="flex items-center gap-2 text-[#f1f0f4] transition-colors duration-200 hover:text-[#c5c4d4]"
              data-testid="hero-scroll-link"
            >
              Explorar <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#4a4954] bg-[#1c1b22]"
        data-testid="home-capability-strip"
      >
        <div className="mx-auto grid max-w-[1440px] divide-y divide-[#4a4954] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { label: "PIPING", icon: Gauge },
            { label: "ESTRUCTURAS METÁLICAS", icon: Ruler },
            { label: "MONTAJES INDUSTRIALES", icon: Crosshair },
          ].map(({ label, icon: Icon }, index) => (
            <div
              className="flex items-center gap-4 px-5 py-6 sm:px-8 lg:px-12"
              key={label}
              data-testid={`capability-strip-item-${index + 1}`}
            >
              <Icon size={18} className="text-[#c5c4d4]" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e0dfe3]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="home-about"
        className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-36"
        data-testid="home-about-section"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            01 / Nosotros
          </p>
          <div className="mt-8 h-px w-20 bg-[#f1f0f4]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <h2
            className="max-w-4xl font-heading text-4xl leading-[1.04] tracking-[-0.05em] text-[#f1f0f4] sm:text-6xl"
            data-testid="home-about-title"
          >
            Una empresa sólida, confiable, innovadora y técnicamente
            especializada.
          </h2>
          <p
            className="mt-8 max-w-2xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="home-about-copy"
          >
            Desarrollos Metalúrgicos GR se especializa en la construcción e
            instalación de montaje de líneas de conducción de fluidos utilizando
            acero inoxidable y acero al carbono PIPING. Ofrecemos soluciones
            personalizadas para diferentes tipos de industrias.
          </p>
          <Link
            href="/nosotros"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#f1f0f4] pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:text-[#c5c4d4]"
            data-testid="home-about-link"
          >
            Conocer la empresa <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>

      <section
        className="border-y border-[#4a4954] bg-[#f1f0f4] text-[#100f15]"
        data-testid="home-solutions-section"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#595676]">
                02 / Soluciones
              </p>
              <h2
                className="mt-5 max-w-2xl font-heading text-4xl leading-none tracking-[-0.05em] sm:text-6xl"
                data-testid="home-solutions-title"
              >
                Capacidad técnica para cada escala.
              </h2>
            </div>
            <Link
              href="/soluciones"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#100f15] transition-colors duration-200 hover:text-[#6f6b94]"
              data-testid="home-solutions-link"
            >
              Ver todas las soluciones{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-px border border-[#c5c4d4]  md:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                href="/soluciones"
                key={solution.number}
                className="group bg-[#f1f0f4] p-6 transition-colors duration-200 hover:bg-[#e2e1ea] sm:p-8"
                data-testid={`home-solution-card-${solution.number}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] text-[#6f6b94]">
                    {solution.number}
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-16 max-w-xs font-heading text-2xl leading-tight tracking-[-0.04em]">
                  {solution.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-[#595676]">
                  {solution.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-12 lg:py-36"
        data-testid="home-projects-section"
      >
        <div
          className="relative min-h-[430px] overflow-hidden border border-[#4a4954] bg-[#1c1b22]"
          data-testid="home-projects-image-block"
        >
          <img
            src={media.piping}
            alt="Sistema industrial de tuberías y válvulas"
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-75 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#100f15]/45" />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1f0f4]">
            P / 01 — Piping industrial
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
            03 / Proyectos destacados
          </p>
          <h2
            className="mt-6 max-w-xl font-heading text-4xl leading-[1.04] tracking-[-0.05em] sm:text-6xl"
            data-testid="home-projects-title"
          >
            Del detalle de una soldadura a la escala de una planta.
          </h2>
          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-[#a1a0a6]"
            data-testid="home-projects-copy"
          >
            Experiencia principal en sistemas de tuberías para transporte de
            fluidos, desarrollo de estructuras metálicas industriales,
            fabricaciones especiales a medida y montajes industriales.
          </p>
          <Link
            href="/proyectos"
            className="mt-9 inline-flex items-center gap-3 self-start border border-[#4a4954] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:bg-[#f1f0f4] hover:text-[#100f15]"
            data-testid="home-projects-link"
          >
            Ver proyectos <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="border-t border-[#4a4954] bg-[#1c1b22]"
        data-testid="home-contact-section"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12 lg:py-32">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
              04 / Contacto
            </p>
            <h2
              className="mt-6 max-w-md font-heading text-4xl leading-[1.05] tracking-[-0.05em] sm:text-5xl"
              data-testid="home-contact-title"
            >
              Hablemos de tu próximo proyecto.
            </h2>
            <p
              className="mt-6 max-w-sm text-sm leading-relaxed text-[#a1a0a6]"
              data-testid="home-contact-copy"
            >
              Formulario breve para consultas comerciales y soluciones
              industriales personalizadas.
            </p>
          </div>
          <div
            className="border border-[#4a4954] bg-[#100f15] p-6 sm:p-8"
            data-testid="home-contact-form-panel"
          >
            <ContactForm source="home" compact />
          </div>
        </div>
      </section>
    </div>
  );
}
