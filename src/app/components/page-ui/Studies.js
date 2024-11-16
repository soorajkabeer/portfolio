"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import * as motion from "framer-motion/client";
import LiIcon from "../ui/LiIcon";
import { STUDY } from "@/app/data/data";

const Details = ({ degree, stream, school, time, address, notes }) => {
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
        <h3 className="font-primary text-3xl mb-3 tracking-wide text-theme-black dark:text-theme-white">
          {degree} in{" "}
          <span className="text-theme-green-dark dark:text-theme-green-light">
            {stream}
          </span>
        </h3>
        <h4 className="font-primary text-2xl mb-2 tracking-wide  text-theme-yellow dark:text-theme-yellow">
          {school}
        </h4>
        <p className=" mb-3">
          <span className="page-text text-theme-green-dark">{time}</span>
        </p>
        <p>
          <span className="page-text text-theme-black dark:text-theme-white mt-2 mb-2">
            {address}
          </span>
        </p>
        <p className="page-text text-theme-black dark:text-theme-white mb-2">
          {notes}
        </p>
      </motion.div>
    </li>
  );
};

const Studies = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  return (
    <>
      <h2 className="page-sub-title w-full text-theme-black dark:text-theme-white">
        Academic Journey
      </h2>
      <div ref={ref} className="md:w-full w-[95%] mx-auto mb-32 relative mt-5">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-theme-black dark:bg-theme-yellow origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 text-left">
          {STUDY.map((data, i) => {
            return (
              <Details
                key={i}
                degree={data.cource}
                stream={data.subject}
                school={data.school}
                time={data.time}
                address={data.address}
                note=""
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Studies;
