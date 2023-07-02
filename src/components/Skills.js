import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
function BarView({ width, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, );

  return (
    <div ref={ref}>
      <div>
        <div className="flex items-end pb-3 justify-between">
          <h4 className="font-body font-semibold uppercase dark:text-light text-black/80">
            {children}
          </h4>
          <h3 className="font-body text-3xl font-bold dark:text-light/90 text-dark/90">
            {width}%
          </h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <motion.div
            style={{ width: isInView ? `${width}%` : 0 }} // Use the current width state
            initial={{ width: 0 }} // Initial style
            animate={{
              width: isInView ? `${width}%` : 0,
              transition: { duration: 4 },
            }} // Animation style
            className="h-3 rounded-full dark:bg-light/95 bg-dark/95"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
const Skills = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center  md:py-20 ">
        <div>
          <h1 className=" dark:!text-light !text-dark !text-6xl mb-16"> Skills</h1>
        </div>
        <div className="w-full pl-0  sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <BarView width={50}> Animation</BarView>
          <BarView width={90}> Javascript</BarView>
          <BarView width={80}> HTML</BarView>
          <BarView width={100}> CSS</BarView>
        </div>
      </div>
    </>
  );
};

export default Skills;
