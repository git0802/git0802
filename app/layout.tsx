import type { Metadata } from "next";
import {
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme-provider";
import Shortcuts from "@/components/layout/Shortcuts";
import { Toaster } from "@/components/providers/toaster-provideer";
import QuickAccess from "@/components/layout/QuickAccess";
import FocusModeProvider from "@/components/providers/FocusModeProvider";
import clsx from "clsx";

const jetbrainsMono = JetBrainsMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const plusJakartaSans = PlusJakartaSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GungXu - Front-End Developer",
  description:
    "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={clsx([jetbrainsMono.variable, plusJakartaSans.variable])}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FocusModeProvider>
            <main>{children}</main>
            <Toaster />
            <QuickAccess />
            <Shortcuts />
          </FocusModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
