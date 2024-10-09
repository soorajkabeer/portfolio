import React from "react";
import Link from "next/link";
import {
  BehanceIcon,
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./Icon";

const SocialIcons = ({
  border = false,
  className = "",
  background = "bg-transparent",
}) => {
  return (
    <nav className={`${className}`}>
      <Link
        href="//www.linkedin.com/in/sooraj-kabeer/"
        target={"_blank"}
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black border-2" : ""
        } ${background}`}
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="//github.com/soorajkabeer"
        target={"_blank"}
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black border-2" : ""
        } ${background}`}
      >
        <GithubIcon />
      </Link>
      <Link
        href="//www.facebook.com/sooraj.kabeer"
        target={"_blank"}
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black border-2" : ""
        } ${background}`}
      >
        <FacebookIcon />
      </Link>
      <Link
        href="//www.instagram.com/soorajkabeer/"
        target={"_blank"}
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black border-2" : ""
        } ${background}`}
      >
        <InstagramIcon />
      </Link>
      <Link
        href="mailto:name@email.com"
        target={"_blank"}
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black border-2" : ""
        } ${background}`}
      >
        <EmailIcon className={"h-4"} />
      </Link>
      <Link
        href="//www.behance.net/soorajkabeer"
        target={"_blank"}
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black border-2" : ""
        } ${background}`}
      >
        <BehanceIcon />
      </Link>
    </nav>
  );
};

export default SocialIcons;
