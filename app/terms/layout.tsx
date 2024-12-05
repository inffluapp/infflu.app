import localFont from "next/font/local";
import "../globals.css";
import { Metadata } from "next";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inffluapp",
  description: "Inffluapp",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center w-full custom-bg`}>
      {children}
      <div className="w-full px-8 py-4 border-t">
        <p>All rights reserved Inffluapp {new Date().getFullYear()}</p>
      </div>
    </main>
  );
}
