import React from "react";
import Link from "next/link";
import {
  BehanceIcon,
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  CalenderIcon,
} from "../ui/Icon";

const SocialIcons = ({
  border = false,
  className = "",
  iconClassName = "fill-black",
  background = "bg-transparent",
  hover = "bg-theme-yellow",
}) => {
  return (
    <nav className={`${className}`}>
      <Link
        href="//www.linkedin.com/in/sooraj-kabeer/"
        target={"_blank"}
        title="LinkedIn"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <LinkedinIcon className={`${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
      <Link
        href="//github.com/soorajkabeer"
        target={"_blank"}
        title="Github"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <GithubIcon className={`${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
      <Link
        href="//calendly.com/soorajkabeer-fl/30min"
        target={"_blank"}
        title="Book Me on Calendly"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <CalenderIcon className={`${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
      <Link
        href="//www.facebook.com/sooraj.kabeer"
        target={"_blank"}
        title="Facebook"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <FacebookIcon className={`${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
      <Link
        href="//www.instagram.com/soorajkabeer/"
        target={"_blank"}
        title="Instagram"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <InstagramIcon className={`${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
      <Link
        href="mailto:soorajkabeer.fl@gmail.com"
        target={"_blank"}
        title="Email Me"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <EmailIcon className={`h-4 ${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
      <Link
        href="//www.behance.net/soorajkabeer"
        target={"_blank"}
        title="Behance"
        className={`p-2 h-full w-full flex justify-center items-center relative group ${
          border ? "border-theme-black dark:border-theme-white border-2" : ""
        } ${background}`}
      >
        <BehanceIcon className={`${iconClassName} z-20`} />
        <span
          className={`absolute ${hover} z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0`}
        ></span>
      </Link>
    </nav>
  );
};

export default SocialIcons;
