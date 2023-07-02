import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2  border-solid dark:border-light dark:text-light border-dark font-medium text-lg ">
        <Layout className="py-8 flex items-center justify-between">
          <span>2023 &copy; ALl Rights Reserved.</span>
          <div className="flex items-centre">
            Build With{" "}
            <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
            by &nbsp;{" "}
            <Link
              href={"mailto:renudilip19@gmail.com"}
              target={"_blank"}
              className="underline underline-offset-2"
            >
              Anirudh
            </Link>
          </div>
          <Link href={"mailto:renudilip19@gmail.com"} target={"_blank"}>
            Say Hello{" "}
          </Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
