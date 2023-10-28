"use client";
import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import AnimatedText from "../../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import magma from "../../../public/projects/1.jpg";
import twogood from "../../../public/projects/8.PNG";
import rayban from "../../../public/projects/9.PNG";
import anizon from "../../../public/projects/10.PNG";
import port from "../../../public/projects/2.jpg";
import text from "../../../public/projects/3.jpg";
import music from "../../../public/projects/4.jpg";
import news from "../../../public/projects/5.jpg";
import ai from "../../../public/projects/6.jpg";
import quiz from "../../../public/projects/7.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, link, img, github, summary }) => {
  return (
    <article className="w-full my-10 xs:p-4 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl flex items-center justify-between p-12 rounded-3xl border rounded-br-2xl relative border-solid dark:border-light border-dark dark:bg-dark bg-light shadow-2xl">
      <div className="absolute sm:-right-2 sm:h-[102%] sm:w-full sm:rounded-[1.5rem] top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full overflow-hidden cursor-pointer rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark sm:text-base font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 md:text-2xl sm:text-lg dark:text-light w-full text-left font-bold text-4xl">
            {title}
          </h2>
        </Link>
        <p className="py-2 font-medium dark:text-light text-dark sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} alt="GitHub" className=" ">
            <div className={"bg-light  dark:bg-dark rounded-full"}>
              <GithubIcon className={"w-[4vh] h-[4vh]"} />
            </div>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg md:px-4 md:text-base dark:bg-light bg-dark dark:text-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, link, img, github }) => {
  return (
    <article className="w-full  sm:p-2  flex-col flex items-center justify-center rounded-2xl border border-solid dark:border-light border-dark dark:bg-dark bg-light p-6 relative">
      <div className="absolute md:-right-2 sm:-right-1 md:w-[100%] sm:h-[102%] sm:rounded-[1.5rem]  top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden cursor-pointer rounded-lg"
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

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary lg:text-lg md:text-base sm:text-xs dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 lg:text-2xl md:text-xl sm:text-base  dark:text-light w-full text-left font-bold text-3xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="  text-lg dark:text-light font-semibold md:text-base"
          >
            Visit
          </Link>
          <Link href={github} alt="GitHub" className=" ">
            <div className={"bg-light  dark:bg-dark rounded-full"}>
              <GithubIcon className={"w-[4vh] h-[4vh]"} />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Anirudh | Projects page</title>
        <meta
          name="description"
          content="This page contains some of my projects"
        />
      </Head>
      <TransitionEffect />

      <main className="w-full  dark:bg-dark flex flex-col items-center justify-center">
        <Layout className="pt-16 lg:p-12 md:p-10 sm:p-8">
          <AnimatedText
            className="mb-16 lg:mb-10 sm:mb-8 md:!text-7xl sm:!text-6xl xs:!text-5xl"
            text={"Imagination Trumps Knowledge!"}
          />
          <div className="grid grid-cols-12 gap-y-32 gap-24 xl:gap-x-16 lg:gap-x-8 xs:gap-x-4 md:gap-y-24 sm:gap-y-6">
          <div className="col-span-12">
            <FeaturedProjects
                title={"Anizon"}
                type={"Featured Projects"}
                summary={
                  "I have created a e-commerce website with the help of nextjs and javascript I have also integrated Payment gateway with it"
                }
                link={"https://anizon.vercel.app/"}
                img={anizon}
                github={"https://github.com/anirudh12032008/e_commerce"}
              />
            <div className="col-span-12">
              <FeaturedProjects
                title={"Two good co Clone"}
                type={"Featured Projects"}
                summary={
                  "Cloned the website of two good co with stuning animations"
                }
                link={"https://github.com/anirudh12032008/two_good_clone"}
                img={twogood}
                github={"https://anirudh12032008.github.io/two_good_clone/"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title={"Ray Ban Clone"}
                type={"Featured Projects"}
                summary={
                  "I have cloned the website of ray ban as a web developer, replicating its animations, interactive features and user-friendly experience."
                }
                link={"https://anirudh12032008.github.io/redesi_clone/"}
                img={rayban}
                github={"https://github.com/anirudh12032008/redesi_clone"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title={"Magma Clone"}
                type={"Featured Projects"}
                summary={
                  "I have cloned the website https://thisismagma.com/ as a web developer, replicating its stunning design, interactive features, and engaging content to create a visually captivating and user-friendly experience."
                }
                link={"https://anirudh12032008.github.io/magma_clone/"}
                img={magma}
                github={"https://github.com/anirudh12032008/magma_clone"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Ask Ani AI"}
                type={"Featured Projects"}
                link={"https://ask-ani-image-ai.vercel.app/"}
                img={ai}
                github={"https://github.com/anirudh12032008/Ask_Ani_Image_AI"}
              />{" "}
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Developer Quiz"}
                type={"Featured Projects"}
                link={"https://anirudh12032008.github.io/developer-quiz/"}
                img={quiz}
                github={"https://github.com/anirudh12032008/developer-quiz"}
              />{" "}
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProjects
                title={"Newsingo"}
                type={"Featured Projects"}
                summary={
                  "Newsingo is a dynamic news website crafted with React and JavaScript. It offers a seamless user experience, showcasing the latest news articles with an intuitive interface, keeping users informed and engaged."
                }
                link={"https://newsingo.vercel.app/"}
                img={news}
                github={"https://github.com/anirudh12032008/Newsingo"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Text Utils"}
                type={"Featured Projects"}
                link={"https://anirudh12032008.github.io/TextUtils/"}
                img={text}
                github={"https://github.com/anirudh12032008/TextUtils"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Music Player"}
                type={"General Projects"}
                link={"/"}
                img={music}
                github={"/"}
              />{" "}
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProjects
                title={"Portfolio Website"}
                type={"Featured Projects"}
                summary={
                  "I have developed a portfolio website utilizing Sanity as the database. This allows for efficient content management, seamless integration of dynamic data, and a streamlined experience for showcasing my work."
                }
                link={"https://anirudh-sahu-portfolio.vercel.app/"}
                img={port}
                github={"https://github.com/anirudh12032008/Portfolio"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
