import TransitionEffect from "@/app/components/hoc/TransitionEffect";
import React from "react";
import Skill from "@/app/components/page-ui/Skills";

export const metadata = {
  title: "Skills & Tech Stack | Sooraj Kabeer - Developer & Designer",
  description:
    "Discover the technical skills and tools that Sooraj Kabeer brings to every project. Specializing in React, Shopify, WordPress, and SEO, I build high-performance, responsive websites.",
};

export default function Skills() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center">
          <section className="w-full" id="skills">
            <Skill />
          </section>
        </main>
      </div>
    </>
  );
}
