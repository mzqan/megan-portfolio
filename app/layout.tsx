import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Megan Lee",
  description: "Megan Lee's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  )
}
