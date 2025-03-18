import { ReactNode } from 'react';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Коневский, html, черный квадрат по центру",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
