import { Barlow, Barlow_Condensed } from "next/font/google";
import site from "@/components/data/site";
import "./globals.css";

const bodyFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Metadata real para buscadores (a diferencia de la plantilla Bantec, este layout es Server Component).
export const metadata = {
  title: site.brand.siteTitle,
  description: site.brand.description,
  openGraph: {
    title: site.brand.siteTitle,
    description: site.brand.description,
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
