import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-1 inline-block bg-theme-yellow absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
          pathName == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
