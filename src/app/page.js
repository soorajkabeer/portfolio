import Image from "next/image";
import LineFace from "./components/LineFace";

export default function Home() {
  return (
    <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
      <main className="flex justify-center items-center">
        <div className="grid grid-cols-[1fr_3fr] max-w-5xl">
          <div>
            <LineFace />
          </div>
          <div className="flex justify-center flex-col pl-2 group">
            <div className="flex justify-start ">
              <div className="flex flex-col justify-center text-right ">
                <p className="font-primary text-4xl">HELLO</p>
                <p className="font-primary text-7xl">I'M</p>
              </div>
              <div className="flex justify-center items-center font-primary text-9xl pl-6 tracking-normal relative">
                <h1 className="z-10">SOORAJ KABEER</h1>
                <span className="h-3 inline-block bg-theme-yellow absolute left-4 bottom-3 group-hover:w-full group-hover:h-full transition-[width,height] ease duration-300 w-0">
                  &nbsp;
                </span>
              </div>
            </div>
            <div className="flex justify-start font-primary text-3xl text-left pt-1 pb-3 pl-2">
              Front-End Developer | Full-Stack Shopify Expert | Creative Thinker
            </div>
            <div className="flex justify-between font-body text-xl">
              <p>
                I create seamless digital experiences by combining design and
                development.
                <br /> With over 7 years of expertise in Shopify, WordPress, and
                front-end technologies like React, I build solutions that focus
                on simplicity and impact.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
