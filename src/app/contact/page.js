import React from "react";
import CustomLink from "../components/CustomLink";
import SocialIcons from "../components/SocialIcons";
import CustomHighlightLink from "../components/CustomHighlightLink";
import TransitionEffect from "../components/hoc/TransitionEffect";

export default function Contact() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center">
          <div className="flex flex-col justify-between gap-4 text-theme-black dark:text-theme-white">
            <h1 className="page-title">Let’s build something extraordinary.</h1>
            <p className="page-text">
              I’m always open to discussing new opportunities, collaborations,
              or just sharing ideas. Whether you need a full-scale web solution
              or want to explore creative concepts, I’d love to hear from you!
            </p>
            <CustomHighlightLink
              href="mailto:soorajkabeer@gmail.com"
              text="soorajkabeer@gmail.com"
              className="page-big-link dark:text-theme-yellow-light"
              underlineColor="bg-theme-green"
              hoverEffectColor="bg-theme-yellow dark:bg-theme-darkblack"
              position="bottom-3 left-0"
            />
            <CustomHighlightLink
              href="mailto:soorajkabeer.fl@gmail.com"
              text="soorajkabeer.fl@gmail.com"
              className="page-big-link dark:text-theme-yellow-light"
              underlineColor="bg-theme-green"
              hoverEffectColor="bg-theme-yellow dark:bg-theme-darkblack"
              position="bottom-3 left-0"
              aftertext=" (Freelance Enquires)"
            />
            <SocialIcons
              className="grid gap-4 grid-cols-6 items-center justify-center w-full max-w-96 mt-5"
              background="bg-theme-green"
              iconClassName="fill-theme-white"
            />
          </div>
        </main>
      </div>
    </>
  );
}
