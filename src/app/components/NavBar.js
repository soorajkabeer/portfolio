"use client";
import React from "react";
import CustomLink from "./CustomLink";

const NavBar = () => {
  return (
    <header>
      <nav className="font-primary flex justify-between items-center py-6 px-11 text-3xl">
        <p>Day/Night Icon</p>
        <nav className="flex">
          <CustomLink href="/" title="Home" className="ml-10" />
          <CustomLink className="ml-10" href="/about" title="About" />
          <CustomLink className="ml-10" href="/work" title="Works" />
          <CustomLink className="ml-10" href="/contact" title="Contact" />
        </nav>
      </nav>
    </header>
  );
};

export default NavBar;
