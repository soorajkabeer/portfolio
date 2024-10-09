import React from "react";
import Link from "next/link";

const CustomHighlightLink = ({
  href,
  text,
  className = "",
  underlineColor = "bg-theme-yellow",
  hoverEffectColor = "bg-theme-yellow",
  position = "left-0 bottom-0",
  beforetext = "",
  aftertext = "",
}) => {
  return (
    <p className={`${className} relative max-w-fit `}>
      {beforetext === "" ? "" : `${beforetext}\xa0`}
      <Link
        href={href}
        className="inline-block z-10 relative group"
        title={text}
      >
        <span className="inline-block z-10 relative ">{text}</span>
        <span
          className={`h-1 inline-block ${underlineColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        >
          &nbsp;
        </span>
        <span
          className={`bg-blend-multiply inline-block absolute h-3 w-full ${position} ${hoverEffectColor} pointer-events-none z-0`}
        ></span>
      </Link>
      {aftertext === "" ? "" : `\xa0${aftertext}`}
    </p>
  );
};

export default CustomHighlightLink;
