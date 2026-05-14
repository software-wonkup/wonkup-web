import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.scss";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wonkup",
  description: "Incubadora Wonkup",
  icons: {
    icon: "/images/web/logo.png",
    shortcut: "/images/web/logo.png",
    apple: "/images/web/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
