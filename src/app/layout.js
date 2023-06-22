"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light w-full min-h-screen`}>
        <NavBar />
        {children} <Footer />{" "}
      </body>
    </html>
  );
}
