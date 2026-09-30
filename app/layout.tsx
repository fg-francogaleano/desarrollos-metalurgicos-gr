import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ToasterProvider } from "@/components/ToasterProvider";
import "./globals.css";

const whatsappNumber = "5491125801774";
const whatsappMessage = encodeURIComponent(
  "Hola, estoy interesado en sus soluciones industriales y me gustaría obtener más información.",
);

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const siteUrl = "https://desarrollosmetalurgicosgr.com";
const logoUrl = `${siteUrl}/logo.png`;
const faviconUrl = "/logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Desarrollos Metalúrgicos GR",
  description:
    "Especialistas en piping, estructuras metálicas, montajes industriales y soluciones a medida para la industria.",
  keywords: [
    "metalúrgica",
    "piping",
    "estructuras metálicas",
    "montajes industriales",
    "soluciones industriales",
    "GR",
  ],
  authors: [{ name: "Desarrollos Metalúrgicos GR" }],
  openGraph: {
    title: "Desarrollos Metalúrgicos GR",
    description:
      "Soluciones industriales en piping, estructuras metálicas y montajes a medida para proyectos personalizados.",
    url: siteUrl,
    siteName: "Desarrollos Metalúrgicos GR",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 1200,
        alt: "Desarrollos Metalúrgicos GR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollos Metalúrgicos GR",
    description:
      "Especialistas en piping, estructuras metálicas y montajes industriales a medida.",
    images: [faviconUrl],
  },
  icons: {
    icon: faviconUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#100f15] text-[#f1f0f4]">
        <ToasterProvider />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
            className="fixed bottom-10 right-10 z-[60] flex items-center justify-center text-[#8466A9] transition-transform duration-300 hover:scale-105 hover:text-[#a48bc2]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
