import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 lg:absolute flex items-center lg:right-4 lg:left-auto lg:top-0 lg:bottom-auto justify-center overflow-hidden">
      <div className="w-48 lg:w-36 md:w-28 h-auto flex items-center justify-center relative">
        <CircularText
          className={"dark:fill-light fill-dark  animate-spin-slow"}
        />
        <a
          href={"mailto:renudilip19@gmail.com"}
          className=" md:w-14 md:h-14 md:text-[12px] lg:w-16 lg:h-16 lg:text-[15px] flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-light dark:text-dark  bg-dark rounded-full text-light shadow-md border border-solid border-dark w-20 h-20 font-semibold hover:dark:bg-dark hover:dark:text-light dark:border-light hover:bg-light hover:text-dark hover:scale-110"
        >
          HireMe
        </a>
      </div>
    </div>
  );
};

export default HireMe;
