import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-centre justify-center">
      <LiIcon />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-20">
        <h2 className="font-bold text-6xl mb-32 text-center w-full">
          Education
        </h2>
        <div ref={ref} className="w-[75%] mx-auto  font-light relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          />
          <ul className="w-full flex flex-col justify-between items-start ml-4">
            <Details
              type={"Bachelor Of Science In Computer Science"}
              time={"2016-2020"}
              place={"Massachusetts Institute Of Technology (MIT)"}
              info={
                "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
              }
            />
            <Details
              type={"Bachelor Of Science In Computer Science"}
              time={"2016-2020"}
              place={"Massachusetts Institute Of Technology (MIT)"}
              info={
                "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
              }
            />
            <Details
              type={"Bachelor Of Science In Computer Science"}
              time={"2016-2020"}
              place={"Massachusetts Institute Of Technology (MIT)"}
              info={
                "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
              }
            />
            <Details
              type={"Bachelor Of Science In Computer Science"}
              time={"2016-2020"}
              place={"Massachusetts Institute Of Technology (MIT)"}
              info={
                "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
