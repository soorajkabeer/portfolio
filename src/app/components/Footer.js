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
          href="/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <GithubIcon />
        </Link>
        <Link
          href="/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="/"
          target={"_blank"}
          className="px-4 h-full w-full flex justify-center items-center"
        >
          <EmailIcon className={"h-4"} />
        </Link>
        <Link
          href="/"
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
