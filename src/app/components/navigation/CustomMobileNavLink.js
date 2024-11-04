"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CustomMobileNavLink = ({ href, title, className = "", toggle }) => {
  const pathName = useRouter();
  const handleClick = () => {
    console.log("Clicked");
    toggle();
    pathName.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-theme-black dark:text-theme-yellow`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-1 inline-block  absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
          pathName == href ? "w-full bg-theme-green" : "w-0 bg-theme-white"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileNavLink;
