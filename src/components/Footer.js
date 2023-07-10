import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-20 dark:bg-dark ">
      <footer className="w-full   lg:text-base border-t-2  border-solid dark:border-light dark:text-light border-dark font-medium text-lg ">
        <Layout className="py-8  lg:py-6 flex lg:flex-col lg:p-3 items-center justify-between">
          <span>2023 &copy; ALL Rights Reserved.</span>
          <div className="flex lg:py-2 items-centre">
            Build With{" "}
            <span className="text-primary dark:text-primaryDark text-2xl px-1">
              &#9825;
            </span>
            by &nbsp;{" "}
            <Link
              href={"mailto:renudilip19@gmail.com"}
              target={"_blank"}
              className="underline underline-offset-2"
            >
              Anirudh Sahu
            </Link>
          </div>
          <Link href={"mailto:renudilip19@gmail.com"} target={"_blank"}>
            Say Hello{" "}
          </Link>
        </Layout>
      </footer>
    </div>
  );
};

export default Footer;
