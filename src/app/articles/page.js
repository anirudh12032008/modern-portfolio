"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import img1 from "../../../public/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";

    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize dark:text-light text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto z-10 hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ date, title, img, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center border-r-4 border-b-4 justify-between dark:text-light dark:bg-dark bg-light text-dark first:mt-0 border border-solid dark:border-light border-dark "
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid dark:bg-dark dark:border-light border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block overflow-hidden cursor-pointer rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize dark:text-light text-2xl font-bold my-2 mt-4 hover:underline ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Anirudh | Articles page</title>
        <meta
          name="description"
          content="This page contains some of my projects"
        />
      </Head>
      <main className="flex dark:text-light  w-full flex-col overflow-hidden justify-center items-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticles
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              link={"/"}
              img={img1}
              time={"9 min read"}
            />
            <FeaturedArticles
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              link={"/"}
              img={img1}
              time={"9 min read"}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-20">
            All Articles
          </h2>
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"23 june 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"23 june 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"23 june 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"23 june 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"23 june 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"23 june 2023"}
            img={img1}
            link={"/"}
          />
        </Layout>
      </main>
    </>
  );
};

export default page;
