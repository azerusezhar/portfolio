import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Toaster } from "@/components/ui/sonner";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Azerus Ezhar - Portfolio",
    template: "%s | Azerus Ezhar - Portfolio",
  },
  description:
    "Welcome to Azerus Ezhar's portfolio. Explore projects, skills, services, and achievements in web and mobile development.",
  keywords: [
    "Azerus Ezhar",
    "Portfolio",
    "Web Developer",
    "Mobile Developer",
    "Software Engineer",
    "Next.js",
    "React.js",
    "Full-Stack Developer",
    "Programming",
  ],
  openGraph: {
    title: "Azerus Ezhar - Portfolio",
    description:
      "Welcome to Azerus Ezhar's portfolio. Explore projects, skills, services, and achievements in web and mobile development.",
    url: "https://yourwebsite.com",
    siteName: "Azerus Ezhar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${generalSans.variable} ${satoshi.variable} w-full h-full overflow-hidden`}
      >
        <div className="flex w-full min-h-screen">
          <Sidebar />
          <div className="flex-1 w-full">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
