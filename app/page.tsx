"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Beer,
  Crosshair,
  Factory,
  FlaskConical,
  Fuel,
  Gauge,
  MoveUpRight,
  Ruler,
  Snowflake,
  Utensils,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { media, projects, solutions } from "@/lib/content";
import Nosotros from "./nosotros/page";
import Proyectos from "./proyectos/page";
import Contacto from "./contacto/page";

const industries = [
  { name: "Industria Química", icon: FlaskConical },
  { name: "Industria Alimenticia", icon: UtensilsCrossed },
  { name: "Oil & Gas", icon: Fuel },
  // { name: "Industria Petroquímica", icon: Factory },
  { name: "Tratamiento de Aguas y Efluentes", icon: Waves },
  { name: "Frigoríficos", icon: Snowflake },
  { name: "Cervecería y Maltería", icon: Beer },
];

export default function Home() {
  return (
    <div className="overflow-hidden" data-testid="home-page">
      {/* INCIO */}
      <section
        className="relative flex min-h-[720px] items-end bg-[#100f15] pb-16 pt-36 sm:min-h-screen sm:pb-24"
        data-testid="home-hero-section"
        id="inicio"
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
            {/* <div
              className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#c7c6cb]"
              data-testid="hero-eyebrow"
            >
              <span className="size-1 bg-[#f1f0f4]" /> Ingeniería industrial /
              Soluciones a medida
            </div> */}
            <h1
              className="max-w-4xl font-heading text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#f1f0f4] sm:text-7xl lg:text-[7.4rem]"
              data-testid="hero-title"
            >
              SOLUCIONES PRECISAS PARA
            </h1>
            <h1
              className="max-w-4xl bg-gradient-to-b from-[#A88BD4] via-[#8466A9] to-[#5C3E80] bg-clip-text font-heading text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-transparent sm:text-7xl lg:text-[7.4rem]"
              data-testid="hero-title"
            >
              INDUSTRIAS EXIGENTES.
            </h1>
            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-[#e0dfe3] sm:text-lg"
              data-testid="hero-subtitle"
            >
              Especialistas en sistemas de piping, bateas y montajes
              industriales. Soluciones en acero inoxidable y carbono, con
              soldadura especializada y estrictos estándares de calidad.
            </p>
            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              data-testid="hero-actions"
            >
              <Link
                href="#servicios"
                className="inline-flex h-12 items-center justify-center gap-3 border border-[#f1f0f4] bg-white px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#100f15] transition-colors duration-200 hover:bg-transparent hover:text-[#f1f0f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4]"
                data-testid="hero-solutions-link"
              >
                Ver servicios <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/35 px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:border-[#f1f0f4] hover:bg-[#f1f0f4]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4]"
                data-testid="hero-contact-link"
              >
                Cotizar proyecto <MoveUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
          <div
            className="mt-20 flex items-center justify-between border-t border-white/20 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#a1a0a6] sm:mt-28"
            data-testid="hero-meta-row"
          >
            <span>GR Desarrollos Metalúrgicos</span>
            <a
              href="#nosotros"
              className="flex items-center gap-2 text-[#f1f0f4] transition-colors duration-200 hover:text-[#c5c4d4]"
              data-testid="hero-scroll-link"
            >
              Explorar <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="mx-auto max-w-[1440px] gap-12"
        data-testid="home-about-section"
      >
        <Nosotros />
      </section>
      {/* SERVICIOS */}
      <section
        className="border-y border-[#4a4954] bg-[#f1f0f4] text-[#100f15]"
        data-testid="home-solutions-section"
        id="servicios"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#595676]">
                02 / Servicios
              </p>
              <h2
                className="mt-5 max-w-2xl font-heading text-4xl leading-none tracking-[-0.05em] sm:text-6xl"
                data-testid="home-solutions-title"
              >
                Capacidad técnica para cada escala.
              </h2>
              <p
                className="mt-9 max-w-xl text-base leading-relaxed text-[#535357]"
                data-testid="servicios-page-intro"
              >
                Desarrollamos soluciones integrales en ingeniería, fabricación y
                montaje ejecutadas con estricto criterio normativo.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="group bg-[#f1f0f4] border border-[#c5c4d4] p-6 transition-colors duration-200 hover:bg-[#e2e1ea] sm:p-8"
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

                <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-[#e2e1ea]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 max-w-xs font-heading text-2xl leading-tight tracking-[-0.04em]">
                  {solution.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[#595676]">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
          <div
            id="industrias"
            className="mt-20 flex scroll-mt-24 flex-col justify-between gap-7 border-t border-[#c5c4d4] pt-10 md:mt-35 md:flex-row md:items-end"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#595676]">
                Industrias
              </p>
              <h2
                className="mt-5 max-w-2xl font-heading text-4xl leading-none tracking-[-0.05em] sm:text-6xl"
                data-testid="home-solutions-title"
              >
                Industrias que confian en nuestras soluciones.
              </h2>
              <p
                className="mt-9 max-w-xl text-base leading-relaxed text-[#535357]"
                data-testid="servicios-page-intro"
              >
                Trabajamos junto a diferentes sectores, adaptando nuestros servicios a sus necesidades específicas.
              </p>
            </div>
          </div>
          <ul
            aria-label="Industrias"
            className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 md:grid-cols-4 md:gap-x-6 xl:grid-cols-7 xl:gap-x-5"
            data-testid="industries-list"
          >
            {industries.map(({ name, icon: Icon }, index) => (
              <li
                key={name}
                className={`flex min-w-0 flex-col items-center text-center ${
                  index === 4 ? "md:col-start-2 xl:col-start-auto" : ""
                } ${index === 6 ? "max-md:col-span-2 max-md:mx-auto max-md:w-1/2" : ""}`}
              >
                <span className="group grid size-16 place-items-center rounded-full border border-[#8466A9] text-[#8466A9] transition-colors duration-300">
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
                <h5 className="mt-4 w-full max-w-[12rem] text-sm leading-snug text-[#3f3f45] font-semibold">
                  {name}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* PROYECTOS */}
      <section
        className="mx-auto max-w-[1440px] gap-12 px-0 py-0 sm:pt-10 sm:px-8 lg:gap-20 lg:px-12 lg:py-0"
        data-testid="home-projects-section"
        id="proyectos"
      >
        <Proyectos />
      </section>
      {/* CONTACTO */}
      <section
        className="border-t border-[#4a4954] bg-[#1c1b22]"
        data-testid="home-contact-section"
        id="contacto"
      >
        {/* <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12 lg:py-32">
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
        </div> */}
        <Contacto />
      </section>
    </div>
  );
}