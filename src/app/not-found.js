"use client";
import React from "react";
import { usePathname } from "next/navigation";
import TransitionEffect from "./components/HOC/TransitionEffect";
import CustomButton from "./components/ui/CustomButton";

export default function Notfound() {
  const pathName = usePathname();
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center md:p-4 p-8 pb-20 sm:p-5 ">
        <main className="flex flex-col justify-center items-center">
          <h1 className="font-primary relative ml:text-3xl lg:text-4xl text-5xl text-theme-black dark:text-theme-white">
            <span className="text-theme-yellow ml:text-4xl lg:text-5xl text-7xl">
              Oops!
            </span>{" "}
            Page Not Found
          </h1>
          <p className="font-body ml:text-base lg:text-xl text-2xl text-theme-black dark:text-theme-white ml:pt-10 ml:w-[80%]">
            Looks like you've reached a page that doesn’t exist. No worries –
            let’s get you back on track!
          </p>
          <div className="pt-10 sm:flex sm:flex-wrap">
            <CustomButton
              href="/"
              text="Return Home"
              hoverClass="bg-theme-green"
              className="page-link-button  sm:w-fit"
            />
            <CustomButton
              href="/work"
              text="View My Work"
              hoverClass="bg-theme-yellow"
              className="page-link-button  sm:w-fit"
            />
          </div>
        </main>
      </div>
    </>
  );
}
