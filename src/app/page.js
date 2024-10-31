"use client";
import Image from "next/image";
import LineFace from "./components/LineFace";
import Link from "next/link";
import { LinkArrow } from "./components/Icon";
import CustomButton from "./components/CustomButton";
import { FlipLink } from "./components/FlipLink";
import "./titleColor.css";
import TransitionEffect from "./components/hoc/TransitionEffect";
import useMediaQuery from "./components/hooks/useMediaQuery";

export default function Home() {
  const isTablet = useMediaQuery(856);
  const isMobile = useMediaQuery(639);
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-5 ">
        <main className="flex justify-center items-center">
          <div className="sm:block md:flex md:justify-center md:items-center grid ml:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] grid-cols-[1fr_3fr] max-w-5xl">
            <div className="sm:max-w-44">
              <LineFace />
            </div>
            <div className="flex justify-center flex-col pl-2 ">
              <div className="flex justify-start ml:relative">
                <div className="flex ml:absolute sm:w-fit sm:left-auto sm:right-8 sm:-top-24 ml:-left-9 flex-col justify-center ml:items-center  ml:z-20 text-right ">
                  <p className="font-primary ml:text-3xl lg:text-2xl text-4xl text-theme-black dark:text-theme-white">
                    HELLO
                  </p>
                  <p className="font-primary ml:text-6xl lg:text-5xl text-7xl text-theme-black dark:text-theme-white">
                    I'M
                  </p>
                </div>
                <div className="flex justify-center ml:pr-5 items-center font-primary md:text-8xl ml:text-9xl lg:text-7xl text-9xl pl-6 tracking-normal relative group">
                  {/* <h1 className="z-10 bg-gradient-to-bl from-theme-green to-theme-green-light bg-clip-text text-transparent">
                  SOORAJ KABEER
                </h1>
                <span className="h-5 inline-block bg-theme-yellow absolute left-4 bottom-3 group-hover:w-full  transition-[width,height] ease duration-300 w-0">
                  &nbsp;
                </span> */}

                  {isTablet ? (
                    <div>
                      <FlipLink
                        href="#"
                        className="flex flex-col"
                        designClassPrefix="htcmy"
                      >
                        SOORAJ
                      </FlipLink>
                      <FlipLink
                        href="#"
                        className="flex flex-col"
                        designClassPrefix="htcmg"
                      >
                        KABEER
                      </FlipLink>
                    </div>
                  ) : (
                    <FlipLink
                      href="#"
                      className="flex flex-col"
                      designClassPrefix="htc"
                    >
                      SOORAJ&nbsp;KABEER
                    </FlipLink>
                  )}
                </div>
              </div>
              <div className="flex justify-start font-primary sm:pt-6 sm:text-left md:max-w-56 ml:text-center ml:pt-5 ml:text-2xl lg:text-xl text-3xl text-left pt-1 pb-3 pl-2 text-theme-black dark:text-theme-white">
                {isMobile ? (
                  <p>
                    Front-End Developer <br /> Full-Stack Shopify Expert
                    <br />
                    Creative Thinker
                  </p>
                ) : (
                  `Front-End Developer | Full-Stack Shopify Expert | Creative Thinker`
                )}
              </div>
              <div className="flex justify-between font-body sm:px-2 md:max-w-56 md:text-sm lg:text-base text-xl text-theme-black dark:text-theme-white">
                {isTablet ? (
                  <p>
                    I create seamless digital experiences by combining design
                    and development. With over 7 years of expertise in Shopify,
                    WordPress, and front-end technologies like React, I build
                    solutions that focus on simplicity and impact.
                  </p>
                ) : (
                  <p>
                    I create seamless digital experiences by combining design
                    and development.
                    <br /> With over 7 years of expertise in Shopify, WordPress,
                    and front-end technologies like React, I build solutions
                    that focus on simplicity and impact.
                  </p>
                )}
              </div>
              <div className="flex md:w-full md:flex-col md:justify-center md:items-center items-center self-start mt-2">
                <Link
                  href="/download/sooraj_kabeer_resume.pdf"
                  download
                  target="_blank"
                  className={"page-link-button relative group"}
                  title="Download My Resume"
                >
                  <span className="flex z-10 relative text-theme-black dark:text-theme-white">
                    Resume <LinkArrow className={"w-6 ml-2 items-center c"} />
                  </span>
                  <span className="h-2 bg-blend-multiply inline-block bg-theme-yellow absolute left-0 bottom-0 z-0 group-hover:w-full transition-[width] ease duration-300 w-0 pointer-events-none">
                    &nbsp;
                  </span>
                </Link>
                <CustomButton
                  href="mailto:soorajkabeer@gmail.com"
                  target={"_blank"}
                  text="Let's Talk!"
                  className="page-link-button text-theme-black dark:text-theme-white"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
