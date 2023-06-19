import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <a
          href={"mailto:renudilip19@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-dark rounded-full text-light shadow-md border border-solid border-dark w-20 h-20 font-semibold hover:bg-light hover:text-dark hover:scale-110"
        >
          HireMe
        </a>
      </div>
    </div>
  );
};

export default HireMe;
