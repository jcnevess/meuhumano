import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Humano",
  description: "Deixe um pet te adotar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="pt-BR">
        <body className={sourceSans.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
