"use client";
import React from "react";
import CustomNavLink from "./CustomNavLink";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icon";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

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
