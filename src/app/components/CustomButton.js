import React from "react";
import Link from "next/link";

const CustomButton = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      <span className="inline-block z-10 relative">{title}</span>
      <span className="h-full bg-blend-multiply inline-block bg-theme-black absolute left-0 bottom-0 z-0 group-hover:w-full transition-[width] ease duration-300 w-0 pointer-events-none">
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomButton;
