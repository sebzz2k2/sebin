import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SideLink from "@/components/SideLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebin Mathew",
  description:
    "A highly skilled software enginner with expertise in designing, developing, and integrating software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-neutral-100 w-screen overflow-hidden">
          <Navbar />
          <div className="blob-c overflow-hidden scroll-m-3">
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
          </div>
          {children}
          <SideLink />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
