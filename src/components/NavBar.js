"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

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

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <header className="w-full dark:text-light dark:bg-dark px-32 py-8 font-medium text-lg flex items-center justify-between ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <div className="absolute left-[50%] top-2  translate-x-[-50]">
          <Logo />
        </div>
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
          onClick={()=> setMode(mode === "dark" ? "light" : "dark")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} }`}

          >
            {
              mode === "dark" ? 
              <SunIcon className={"fill-dark"}/>
              : <MoonIcon className={"fill-dark"}/>
            }
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
