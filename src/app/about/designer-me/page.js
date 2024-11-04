import DesignerGallery from "@/app/components/page-ui/DesignerGallery";
import TransitionEffect from "@/app/components/HOC/TransitionEffect";
import React from "react";

export const metadata = {
  title: "Designer Profile | Sooraj Kabeer’s Creative Design Portfolio",
  description:
    "Explore the design side of Sooraj Kabeer, where minimalism meets functionality. View digital art, illustrations, and user-focused designs that enhance user experiences.",
};

export default function DesignerMe() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center">
          <div className="flex flex-col justify-between gap-4">
            <h1 className="page-title text-theme-black dark:text-theme-white">
              Design is more than visuals; it’s about experiences.
            </h1>
            <p className="page-text text-theme-black dark:text-theme-white">
              With a background in design, I bring more than just code to the
              table. Every interface I create is thoughtfully crafted to engage
              users and solve real problems. Whether it’s through clean layouts,
              impactful typography, or intuitive user flows, my design
              philosophy is grounded in minimalism and functionality. Explore
              some of my design and illustration work here.
            </p>
          </div>
        </main>
        <section>
          <DesignerGallery />
        </section>
      </div>
    </>
  );
}
