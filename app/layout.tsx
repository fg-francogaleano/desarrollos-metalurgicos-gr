import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ToasterProvider } from "@/components/ToasterProvider";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappUrl } from "@/lib/contact-links";
import "./globals.css";

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
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
            className="fixed bottom-18 right-5 md:bottom-10 z-[60] flex items-center justify-center text-[#8466A9] transition-transform duration-300 hover:scale-105 hover:text-[#a48bc2]"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </body>
    </html>
  );
}
