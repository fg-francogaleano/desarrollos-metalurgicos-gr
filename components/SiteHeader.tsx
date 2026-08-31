"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Soluciones", to: "/soluciones" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Contacto", to: "/contacto" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#100f15]/85 backdrop-blur-xl"
      data-testid="site-header"
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#f1f0f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4]"
          data-testid="brand-home-link"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Desarrollos Metalúrgicos GR"
            className="h-9 w-auto rounded-sm object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
          <span className="hidden font-heading text-sm font-semibold uppercase tracking-[0.18em] sm:inline">
            Desarrollos Metalúrgicos
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegación principal"
          data-testid="desktop-navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`group relative py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4] ${
                pathname === item.to
                  ? "text-[#f1f0f4]"
                  : "text-[#a1a0a6] hover:text-[#f1f0f4]"
              }`}
              data-testid={`desktop-nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#f1f0f4] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden items-center gap-2 border border-[#f1f0f4] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1f0f4] transition-colors duration-200 hover:bg-[#f1f0f4] hover:text-[#100f15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4] lg:flex"
          data-testid="header-contact-cta"
        >
          Iniciar consulta <MoveUpRight size={13} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="grid size-10 place-items-center border border-white/25 text-[#f1f0f4] transition-colors duration-200 hover:bg-[#f1f0f4] hover:text-[#100f15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f4] lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          data-testid="mobile-menu-toggle"
        >
          {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/15 bg-[#1c1b22] px-5 py-5 lg:hidden"
            aria-label="Navegación móvil"
            data-testid="mobile-navigation"
          >
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 font-heading text-2xl tracking-tight text-[#f1f0f4] transition-colors duration-200 hover:text-[#c5c4d4]"
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#a1a0a6]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}