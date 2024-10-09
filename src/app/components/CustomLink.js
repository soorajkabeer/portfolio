import React from "react";
import Link from "next/link";

const CustomLink = ({
  href,
  text,
  className = "",
  underlineColor = "bg-theme-yellow",
}) => {
  return (
    <Link href={href} className={`${className} relative group`} title={text}>
      {text}
      <span
        className={`h-1 inline-block ${underlineColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
