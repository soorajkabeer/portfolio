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
          <div className="flex justify-between flex-col">
            <div className="flex justify-between ">
              <div className="flex justify-between ">
                HELLO
                <br />
                I'M
              </div>
              <div className="flex justify-between ">SOORAJ KABEER</div>
            </div>
            <div className="flex justify-between">
              Front-End Developer | Full-Stack Shopify Expert | Creative Thinker
            </div>
            <div className="flex justify-between">
              <p>
                I create seamless digital experiences by combining design and
                development. With over 7 years of expertise in Shopify,
                WordPress, and front-end technologies like React, I build
                solutions that focus on simplicity and impact.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
