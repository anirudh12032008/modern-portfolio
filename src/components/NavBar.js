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


const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
  const router = useRouter();

  const pathname = usePathname();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  //   console.log(router);
  
  return (
    <button href={href} onClick={handleClick} className={`${className} relative my-2 text-light dark:text-dark group`}>
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
      <header
        
        className="w-full relative dark:text-light dark:bg-dark px-32 py-8 font-medium text-lg flex items-center justify-between "
      >
        <button onClick={toggle} className="lg:flex   flex-col justify-center hidden items-center">
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
            href="https://twitter.com"
            target={"_blank"}
            className="w-7 mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-7 mx-4 "
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            className="w-7 mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            target={"_blank"}
            className="w-7 mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target={"_blank"}
            className="w-7 mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            Instagram
          </motion.a>
          <motion.a
            href="https://youtube.com/c/AnirudhSahu"
            target={"_blank"}
            className="w-7 mr-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            Youtube
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
       {
        isOpen ?  <div className="min-w-[70vw] flex flex-col z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 justify-between items-center ">

        <nav onClick={toggle} className="flex flex-col items-center justify-center">
          <CustomMobileLink href="/" title="Home" className=""  toggle={toggle}/>
          <CustomMobileLink href="/about" title="About" className=""  toggle={toggle}/>
          <CustomMobileLink href="/projects" title="Projects" className=""  toggle={toggle}/>
          <CustomMobileLink href="/articles" title="Articles" className=""   toggle={toggle}/>
        </nav>
       
        <nav className="flex justify-center items-center flex-wrap mt-2">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className=" mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <TwitterIcon width={'4vh'} height={'4vh'}/>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className=" mx-4 "
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <LinkedInIcon width={'4vh'} height={'4vh'}/>
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            className=" mx-4 bg-light dark:bg-dark rounded-full"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <GithubIcon width={'4vh'} height={'4vh'}/>
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            target={"_blank"}
            className="bg-light dark:bg-dark rounded-full mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <PinterestIcon width={'4vh'} height={'4vh'}/>
          </motion.a> 
          <motion.a
            href="https://instagram.com"
            target={"_blank"}
            className="w-7 mx-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <InstaIcon/> hi
          </motion.a>
          <motion.a
            href="https://youtube.com/c/AnirudhSahu"
            target={"_blank"}
            className="w-7 mr-4"
            whileHover={{ y: -4, scale: 1.1 }}
          >
            <YoutubeIcon/>hello
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
        </div> : null
       }
        <div className="absolute left-[50%] top-2  translate-x-[-50]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
