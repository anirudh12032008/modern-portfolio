import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 dark:border-light border border-solid border-transparent bg-dark text-light flex items-center text-2xl font-bold justify-center
        rounded-full"
        whileHover={{
          scale: 1.3,
          backgroundColor: [
            "#121212",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 2.5, repeat: Infinity },
        }}
      >
        AS
      </MotionLink>
    </div>
  );
};

export default Logo;
