import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#4a4954] bg-[#100f15]" data-testid="site-footer">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div data-testid="footer-brand-block">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Desarrollos Metalúrgicos GR"
                className="h-10 w-auto object-contain"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">
                Desarrollos Metalúrgicos
              </p>
            </div>
            <p className="mt-5 max-w-sm font-heading text-3xl leading-tight text-[#f1f0f4] sm:text-4xl">
              Ingeniería que toma forma.
            </p>
          </div>
          <div data-testid="footer-navigation-block">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">Explorar</p>
            <div className="mt-5 flex flex-col items-start gap-3">
              <Link className="text-sm text-[#c7c6cb] transition-colors duration-200 hover:text-[#f1f0f4]" href="/nosotros" data-testid="footer-link-nosotros">Nosotros</Link>
              <Link className="text-sm text-[#c7c6cb] transition-colors duration-200 hover:text-[#f1f0f4]" href="/soluciones" data-testid="footer-link-soluciones">Soluciones</Link>
              <Link className="text-sm text-[#c7c6cb] transition-colors duration-200 hover:text-[#f1f0f4]" href="/proyectos" data-testid="footer-link-proyectos">Proyectos</Link>
              <Link className="text-sm text-[#c7c6cb] transition-colors duration-200 hover:text-[#f1f0f4]" href="/contacto" data-testid="footer-link-contacto">Contacto</Link>
            </div>
          </div>
          <div data-testid="footer-contact-block">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a1a0a6]">Consultas comerciales</p>
            <Link href="/contacto" className="mt-5 inline-flex items-center gap-2 text-sm text-[#f1f0f4] transition-colors duration-200 hover:text-[#c5c4d4]" data-testid="footer-consultation-link">
              Iniciar una conversación <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[#a1a0a6]">Formulario de contacto disponible para consultas comerciales y soluciones industriales.</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#757480] sm:flex-row sm:items-center sm:justify-between" data-testid="footer-legal-row">
          <span>Desarrollos Metalúrgicos</span>
          <span>Soluciones en acero inoxidable y acero al carbono PIPING</span>
        </div>
      </div>
    </footer>
  );
}