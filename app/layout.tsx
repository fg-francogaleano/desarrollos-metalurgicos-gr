import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const whatsappNumber = "5491125801774";
const whatsappMessage = encodeURIComponent(
  "Hola, estoy interesado en sus soluciones industriales y me gustaría obtener más información."
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#100f15] text-[#f1f0f4]">
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
            className="fixed bottom-5 right-5 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-[#0f172a] shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100f15]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7 fill-current"
            >
              <path d="M19.05 4.94A9.82 9.82 0 0 0 12.04 2C6.52 2 2.1 6.42 2.1 11.94c0 1.75.47 3.47 1.36 4.97L2 22l5.24-1.38a9.95 9.95 0 0 0 4.8 1.46h.01c5.52 0 9.95-4.42 9.95-9.94 0-2.66-1.04-5.16-2.95-7.06ZM12.04 19.5h-.01a8.22 8.22 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.28 8.28 0 0 1-1.27-4.39c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.43 5.86c0 4.57-3.72 8.29-8.29 8.29Zm4.56-6.2c-.25-.13-1.47-.72-1.7-.8-.22-.08-.38-.13-.54.13-.16.25-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.13-1.03-.38-1.97-1.21-.73-.65-1.22-1.46-1.36-1.7-.14-.25-.02-.38.11-.51.12-.12.25-.28.38-.42.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.06-.13-.54-1.29-.75-1.77-.2-.47-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.08 3.59.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.19-.06-.1-.22-.16-.47-.28Z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
