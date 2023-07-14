"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  //   console.log(router);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
h-[1px] inline-block bg-dark
absolute left-0 -bottom-0.5
group-hover:w-full transition-[width] ease dark:bg-light duration - 300
${pathname === href ? "w-full" : "w-0"}`}
      >
        {" "}
        &nbsp;{" "}
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const pathname = usePathname();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  //   console.log(router);

  return (
    <button
      href={href}
      onClick={handleClick}
      className={`${className} relative my-2 text-light dark:text-dark group`}
    >
      {title}
      <span
        className={`
h-[1px] inline-block bg-light
absolute left-0 -bottom-0.5
group-hover:w-full transition-[width] ease dark:bg-dark duration - 300
${pathname === href ? "w-full" : "w-0"}`}
      >
        {" "}
        &nbsp;{" "}
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <header className="w-full  lg:px-16 md:px-12 sm:px-8 relative dark:text-light dark:bg-dark pl-32 pr-16 py-8 font-medium text-lg flex items-center justify-between ">
        <button
          onClick={toggle}
          className="lg:flex   flex-col justify-center hidden items-center"
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            <CustomLink href="/articles" title="Articles" className="ml-4" />
          </nav>

          <nav className="flex justify-center items-center">
            <motion.a
              href="https://twitter.com/CodewithAni12"
              target={"_blank"}
              className="w-7 mx-4"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anirudh-sahu-4b245327b/"
              target={"_blank"}
              className="w-7 mx-4 "
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/anirudh12032008"
              target={"_blank"}
              className="w-7 mx-4"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="www.pinterest.com/anirudh_sahu_12"
              target={"_blank"}
              className="w-7 mx-4"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/anirudh_sahu_12/"
              target={"_blank"}
              className="w-7 mx-4"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <InstaIcon />
            </motion.a>
            <motion.a
              href="https://youtube.com/c/AnirudhSahu"
              target={"_blank"}
              className="w-7 mr-4"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <YoutubeIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              } }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
              },
            }}
            className="min-w-[70vw] flex flex-col z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 justify-between items-center "
          >
            <nav
              onClick={toggle}
              className="flex flex-col items-center justify-center"
            >
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={toggle}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={toggle}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={toggle}
              />
              <CustomMobileLink
                href="/articles"
                title="Articles"
                className=""
                toggle={toggle}
              />
            </nav>

            <nav className="flex justify-center items-center flex-wrap mt-2">
              <motion.a
                href="https://twitter.com/CodewithAni12"
                target={"_blank"}
                className=" mx-4 sm:mx-1.5"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <TwitterIcon width={"4vh"} height={"4vh"} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anirudh-sahu-4b245327b/"
                target={"_blank"}
                className=" mx-4 sm:mx-1.5"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <LinkedInIcon width={"4vh"} height={"4vh"} />
              </motion.a>
              <motion.a
                href="https://github.com/anirudh12032008"
                target={"_blank"}
                className=" mx-4 sm:mx-1.5 bg-light dark:bg-dark rounded-full"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <GithubIcon width={"4vh"} height={"4vh"} />
              </motion.a>
              <motion.a
                href="www.pinterest.com/anirudh_sahu_12"
                target={"_blank"}
                className="bg-light sm:mx-1.5 dark:bg-dark rounded-full mx-4"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <PinterestIcon width={"4vh"} height={"4vh"} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/anirudh_sahu_12/"
                target={"_blank"}
                className="w-7 sm:mx-1.5 mx-4"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <InstaIcon width={"4vh"} height={"4vh"} />
              </motion.a>
              <motion.a
                href="https://youtube.com/c/AnirudhSahu"
                target={"_blank"}
                className="w-7 sm:mr-1.5
             mr-4"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <YoutubeIcon width={"4vh"} height={"4vh"} />
              </motion.a>

              <button
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                className={`ml-3 sm:ml-1.5 flex items-center justify-center rounded-full p-1 ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                } }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}
        <div className="absolute left-[50%] lg:left-[40%] sm:left-[35%] lg:translate-x-[40%] sm:translate-x-[30%]  translate-x-[-50]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
