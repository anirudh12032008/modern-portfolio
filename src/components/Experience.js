import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 dark:text-light last:mb-0 w-[60%] md:ml-8 md:w-[90%] mx-auto flex flex-col items-centre justify-center"
    >
      <LiIcon scrollY={scrollYProgress} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary md:text-xl dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium dark:text-light/75 text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="mt-20 md:mt-10 mb-10">
        <h2 className="font-bold dark:text-light md:text-5xl  md:mb-16 text-6xl mb-32 text-center w-full">
          Experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] lg:w-[80%] md:w-full  mx-auto  font-light relative"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute md:w-[3px] md:left-[20px] xs:left-[10px] left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top"
          />
          <ul className="w-full flex flex-col justify-between items-start ml-4 sm:ml-2">
            <Details
              position={"Software Engineer"}
              company={"Google"}
              time={"2022-Present"}
              address={"Mountain View, CA"}
              work={
                "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              }
            />
            <Details
              position={"Intern"}
              company={"Facebook"}
              time={"Summer 2021"}
              address={"Menlo Park, CA."}
              work={
                "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              }
            />
            <Details
              position={"Software Engineer"}
              company={"Google"}
              time={"2022-Present"}
              address={"Mountain View, CA"}
              work={
                "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              }
            />
            <Details
              position={"Software Engineer"}
              company={"Google"}
              time={"2022-Present"}
              address={"Mountain View, CA"}
              work={
                "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
