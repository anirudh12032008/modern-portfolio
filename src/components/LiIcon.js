import React, { useRef } from "react";

import { motion, motionValue, useScroll } from "framer-motion";

const LiIcon = ({ scrollY }) => {
  //   const { scrollYProgress } = useScroll({
  //     target: reference,
  //     offset: ["centre end", "center centre"],
  //   });
  //   console.log(scrollYProgress);
  //   console.log(scrollY);
  return (
    <figure className="absolute left-0 dark:stroke-light stroke-dark">
      <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-primary  stroke-1 fill-none"
        />

        <motion.circle
          //   style={{ pathLength: scrollY }}
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <circle
          cx={"75"}
          cy={"50"}
          r={"10"}
          className="stroke-1 animate-pulse fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
