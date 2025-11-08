// app/layout.tsx
import type { Metadata } from "next";
import "tailwindcss"

export const metadata: Metadata = {
  title: "Midnight Cup",
  description: "Proyecto creado con Next.js, TypeScript y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
