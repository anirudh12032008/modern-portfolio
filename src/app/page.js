"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
// import profilePic from "../../public/developer-pic-1.png";
import profilePic from "../../public/d3.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import chat from "../../public/icons8-chat-message-94.png";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />

      {/* <main className="">Home</main> */}
      <div>
        <main className="flex  items-center text-dark bg-light dark:bg-dark  dark:text-light w-full min-h-screen">
          <Layout className="pt-0 pl-0 xl:p-24 lg:p-16 md:p-12 sm:p-8">
            <div className="flex md:flex-col items-center md:text-center justify-between w-full">
              <div className="w-1/2 md:w-full lg:w-2/3">
                <Image
                  src={profilePic}
                  alt="CodeBucks"
                  className="w-10/12 h-auto lg:inline-block  lg:w-10/12"
                  priority
                />
              </div>
              <div className="w-1/2 flex lg:w-full flex-col items-center self-center">
                <AnimatedText
                  text="ANIRUDH SAHU"
                  className="!text-8xl !text-left xl:!text-6xl lg:!text-center lg:!text-7xl md:!text-6xl sm:!text-4xl"
                />

                <p className="my-4 text-base font-medium  sm:text-sm">
                  A Young and talented 15-year-old full-stack web developer with
                  a passion for frontend and backend technologies. Proficient in
                  Node, Next.js, JavaScript for the frontend, and backend
                  development. Showcasing my skills and dedication to crafting
                  exceptional web applications.
                </p>
                <div className="flex items-center lg:self-center  self-start mt-2">
                  <Link
                    href="/resume.pdf"
                    target={"_blank"}
                    download={true}
                    className="flex items-center md:p-2 md:px-4 md:text-base dark:text-dark dark:bg-light bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:bg-light hover:text-dark border-2  border-solid border-transparent hover:border-dark"
                  >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href="mailto:renudilip19@gmail.com@gmail.com"
                    target={"_blank"}
                    className="text-lg md:text-base ml-4 dark:text-light font-medium capitalize text-dark underline"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <HireMe />
          <div className="fixed right-8  bottom-9 inline-block w-24 lg:w-20 md:w-16">
            <Link href={"mailto:renudilip19@gmail.com"}>
              <Image
                src={chat}
                alt="chat"
                className="w-full flex items-center justify-center h-auto animate-bounce "
              />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
