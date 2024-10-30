import React from "react";
import CustomMobileNavLink from "./CustomMobileNavLink";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={` flex-col justify-center items-center z-50 hidden lg:flex ${
          isOpen ? "fixed right-11" : ""
        }`}
        onClick={handleClick}
      >
        <span
          className={`bg-theme-black dark:bg-theme-white transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-theme-black dark:bg-theme-white transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-theme-black dark:bg-theme-white transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div className="min-w-[70vw] w-full h-screen overflow-hidden overscroll-none flex flex-col justify-center z-30 item-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-theme-yellow dark:bg-theme-black">
          <nav className="flex items-center justify-center flex-col font-primary text-5xl">
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
      ) : null}
    </>
  );
};

export default HamburgerMenu;
