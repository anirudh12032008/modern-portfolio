"use client";

import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Wrapper from "@/components/wrapper";

const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });

export default function RootLayout({ children }) {
  // console.log(children);
  return (
    <html lang="en">
      <body className={`${montserrat.className}  w-full min-h-screen`}>
        <NavBar />
        {children}
        <Footer />{" "}
      </body>
    </html>
  );
}
