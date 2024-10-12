"use client";
import React from "react";
import CustomNavLink from "./CustomNavLink";

const NavBar = () => {
  return (
    <header>
      <nav className="font-primary flex justify-between items-center py-6 px-11 text-3xl text-theme-black dark:text-theme-white">
        <p>Day/Night Icon</p>
        <nav className="flex">
          <CustomNavLink href="/" title="Home" className="ml-10" />
          <CustomNavLink className="ml-10" href="/about" title="About" />
          <CustomNavLink className="ml-10" href="/work" title="Works" />
          <CustomNavLink className="ml-10" href="/contact" title="Contact" />
        </nav>
      </nav>
    </header>
  );
};

export default NavBar;
