import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesús | Automatizaciones y Páginas Web en Mazatlán",
  description:
    "Freelancer en Mazatlán, México. Automatizo procesos con Python y creo páginas web modernas para negocios locales. Consulta gratis.",
  keywords: ["freelancer mazatlán", "automatización python", "páginas web mazatlán", "digitalización negocios"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
