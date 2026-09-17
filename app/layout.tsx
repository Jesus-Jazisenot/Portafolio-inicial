import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesús Rodríguez | Ingeniería en Sistemas Computacionales — Mazatlán",
  description:
    "Portafolio de Jesús Antonio Rodríguez Peraza, estudiante de Ingeniería en Sistemas Computacionales en el TecNM Mazatlán. Desarrollo web, automatización con Python, bots, Arduino e impresión 3D.",
  keywords: [
    "Jesús Rodríguez",
    "ingeniería en sistemas computacionales",
    "TecNM Mazatlán",
    "desarrollador python",
    "automatización",
    "arduino",
    "freelancer mazatlán",
  ],
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
