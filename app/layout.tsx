import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sahil's portfolio",
  description: "Modern and Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <FloatingNav navItems={navItems} />
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}