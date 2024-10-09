import React from "react";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";

export default function About() {
  return (
    <div className="items-center justify-items-center p-8 pb-20 sm:p-20 ">
      <main className="flex justify-center items-center">
        <div className="flex flex-col justify-between gap-4">
          <h1 className="page-title">Creative. Developer. Storyteller</h1>
          <p className="page-text">
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
          <p className="page-text">
            Feel free to reach out to me, I'm open for possible collaburations,
            discussion and knowledge sharing. You can mail me at&nbsp;
            <CustomLink
              href="mailto:soorajkabeer@gmail.com"
              text="soorajkabeer@gmail.com"
              className="font-medium"
            />
          </p>
          <div className="pt-5">
            <CustomButton
              href="/about/skills"
              text="Skills and Tech Stack"
              className="page-link-button"
            />
            <CustomButton
              href="/work/projects"
              text="PROJECTS"
              className="page-link-button"
            />
            <CustomButton
              href="/about/designer-me"
              text="Designer Me"
              className="page-link-button"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
