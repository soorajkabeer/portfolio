import React from "react";
import TransitionEffect from "../components/HOC/TransitionEffect";
import CustomButton from "../components/ui/CustomButton";
import CustomLink from "../components/ui/CustomLink";
import Skills from "../components/page-ui/Skills";
import Studies from "../components/page-ui/Studies";
import Image from "next/image";

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
            <div className="grid sm:grid-cols-1 lg:grid-cols-[2fr,1fr] grid-cols-[4fr,1fr] justify-center items-center gap-2">
              <div className="sm:order-2 flex flex-col justify-around h-full">
                <p className="page-text">
                  My journey in web development began in 2017 when my company
                  shifted to web developement agency, but my creative spark goes
                  back much further. Starting as a designer, I’ve always
                  believed that minimalism tells a better story than intricate
                  details. Whether it&apos;s building a new site or capturing a
                  moment in photography, I bring a creative touch to everything
                  I do. When I’m not coding, you can find me taking care of my 4
                  year old son, illustrating, capturing street scenes through my
                  lens, or learning the latest technology that catches my eye –
                  currently, that’s Next.js.
                </p>
                <p className="page-text">
                  Feel free to reach out to me, I&apos;m open for possible
                  collaburations, discussion and knowledge sharing. <br />
                  You can mail me at&nbsp;
                  <CustomLink
                    href="mailto:soorajkabeer@gmail.com"
                    text="soorajkabeer@gmail.com"
                    className="font-medium"
                  />
                </p>
              </div>
              <div className="p-2 xs:w-full sm:my-5 sm:order-1 sm:w-3/4 sm:m-auto relative border-theme-black dark:border-theme-white border-2 group">
                <div className="z-20 relative">
                  <Image
                    src="/images/sooraj-kabeer-photo.webp"
                    width={1000}
                    height={1000}
                    alt="Picture of the Sooraj Kabeer"
                  />
                </div>
                <span className="absolute bg-theme-black dark:bg-theme-white z-10 h-full left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 w-0"></span>
                <span className="absolute bottom-2 right-2 z-20 font-body px-3 bg-theme-black dark:bg-theme-white text-theme-white dark:text-theme-black group-hover:block group-hover:opacity-100 transition-[opacity] ease delay-300 duration-300 opacity-0">
                  Hello !!
                </span>
              </div>
            </div>

            <div className="pt-5 sm:flex sm:flex-wrap">
              <CustomButton
                href="#skills"
                text="Skills and Tech Stack"
                className="page-link-button sm:w-fit"
              />
              <CustomButton
                href="/work/projects"
                text="PROJECTS"
                hoverClass="bg-theme-yellow"
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
