import React from "react";
import Experience from "../components/page-ui/Experience";
import TransitionEffect from "../components/HOC/TransitionEffect";
import CustomButton from "../components/ui/CustomButton";

export const metadata = {
  title: "Professional Experience | Sooraj Kabeer’s Developer Journey",
  description:
    "Explore the professional journey of Sooraj Kabeer, from Shopify and WordPress development to full-stack expertise. Discover a track record of delivering high-quality digital solutions.",
};

export default function Work() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center">
          <div className="flex flex-col justify-between gap-4 text-theme-black dark:text-theme-white">
            <h1 className="page-title">
              A journey of adapting, learning, and creating.
            </h1>
            <p className="page-text">
              Over the past 7+ years, I’ve worked across multiple roles – from
              Web Designer to Senior Full-Stack Developer. I’ve built and
              maintained Shopify stores, optimized WordPress sites, and led
              development teams, always with a focus on user satisfaction and
              operational efficiency. Key highlights from my experience include:
            </p>
            <div className="page-text">
              <ul>
                <li>
                  Leading the development team for Turmerry.com, overseeing
                  daily operations and strategic enhancements.
                </li>
                <li>
                  Managing eCommerce stores and ensuring high performance and
                  SEO optimization.
                </li>
                <li>
                  Migrating projects, developing custom themes, and integrating
                  apps for a range of clients.
                </li>
              </ul>
            </div>
            <div className="pt-5 sm:flex sm:flex-wrap">
              <CustomButton
                href="/work/projects"
                text="Explore My Projects"
                className="page-link-button  sm:w-fit"
              />
            </div>
            <Experience />
            <p className="page-text pt-5">
              I started my career as a designer, and that creative spark has
              stayed with me ever since, infusing every project with a bit of
              artistry and intention.
            </p>
            <div className="pt-5 sm:flex sm:flex-wrap">
              <CustomButton
                href="/about/designer-me"
                text="View My Designs"
                className="page-link-button  sm:w-fit"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
