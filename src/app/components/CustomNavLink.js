import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomNavLink = ({ href, title, className = "" }) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-1 inline-block  absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
          pathName == href ? "w-full bg-theme-green" : "w-0 bg-theme-yellow"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomNavLink;
