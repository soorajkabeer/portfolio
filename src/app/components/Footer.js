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
      <nav className="flex items-center justify-between max-w-96">
        <Link href="/" target={"_blank"} className="px-4">
          <LinkedinIcon className={"h-6"} />
        </Link>
        <Link href="/" target={"_blank"} className="px-4">
          <GithubIcon className={"h-6"} />
        </Link>
        <Link href="/" target={"_blank"} className="px-4">
          <FacebookIcon className={"h-6"} />
        </Link>
        <Link href="/" target={"_blank"} className="px-4">
          <InstagramIcon className={"h-6"} />
        </Link>
        <Link href="/" target={"_blank"} className="px-4">
          <EmailIcon className={"h-4"} />
        </Link>
        <Link href="/" target={"_blank"} className="px-4">
          <BehanceIcon className={"h-5"} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
