import type { Metadata } from "next";

import "./globals.css";
import { dm_sans } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Fluidic",
  description: "Automate with fluidic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
