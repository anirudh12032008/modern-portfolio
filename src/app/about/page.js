"use client";
import AnimatedText from "@/components/AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import devImg from "../../../public/devImg2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4500 });

  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
      {
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <>
      <Head>
        <title> Anirudh | About page</title>
        <meta
          name="description"
          content="This is about page of my portfolio website "
        />
      </Head>
      <TransitionEffect />

      <main className="flex  w-full flex-col justify-center items-center">
        <Layout className="pt-16 lg:p-12 md:p-10 sm:p-8">
          <AnimatedText
            text="Passion fuels purpose!"
            className="mb-16 lg:mb-10 sm:mb-8 "
          />
          <div className="grid w-full  grid-cols-9 gap-16 lg:gap-10 sm:gap-8">
            <div className="col-span-3 lg:order-2 lg:col-span-9 xl:col-span-4 flex flex-col dark:text-light/75 text-dark/75 items-start justify start">
              <h2 className="mb-4 text-lg font-bold uppercase dark:!text-light/90 !text-dark/90  ">
                BioGraphy
              </h2>
              <p className="font-medium">
                Hello, I'm ANIRUDH SAHU, a passionate and driven 15-year-old
                full-stack web developer. With a deep love for both frontend and
                backend development. I specialize in utilizing technologies like
                Node.js, React.js, Next.js, and JavaScript to create captivating
                user experiences.
              </p>
              <p className="my-4 font-medium">
                From crafting elegant and responsive frontend designs to
                architecting robust backend solutions, I thrive on transforming
                ideas into powerful web applications. With a keen eye for detail
                and a dedication to clean code, I pride myself on delivering
                high-quality projects.
              </p>
              <p className=" mb-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Despite my young age, I have already gained valuable experience
                and expertise in the web development field. Through my
                portfolio, I invite you to explore my work and witness my
                unwavering commitment to the world of web development.
              </p>
            </div>

            <div className="col-span-3 lg:col-span-9 lg:order-1 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid dark:border-light  border-dark dark:bg-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] dark:bg-light bg-dark" />
              <Image
                src={devImg}
                alt="Anirudh Sahu"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>

            <div className="col-span-3  lg:order-3 xl:col-span-9 xl:flex-row xl:items-center flex flex-col items-end justify-between">
              <div className="flex flex-col xl:items-center  items-end justify-center">
                <span className="inline-block text-7xl lg:text-6xl  sm:text-5xl xs:text-4xl dark:text-light font-bold">
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center lg:text-lg sm:text-base xs:text-sm dark:text-light/75 text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col lg:items-center items-end justify-center">
                <span className="inline-block text-7xl lg:text-6xl  sm:text-5xl xs:text-4xl dark:text-light font-bold">
                  <AnimatedNumbers value={13} />+
                </span>
                <h2 className="text-xl xl:text-center lg:text-lg sm:text-base xs:text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block lg:text-6xl  sm:text-5xl xs:text-4xl dark:text-light text-7xl font-bold">
                  <AnimatedNumbers value={17} />+
                </span>
                <h2 className="text-xl xl:text-center lg:text-lg sm:text-base xs:text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                  Bugs Fixed
                </h2>
              </div>
            </div>
          </div>
          <Skills className={"mt-16"} />
          <Experience />
          {/* <Education /> */}
        </Layout>
      </main>
    </>
  );
};

export default page;
