import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Motors - Sua oficina especializada!",
  description: "A melhor oficina de São Paulo, segundo nós mesmos =)",
  keywords: ["oficina", "oficina carros", "carros", "manutenção de carros"],
  openGraph: {
    title: "Dev Motors - Sua oficina especializada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/next.svg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 24 }}>
          Todos direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
