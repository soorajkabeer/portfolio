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

const Footer = () => {
  return (
    <footer className="font-primary flex justify-between py-6 px-11 text-3xl">
      <p>© 2024 SOORAJ KABEER</p>
      <nav className="flex items-center justify-center w-full max-w-80">
        <Link
          href="//www.linkedin.com/in/sooraj-kabeer/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="//github.com/soorajkabeer"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <GithubIcon />
        </Link>
        <Link
          href="//www.facebook.com/sooraj.kabeer"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="//www.instagram.com/soorajkabeer/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="mailto:name@email.com"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <EmailIcon className={"h-4"} />
        </Link>
        <Link
          href="//www.behance.net/soorajkabeer"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <BehanceIcon />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
