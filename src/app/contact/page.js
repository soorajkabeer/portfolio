import React from "react";
import TransitionEffect from "../components/HOC/TransitionEffect";
import SocialIcons from "@/app/components/ui/SocialIcons";
import CustomHighlightLink from "@/app/components/ui/CustomHighlightLink";

export const metadata = {
  title: "Contact Sooraj Kabeer | Let’s Build Something Great",
  description:
    "Get in touch with Sooraj Kabeer, an experienced front-end developer and Shopify expert. Reach out for collaborations or project inquiries and let’s create digital solutions together.",
};

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
              className="page-big-link dark:text-theme-white"
              underlineColor="bg-theme-green dark:bg-theme-yellow"
              hoverEffectColor="bg-theme-yellow dark:bg-theme-green"
              position="bottom-3 left-0"
            />
            <CustomHighlightLink
              href="mailto:soorajkabeer.fl@gmail.com"
              text="soorajkabeer.fl@gmail.com"
              className="page-big-link dark:text-theme-white sm:flex sm:flex-wrap"
              underlineColor="bg-theme-green dark:bg-theme-yellow"
              hoverEffectColor="bg-theme-yellow dark:bg-theme-green"
              position="bottom-3 left-0"
              aftertext=" (Freelance Enquires)"
            />
            <SocialIcons
              className="grid gap-4 grid-cols-7 items-center justify-center w-full max-w-[26rem] mt-5"
              background="bg-theme-green dark:bg-theme-yellow"
              hover="bg-theme-yellow dark:bg-theme-green"
              iconClassName="fill-theme-white"
            />
          </div>
        </main>
      </div>
    </>
  );
}
