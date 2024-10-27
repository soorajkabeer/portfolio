import TransitionEffect from "@/app/components/HOC/TransitionEffect";
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
              Here, you’ll find a collection of my favorite projects where I’ve
              brought design and code to life. From full-stack Shopify builds to
              React-powered applications, each project reflects my journey of
              adapting and innovating. Explore the stories behind each,
              including Turmerry.com – where I led a major redesign – and many
              more that highlight my technical skills and creative
              problem-solving.
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
