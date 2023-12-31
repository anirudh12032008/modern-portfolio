"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import text from "../../../public/projects/3.jpg";
import back from "../../../public/articles/art1.jpg";

import img1 from "../../../public/projects/sample.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

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
        className="w-96 h-auto z-10 hidden absolute rounded-lg "
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
      className="relative w-full sm:flex-col  p-4 py-6 my-4 rounded-xl flex items-center border-r-4 border-b-4 justify-between dark:text-light dark:bg-dark bg-light text-dark first:mt-0 border border-solid dark:border-light border-dark "
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="text-primary sm:pl-0 sm:text-base sm:self-start dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
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
          priority
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize sm:text-lg dark:text-light text-2xl font-bold my-2 mt-4 hover:underline ">
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
      <TransitionEffect />

      <main className="flex dark:text-light  w-full flex-col overflow-hidden justify-center items-center">
        <Layout className="pt-16 lg:p-12 md:p-10 sm:p-8">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16 lg:mb-10 sm:mb-8 md:!text-7xl sm:!text-6xl xs:!text-5xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticles
              title={"TextUtils "}
              summary={
                "Text Utils is a new web-based tool created by our team using JavaScript and React JS. It offers a range of text transformation functions that make your life easier."
              }
              link={
                "https://anirudh-sahu-portfolio.vercel.app/blog/introducing-text-utils---your-ultimate-text-transformation-tool!"
              }
              img={text}
              time={"12 min read"}
            />
            <FeaturedArticles
              title={"Free Website Backgrounds"}
              summary={
                "Website backgrounds are a great way to add a unique flair to your websites, and if you're looking to find some websites that offer you free backgrounds, you've come to the right place!"
              }
              link={
                "https://anirudh-sahu-portfolio.vercel.app/blog/sites-that-offer-free-website-backgrounds"
              }
              img={back}
              time={"10 min read"}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-20">
            All Articles
          </h2>
          <Article
            title={
              "Mastering React: Essential Tips and Tricks for Web Developers"
            }
            date={"14 july 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={"JavaScript Frameworks Comparison: React, Angular, and Vue"}
            date={"14 july 2023"}
            img={img1}
            link={"/"}
          />
          <Article
            title={
              "Building Scalable News Websites: Best Practices for Web Developers"
            }
            date={"14 july 2023"}
            img={img1}
            link={"/"}
          />
        </Layout>
      </main>
    </>
  );
};

export default page;
