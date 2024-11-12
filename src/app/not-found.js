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
          <h1 className="font-primary relative text-center text-theme-black dark:text-theme-white">
            <span className="text-theme-yellow ml:text-9xl lg:text-[10rem] text-[12rem]">
              404
            </span>
            <span className="text-theme-white dark:text-theme-black text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-4 bg-theme-black dark:bg-theme-white p-1">
              Page Not Found
            </span>
          </h1>
          <p className="font-body ml:text-base lg:text-xl text-2xl text-theme-black dark:text-theme-white ml:pt-10 ml:w-[80%]">
            Looks like you&apos;ve reached a page that doesn&apos;t exist. No
            worries – let&apos;s get you back on track!
          </p>
          <div className="pt-10 sm:flex sm:flex-wrap">
            <CustomButton
              href="/"
              text="Return Home"
              hoverClass="bg-theme-green"
              className="page-link-button dark:text-theme-white sm:w-fit"
            />
            <CustomButton
              href="/work"
              text="View My Work"
              hoverClass="bg-theme-yellow"
              className="page-link-button dark:text-theme-white sm:w-fit"
            />
          </div>
        </main>
      </div>
    </>
  );
}
