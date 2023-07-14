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
              position={"AWS Innovate - AI/ML"}
              company={"Amazon"}
              time={"April 2023"}
              address={"Online"}
              work={
                " a transformative program that delved into the intricacies of data analysis, artificial intelligence, and machine learning. Through hands-on projects and expert guidance, I gained valuable insights and practical skills to drive innovation and leverage the power of data in problem-solving"
              }
            />
            <Details
              position={"Mastering HTML & CSS"}
              company={"Udemy"}
              time={"Feb 2023"}
              address={"Online"}
              work={
                'I successfully completed a comprehensive course on Udemy, "Mastering CSS and HTML," gaining proficiency in building responsive and visually appealing web designs using CSS and HTML.'
              }
            />
            <Details
              position={"Zero To One Program"}
              company={"Sheryians"}
              time={"Dec 2022"}
              address={"St Thomas School"}
              work={
                "Completed the training on in depth Knwoledge of Computer IT Skills"
              }
            />
            <Details
              position={"Awsome Day Conference"}
              company={"Amazon"}
              time={"June 2022"}
              address={"Online"}
              work={
                "Immersed in the latest industry insights, best practices, and emerging technologies. Engaged with experts and gained valuable knowledge to further enhance my skills and stay at the forefront of web development trends."
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
