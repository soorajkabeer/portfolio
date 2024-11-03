import TransitionEffect from "@/app/components/hoc/TransitionEffect";
import Project from "@/app/components/Project";
import React from "react";

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center">
          <div className="flex flex-col justify-between gap-4">
            <h1 className="page-title text-theme-black dark:text-theme-white">
              A showcase of digital solutions tailored for success.
            </h1>
            <p className="page-text text-theme-black dark:text-theme-white">
              Welcome to a showcase of my favorite creations, where design meets
              code and ideas turn into digital experiences. Each project here
              tells a part of my journey, blending technical skill with a
              creative touch. From full-stack Shopify builds to dynamic
              WordPress applications, you’ll find the stories of how I’ve
              adapted, innovated, and solved unique challenges along the way.
              Highlights include my lead role in the redesign of Turmerry.com
              and many others that reflect my approach to building impactful web
              solutions. While NDAs limit what I can share, I’m excited to give
              you a glimpse into my craft and dedication.
            </p>
          </div>
        </main>
        <section>
          <Project />
        </section>
      </div>
    </>
  );
}
