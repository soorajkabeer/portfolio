"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import * as motion from "framer-motion/client";
import LiIcon from "../ui/LiIcon";
import CustomHighlightLink from "../ui/CustomHighlightLink";
import { WORK_EXPERIENCE } from "@/app/data/data";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 md:w-[70%] w-[80%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon referrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-primary text-3xl mb-3 tracking-wide">
          <CustomHighlightLink
            href={companyLink}
            target={"_blank"}
            text={company}
            underlineColor="bg-theme-green dark:bg-theme-green"
            hoverEffectColor="dark:bg-theme-yellow-dark bg-theme-yellow-light"
            className="dark:text-theme-white "
            position="bottom-3 left-0"
            beforetext={`${position} @`}
          />
        </h3>
        <span className="page-text text-theme-green-dark mb-2">
          {time} | {address}
        </span>
        {work}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  return (
    <>
      <h2 className="page-sub-title mt-24 w-full">My Journey in the Field</h2>
      <div ref={ref} className="md:w-full w-[95%] mx-auto relative mt-5">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-theme-black dark:bg-theme-yellow origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 text-left">
          {WORK_EXPERIENCE.map((data, i) => {
            console.log(data.role);
            return (
              <Details
                key={i}
                position={data.role}
                company={data.company}
                companyLink={data.companyLink}
                time={data.time}
                address={data.location}
                work={
                  <ul className="font-body text-lg mt-2 ml-5 list-disc marker:text-theme-yellow-dark">
                    {data.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                }
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Experience;
