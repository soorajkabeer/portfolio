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
  iconClassName = "fill-black",
  background = "bg-transparent",
}) => {
  return (
    <nav className={`${className}`}>
      <Link
        href="//www.linkedin.com/in/sooraj-kabeer/"
        target={"_blank"}
        title="LinkedIn"
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <LinkedinIcon className={iconClassName} />
      </Link>
      <Link
        href="//github.com/soorajkabeer"
        target={"_blank"}
        title="Github"
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <GithubIcon className={iconClassName} />
      </Link>
      <Link
        href="//www.facebook.com/sooraj.kabeer"
        target={"_blank"}
        title="Facebook"
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <FacebookIcon className={iconClassName} />
      </Link>
      <Link
        href="//www.instagram.com/soorajkabeer/"
        target={"_blank"}
        title="Instagram"
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <InstagramIcon className={iconClassName} />
      </Link>
      <Link
        href="mailto:name@email.com"
        target={"_blank"}
        title="Email Me"
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <EmailIcon className={`h-4 ${iconClassName}`} />
      </Link>
      <Link
        href="//www.behance.net/soorajkabeer"
        target={"_blank"}
        title="Behance"
        className={`p-2 h-full w-full flex justify-center items-center ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <BehanceIcon className={iconClassName} />
      </Link>
    </nav>
  );
};

export default SocialIcons;
