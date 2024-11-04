"use client";
import React, { useState } from "react";
import CustomNavLink from "./CustomNavLink";
import CustomMobileNavLink from "./CustomMobileNavLink";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "../ui/Icon";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <nav className="font-primary flex justify-between items-center py-6 px-11 text-3xl text-theme-black dark:text-theme-white">
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <MoonIcon className="text-theme-white" />
          ) : (
            <SunIcon className="text-theme-black" />
          )}
        </button>
        <nav className="flex  lg:hidden">
          <CustomNavLink href="/" title="Home" className="ml-10" />
          <CustomNavLink className="ml-10" href="/about" title="About" />
          <CustomNavLink className="ml-10" href="/work" title="Works" />
          <CustomNavLink className="ml-10" href="/contact" title="Contact" />
        </nav>
        <HamburgerMenu
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
      </nav>
      {/* {isMobileMenuOpen ? (
        <div className="min-w-[70vw] w-full h-full flex flex-col justify-center z-30 item-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-theme-yellow">
          <nav className="flex items-center justify-center flex-col font-primary text-4xl">
            <CustomMobileNavLink
              href="/"
              title="Home"
              className="ml-10"
              toggle={handleClick}
            />
            <CustomMobileNavLink
              className="ml-10"
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileNavLink
              className="ml-10"
              href="/work"
              title="Works"
              toggle={handleClick}
            />
            <CustomMobileNavLink
              className="ml-10"
              href="/contact"
              title="Contact"
              toggle={handleClick}
            />
          </nav>
        </div>
      ) : null} */}
    </header>
  );
};

export default NavBar;
