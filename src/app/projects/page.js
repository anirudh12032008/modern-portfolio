"use client";
import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import AnimatedText from "../../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import img1 from "../../../public/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, link, img, github, summary }) => {
  return (
    <article className="w-full  flex items-center justify-between p-12 rounded-3xl border rounded-br-2xl relative border-solid dark:border-light border-dark dark:bg-dark bg-light shadow-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden cursor-pointer rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 dark:text-light w-full text-left font-bold text-4xl">{title}</h2>
        </Link>
        <p className="py-2 font-medium dark:text-light text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} alt="GitHub" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg dark:bg-light bg-dark dark:text-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid dark:border-light border-dark dark:bg-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl" />

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
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 dark:text-light w-full text-left font-bold text-3xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="  text-lg dark:text-light font-semibold">
            Visit
          </Link>
          <Link href={github} alt="GitHub" className="w-8">
            <GithubIcon />
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
      <main className="w-full  dark:bg-dark flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16"
            text={"Imagination Trumps Knowledge!"}
          />
          <div className="grid grid-cols-12 gap-y-32 gap-24">
            <div className="col-span-12">
              <FeaturedProjects
                title={"Crypto Screener Application"}
                type={"Featured Projects"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                img={img1}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                type={"Featured Projects"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                img={img1}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                type={"Featured Projects"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                img={img1}
                github={"/"}
              />{" "}
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProjects
                title={"Crypto Screener Application"}
                type={"Featured Projects"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                img={img1}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                type={"Featured Projects"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                img={img1}
                github={"/"}
              />{" "}
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                type={"Featured Projects"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                img={img1}
                github={"/"}
              />{" "}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
