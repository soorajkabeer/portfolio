import Image from "next/image";
import LineFace from "./components/LineFace";
import Link from "next/link";
import { LinkArrow } from "./components/Icon";
import CustomButton from "./components/CustomButton";
import { FlipLink } from "./components/FlipLink";
import "./titleColor.css";
import TransitionEffect from "./components/HOC/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
        <main className="flex justify-center items-center">
          <div className="grid grid-cols-[1fr_3fr] max-w-5xl">
            <div>
              <LineFace />
            </div>
            <div className="flex justify-center flex-col pl-2 ">
              <div className="flex justify-start ">
                <div className="flex flex-col justify-center text-right ">
                  <p className="font-primary text-4xl text-theme-black dark:text-theme-white">
                    HELLO
                  </p>
                  <p className="font-primary text-7xl text-theme-black dark:text-theme-white">
                    I'M
                  </p>
                </div>
                <div className="flex justify-center items-center font-primary text-9xl pl-6 tracking-normal relative group">
                  {/* <h1 className="z-10 bg-gradient-to-bl from-theme-green to-theme-green-light bg-clip-text text-transparent">
                  SOORAJ KABEER
                </h1>
                <span className="h-5 inline-block bg-theme-yellow absolute left-4 bottom-3 group-hover:w-full  transition-[width,height] ease duration-300 w-0">
                  &nbsp;
                </span> */}

                  <FlipLink href="#" className="">
                    SOORAJ&nbsp;KABEER
                  </FlipLink>
                </div>
              </div>
              <div className="flex justify-start font-primary text-3xl text-left pt-1 pb-3 pl-2 text-theme-black dark:text-theme-white">
                Front-End Developer | Full-Stack Shopify Expert | Creative
                Thinker
              </div>
              <div className="flex justify-between font-body text-xl text-theme-black dark:text-theme-white">
                <p>
                  I create seamless digital experiences by combining design and
                  development.
                  <br /> With over 7 years of expertise in Shopify, WordPress,
                  and front-end technologies like React, I build solutions that
                  focus on simplicity and impact.
                </p>
              </div>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/download/sooraj_kabeer_resume.pdf"
                  download
                  target="_blank"
                  className={"page-link-button relative group"}
                  title="Download My Resume"
                >
                  <span className="flex inline-block z-10 relative text-theme-black dark:text-theme-white">
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
