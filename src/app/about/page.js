import React from "react";
import Link from "next/link";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";

export default function About() {
  return (
    <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
      <main className="flex justify-center items-center">
        <div className="flex flex-col justify-between gap-4">
          <h1 className="flex justify-start font-primary text-5xl text-left pb-3">
            Creative. Developer. Storyteller
          </h1>
          <p className="flex justify-between font-body text-xl">
            My journey in web development began in 2017 when my company shifted
            to web developement agency, but my creative spark goes back much
            further. Starting as a designer, I’ve always believed that
            minimalism tells a better story than intricate details. Whether it's
            building a new site or capturing a moment in photography, I bring a
            creative touch to everything I do. When I’m not coding, you can find
            me taking care of my 4 year old son, illustrating, capturing street
            scenes through my lens, or learning the latest technology that
            catches my eye – currently, that’s Next.js.
          </p>
          <p className="flex justify-start font-body text-xl">
            Feel free to reach out to me, I'm open for possible collaburations,
            discussion and knowledge sharing. You can mail me at&nbsp;
            <CustomLink
              href="mailto:name@email.com"
              title="soorajkabeer@gmail.com"
              className="font-medium"
            />
          </p>
          <div className="pt-5">
            <CustomButton
              href="/about"
              title="Skills and Tech Stack"
              className="border-2 border-theme-black px-4 py-2 font-primary text-2xl mt-5 mr-5 hover:text-theme-yellow"
            />
            <CustomButton
              href="/about"
              title="PROJECTS"
              className="border-2 border-theme-black px-4 py-2 font-primary text-2xl mt-5 mr-5 hover:text-theme-yellow"
            />
            <CustomButton
              href="/about"
              title="Designer Me"
              className="border-2 border-theme-black px-4 py-2 font-primary text-2xl mt-5 mr-5 hover:text-theme-yellow"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
