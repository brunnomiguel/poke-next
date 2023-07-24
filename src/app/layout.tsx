import "./globals.css";

import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import Layout from "../components/Layout";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Poke Next",
  description: "Aplicação que lista pokemons recebidos através de uma api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={`${poppins.className} flex flex-col bg-zinc-800 text-zinc-50 h-screen`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
