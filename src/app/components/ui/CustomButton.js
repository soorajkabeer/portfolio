import React from "react";
import Link from "next/link";

const CustomButton = ({
  href,
  text,
  className = "",
  hoverClass = "bg-theme-black dark:bg-theme-white",
}) => {
  return (
    <Link href={href} className={`${className} relative group`} title={text}>
      <span className="inline-block z-10 relative">{text}</span>
      <span
        className={`${hoverClass} h-2 bg-blend-multiply inline-block absolute left-0 bottom-0 z-0 group-hover:w-full transition-[width] ease duration-300 w-0 pointer-events-none`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomButton;
