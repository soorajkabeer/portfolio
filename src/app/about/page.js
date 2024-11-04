import React from "react";
import TransitionEffect from "../components/HOC/TransitionEffect";
import CustomButton from "../components/ui/CustomButton";
import CustomLink from "../components/ui/CustomLink";
import Skills from "../components/page-ui/Skills";
import Studies from "../components/page-ui/Studies";

export const metadata = {
  title:
    "About & Skills | Sooraj Kabeer - Creative Developer & eCommerce Expert",
  description:
    "Get to know Sooraj Kabeer, a creative developer with expertise in Shopify, React, and WordPress. Explore my journey, design philosophy, and the technical skills that drive my impactful digital solutions.",
};

export default function About() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center flex-col">
          <div className="flex flex-col justify-between gap-4 mb-32 text-theme-black dark:text-theme-white">
            <h1 className="page-title">Creative. Developer. Storyteller</h1>
            <p className="page-text">
              My journey in web development began in 2017 when my company
              shifted to web developement agency, but my creative spark goes
              back much further. Starting as a designer, I’ve always believed
              that minimalism tells a better story than intricate details.
              Whether it's building a new site or capturing a moment in
              photography, I bring a creative touch to everything I do. When I’m
              not coding, you can find me taking care of my 4 year old son,
              illustrating, capturing street scenes through my lens, or learning
              the latest technology that catches my eye – currently, that’s
              Next.js.
            </p>
            <p className="page-text">
              Feel free to reach out to me, I'm open for possible
              collaburations, discussion and knowledge sharing. <br />
              You can mail me at&nbsp;
              <CustomLink
                href="mailto:soorajkabeer@gmail.com"
                text="soorajkabeer@gmail.com"
                className="font-medium"
              />
            </p>
            <div className="pt-5 sm:flex sm:flex-wrap">
              <CustomButton
                href="#skills"
                text="Skills and Tech Stack"
                className="page-link-button sm:w-fit"
              />
              <CustomButton
                href="/work/projects"
                text="PROJECTS"
                className="page-link-button  sm:w-fit"
              />
              <CustomButton
                href="/about/designer-me"
                text="Designer Me"
                className="page-link-button  sm:w-fit"
              />
            </div>
          </div>
          <section className="w-full">
            <Studies />
          </section>
          <section className="w-full" id="skills">
            <Skills />
          </section>
        </main>
      </div>
    </>
  );
}
