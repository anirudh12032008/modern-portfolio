"use client";
import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={` w-full h-full inline-block dark:bg-dark z-0 p-28 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
