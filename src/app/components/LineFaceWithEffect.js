"use client";
import * as motion from "framer-motion/client";
import React, { useState } from "react";

export default function LineFace() {
  const [load, setLoad] = useState(0);
  setTimeout(() => {
    setLoad(1);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("lineImageLoaded", true);
    }
  }, 1000);

  let isLoaded =
    typeof window !== "undefined"
      ? window.sessionStorage.getItem("lineImageLoaded")
      : false;
  const transition = { duration: isLoaded ? 0 : 10, ease: "easeInOut" };
  return (
    <div
      className="group"
      style={{
        border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        height: "auto",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 262.9 361.2"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.5, 1] }}
          className="fill-transparent dark:fill-theme-yellow transition-[fill] ease-in-out duration-300 "
          transition={{
            duration: isLoaded ? 0 : 5,
            ease: "easeInOut",
            // delay: isLoaded ? 0 : 4,
            // repeat: 1,
            // repeatType: "loop",
            // repeatDelay: 1,
          }}
          id="outlinepath"
          d="M87.6,352.8c0,0-4.7,2.7-6.2,1.8c-1.5-0.8-2.1-1-2.2-2.5c-0.1-1.5-3-46.5-5.6-55.2c0,0-5.8-9.4-8.1-12.2
	c-2.3-2.9-8.5-13.9-11.3-20.1s-9.6-17.1-10.5-19.3s-8.2-15.4-10.3-21.4s-8.4-25.8-9.7-28.8s-4.5-15-6.2-18.7
	c-1.7-3.7-8.6-20.3-9.6-22.9c-1-2.7-4.7-13.9-0.5-26.2s18.2-34.6,18.2-34.6s16.8-29.4,17.2-30s12.8-13.3,21.5-21.5
	S88.5,22.4,93.5,18c5-4.5,22.2-11.2,31.5-11.9s27.3,3.3,31.1,3.9c3.8,0.6,20.3,4,27.8,7.1s27.6,15.2,29.7,16.8
	c2.2,1.6,12.2,11,14,20.3c1.8,9.4,2.9,23.4,2.9,23.4s0.6,7.9-4.1,13.8c0,0-2.1,3.3-1.7,3.6c0.3,0.3,5.3,4.1,6.6,5.2
	c1.3,1.1,8.4,6.1,10.1,8.6c1.7,2.5,3.1,5.4,2.1,6.4c-1,1-6,4.7-12.8,6.3c0,0-1.2-0.1-0.3,2.7c0.8,2.8,4.1,7.1,5,11.5
	c0.8,4.3,1.7,6.7,1.6,9.6c-0.1,2.9-0.7,4.5-1,5.7c-0.3,1.1,2.6,10.7,3.7,12.4c1.1,1.7,8,13.4,9,15.9c1,2.5,5.9,9.8,5.9,15.8
	c0.1,5.9,0.8,19,0.8,19s0.1,13.8-0.4,17c-0.5,3.2-2.1,11.8-5.4,18.6c-3.3,6.8-10.3,16.1-12.5,20.6c-2.2,4.5-8.4,12.1-8.6,14.2
	c-0.2,2.2,1.5,18.9,2,22.3c0.4,3.4,2.2,7.8,2.2,9.7s-0.9,3.7-2,3.1c-1.1-0.6-2.8-1.5-3.6-0.7c-0.8,0.8-17.5,15.7-33.2,21.2
	c0,0-11,4.4-15.8,6.2c-4.7,1.8-13.3,4.5-26.2,4.3c0,0-15.6,0.3-26-0.6c-10.5-0.9-22.8-2.6-29.9-1.3C95.9,348.5,91,349.5,87.6,352.8z
	"
        />
        {/* <text>
          <motion.textPath
            href="#outlinepath"
            className="dark:fill-theme-white fill-theme-yellow text-sm p-1 font-body"
            initial={{ startOffset: 0 }}
            animate={{ startOffset: [0, "100%"] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              delay: isLoaded ? 1 : 6,
            }}
          >
            Developer * Designer * Photographer * Father * Artist * Exploror *
            Dreamer
          </motion.textPath>
        </text> */}
        <motion.path
          initial={{ pathLength: isLoaded ? 1 : 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: isLoaded ? 0 : 10,
            ease: "easeInOut",
            // repeat: 1,
            // repeatType: "loop",
            // repeatDelay: 1,
          }}
          strokeWidth={1}
          strokeDasharray="0 1"
          fill="none"
          className="stroke-theme-black"
          strock-width="1px"
          d="M230.3,119.6c1-0.2,10.3-2.2,11.7-5.8c1.4-3.6-17.5-16.5-18.9-17.7c-1.4-1.2,6-11,5.3-17.3
	c-0.7-6.2,2.9-30.7-18.7-44.3s-37.2-20.4-50.6-21.6c-13.4-1.2-29-6.2-38.8-3.6s-15.8,3.1-30,13.9C80.7,30.6,67,41.9,56.7,51.7
	c-4.9,4.6-8.9,9-11.5,12.4c-4.1,5.6-9.3,14.4-14.4,23.5c-4.7,8.4-9.3,16.9-12.9,23.3C10.2,124.4,6.4,131.6,7.8,144
	c1.4,12.5,16.5,38.6,17.7,49.4c0,0,6.7,17.4,7.6,21.9c0.8,4.5,15.5,32.1,15.5,32.1l26.9,48.7c0,0,2,8.2,3.3,20.6s2.5,34.7,2.5,34.7
	s-1.6,2.3,3.6,0c5.3-2.3,2.4-3.8,16.5-4.7s25.3,3.8,54.4,2.4s68.5-25.6,71.5-33.8c0,0-6.7-26.9-5.3-36.8c1.5-9.9-8.2,0.9-8.2,0.9
	s-77.6,5.9-100.6-10.3s-23.4-16.5-29.4-17.1s-9.4,11.2-9.4,11.2s7.1,30.9,7.4,41.2c0.3,10.3-0.2,33.3-0.2,33.3c0-1.3,0-2.9-0.1-4.6
	c-0.1-6.9-0.5-16.7-1.5-24.7c-1.8-13.9-15.4-47.9-15.4-47.9s1.4,3.4,1.8,3.8s0.8,6,0.8,6s-3.1-6.8-3.6-7.8c-0.5-1.1-3.7-4.6-4.3-4.6
	c-0.6,0,6.8,1.8,6.8,1.8s2.7,10.4,2.8,10.9s2.7,10.4,2.7,10.4S60,260.3,59.6,259.5c-0.5-0.8-5.1-6-4.4-5.4s11.8,4.7,11.8,4.7
	l2.1,6.3l3.8,17.1l1.4,6.4c0,0-8.1-13.9-9.6-16.2s-7.3-12.3-8.3-13.4c-0.9-1.1-4.3-7.5-4.3-7.5s2,0,3.3,1.1
	c1.3,1.1,12.9,5.7,12.9,5.7s7.6,29.4,7.8,29.9c0.2,0.5,1.4,7.5,1.4,7.5s-3-4.9-5.7-8.5c-2.7-3.7-11.4-20-13.4-21.9
	c-2-1.9-8.3-16.2-8.3-16.2s7.3,1.8,8.6,3.4c1.3,1.7,10.5,5,10.5,5l1.7,5.4l6.8,26.2c0,0,2.4,16.6,1.8,12.9
	c-0.6-3.7-10.5-16.7-12.9-19.4c-2.4-2.7-19.4-35.7-19.7-36c-0.2-0.4-8.5-15.4-10.4-23.5l-2.1-6l-3.5-10.6l-4-12.1l-3.5-11L19,170.4
	c0,0-3.4-7.2-3.4-7.8c0-0.7-2.3-6.3-2.6-7.9c-0.3-1.6-2.7-5.2-2.8-7.6s-1.6-9.6-0.6-14c1-4.4,3.3-11.5,3.3-11.5s9.3-16.3,9.7-16.7
	c0.5-0.5,3.4-0.7,2.8,1s-4.6,4.8-5.4,6.6c-0.8,1.8-3.9,7.5-5.1,11s-2.7,6.4-2.5,11c0.2,4.6-0.5,6.8,0.2,9.4
	c0.7,2.6,2.7,9.9,3.4,11.9s2.2,5.8,2.4,6.4c0.3,0.6,5.9,16.2,6.5,18.5c0.7,2.3,2,6.2,2.8,8.8c0.8,2.6,4.9,17,5.1,17.8
	c0.2,0.8,1.3-3.6,1.3-6.1c-0.1-2.5-1.9-8-2-8.4c-0.1-0.4-2.4-6.8-2.4-7.3c0-0.5-2.9-8.1-2.9-8.1s-7.8-17.6-8.7-20.6
	c-0.9-3-3.8-11.1-3.8-13.5s-0.9-10.1-0.6-11.9s3.5-8.7,4.2-9.9c0.8-1.2,4.4-10.4,5-11.1s3.3-3.7,2.2-1.5c-1.1,2.2-4.4,8-4.6,9.5
	c-0.3,1.6-3.7,9.4-3.8,10.5c-0.1,1-1.4,8.8-1.4,11.2s1.8,9.8,1.8,9.8s4.5,12.1,5.3,14.3c0.8,2.2,3.9,9.3,3.9,9.3s-1.2-5.9-1.5-7.4
	c-0.2-1.5-3.5-8.7-4-11.1c-0.5-2.4-1.8-7.3-1.9-9.7c-0.2-2.4-1.1-10.9-1.1-12.3s0.4-5.4,0.6-6.1s5.4-11,5.9-12.4
	c0.5-1.4,3.7-6.7,4.9-6.1c1.1,0.7-8.4,10.7-8.9,17.9c-0.5,7.2,0.5,14.2,0.5,14.2l2.1,13.4l3.5,10.8c0,0,3.4,13,3.7,14.4
	c0.3,1.3,2.5,6.5,2.7,7.2c0.2,0.6,1.7,8.9,1.9,10.3c0.2,1.3,1.2,5,1.8,5.2c0.6,0.2,3-7.1,4.1-7.6c1.1-0.5,3.2-2.1,6-2.7
	c2.8-0.7,6.3-1.3,8.9-1c2.5,0.4,11.1,2.9,14.2,4.7c3.1,1.8,5.1,5.3,6.8,5.2c1.8-0.2,1.1-4.4,0.9-4.7s-2.7,0.1-4.4-1.5
	c-1.7-1.6-6.6-5.5-7.8-5.9c-1.2-0.4-5.4-1.8-8.3-1.8s-9,1.1-11.4,1.9c-2.4,0.7-6.4,2.4-6.8,3.3s-1.6,4.1-2,4.2
	c-0.4,0.2-1.7-2.7-1.1-3.4c0.5-0.7,1.7-1.5,2.4-2.2c0.7-0.7,3.6-3.5,3.3-3.7s-5.7,1.9-6.2,2.2c-0.5,0.3-0.9-3.1-1.1-4.3
	c0,0-0.9-4.9-1.2-6.4s-1-4.1-1.1-4.9c-0.2-0.8-2.4-5-2.6-6.6c-0.2-1.6-2.4-9.3-2.6-10.7c-0.2-1.4-1.2-4.6-1.2-5.2
	c0-0.7-1.6-9.2-1.3-11.1c0.2-1.9-0.5-6.5-0.3-7.9c0.2-1.4,0.7-5.5,0.7-7.6s1-3,1.7-4.6s2.3-4.9,3.2-5.9c0.9-1,1.8-2,2.4-2.6
	c0.6-0.6,2.1-3.8,2.6-4.2c0.5-0.5-1.6,5.3-3.2,7.7c-1.6,2.5-4.5,5.5-4.6,7.3s3.8-4.6,3.7-2.5s-2,7-2.1,11.3
	c-0.1,4.4-0.6,7.3-0.6,9.2c0.1,1.9,1.3,11.9,2.1,15.1s2,8.8,2.7,11.1s3.8,9.2,4.3,10.3c0.5,1.1-1.6,2.4-1.5,3.8s-0.2,5.5,0.6,5.5
	s6.9-2.3,10.1-2.8s-4.4,2.8-2.3,3s8.3-1.1,11-1.1c2.7,0,7,1.2,7-0.7c0.1-1.9-0.5-4-0.5-4.2c0-0.2-3.5-0.3-5.9-0.4
	s-10.7,0.6-12.8,0.7c-2.1,0.1-4.6,1-5.3,0.9s-0.6-3.7,1.2-3.7c1.8-0.1,1.8-2.6,1-4c-0.8-1.3-3.3-10.5-4.4-13.7s-3-10.3-3-10.3
	s-1.4-8-1.3-9.8c0.1-1.8-0.3-6.1-0.3-6.6c0-0.5,0.8-4.4,1.5-1c0.7,3.4,2.2,13.4,2.8,15.3c0.6,2,3.6,11.5,4.2,14.2
	c0.6,2.7,1.8,7.7,2.5,9.3c0.7,1.6,0.8,3.5,1.6,2.8s1.6-3.3,1.5-4.1c-0.1-0.8-1.7-0.2-2.4-3.1c-0.7-3-2.8-8.1-3.1-9.5
	s-1.2-7.2-1.3-7.7s-2.8-7-2.8-7s-1-9.5-1.2-10.7c-0.2-1.2-1.3-6.7-1.3-7.9s0.1-7.8,1.6-9.8c1.5-2.1,1.1-4.7,2.5-5.2
	c1.4-0.5,1.9-1.2,3.7-1.2s9.6,1.4,9.6,1.4c0.6,0,7.8-0.2,11.1-0.1s8.9-0.9,9.6-0.4c0.8,0.5,1.5,3-1.8,2.7c-3.2-0.2-3.4-0.6-6.7-0.7
	c-3.3-0.1-6.3-0.3-7.9-0.4c-1.7-0.1-3.7-0.1-5.2-0.1s-4.3-0.3-5.6-0.5c-1.3-0.2-2.5-0.8-4-0.2c-1.5,0.6-2.8,1.4-2.2,2.2
	s2.3,0.7,5,0.5c2.6-0.2,15.3,0.2,16.5,0.3s5.6-0.6,6.9,0.1s3.7,2.8-3,2.9s-13-1.5-15.3-1.5s-6.5,0.4-7.5,0.6c-1,0.2-4.6,2.3-4.8,2.7
	s-0.7,2.2-0.7,3.1s0.1,8.7,0.4,10.6c0.3,1.9,1.3,3.2,1.6,6.2c0.2,3,0.1,4,0.9,6.1s2.5,6.8,3.5,9.4c1,2.5,2.4,6.6,2.9,7.4
	s1.5,3,1.9,5c0.4,2.1,1.7,5.5,1.7,6.4s1.6,3.4-0.8,4.2s-6.1,1.8-5.7,2.2c0.4,0.4,9.8-0.4,10.4-0.6c0.5-0.2,1.8-1.5,1.8-3
	s-0.9-3.1-1.9-5.8c-1-2.7-2-4.7-2.3-6.4c-0.3-1.8-1.8-5.1-2.6-7.9s-2-5.3-2.4-6.7s-3.8-10.1-3.8-10.5c-0.1-0.4-2.5-9.4-2.6-9.6
	c-0.1-0.2-1.6-5.3-1.6-5.6c0-0.3,1.2-5.2,2.1-4.6c0.8,0.6,0.4,4.2,0.9,7.5c0.5,3.3,3.3,12.3,3.6,12.8c0.3,0.5,4.8,6.4,6,11.3
	c1.2,4.9,2.5,10.4,3.2,12.1c0.7,1.8,2.1,6.1,2.2,6.3s2.5,8.2,3.3,9.6s1.8,2.1,2.3,2c0.5-0.1,1.5,0.5,1-1.3s-2.5-8.7-2.5-8.7
	s-2.8-13.4-3.1-14.9c-0.2-1.5-3.1-8.1-3.9-9.9c-0.8-1.9-5.5-8.1-6.3-10.3c-0.8-2.2-1.4-9.3-1.7-11c-0.3-1.7,0.2-7,0.8-6.9
	c0.6,0.1,0.7-1.8,1.8,2c1.1,3.7,1.3,6.2,2.1,9.1c0.7,3,0.8,6.4,2,8.5s4.5,7.4,4.8,8c0.3,0.6,2.5,4.2,3.9,9.9
	c1.4,5.6,2.8,13.9,3.5,16.6c0.6,2.7,2.4,11.7,3.1,13c0.7,1.3,2.2,2.5,2.5,2.3c0.3-0.2,1.2-1.4,1-3.4s-1.3-7.7-1.4-8.4
	c-0.1-0.7-2.1-10.9-2.1-10.9s-1.3-9.2-1.7-11.5s-1.6-6.2-3.1-8.6c-1.5-2.4-5-8.9-5.4-9.3c-0.4-0.5-2.7-5.3-2.8-5.5
	c-0.1-0.2-3-6.2-3.4-9.5c-0.4-3.4,1.6-3.8,3.6-0.3c2,3.6,0.9,2.2,3.8,7.5c3,5.3,6.8,12.9,8.6,16.1s3,7.9,3.3,12.3
	c0.3,4.4,0,9.2,0.1,10.5c0.1,1.3,4.6,22,4.9,23.4c0.4,1.3,3.8,9.1,4,6.5s-1.6-8.2-1.8-9.2s-1.7-8.9-1.7-9.7s-1.4-8.3-1.5-10.7
	c-0.1-2.4-0.4-5.4-0.1-8c0.3-2.6,0.4-4.6,0.4-7.3c0-2.7-1.9-9.3-4.1-11c-2.2-1.7-4.3-6-4.8-7.8s-3.3-7.5-3.5-8.5s-3-4-1-4.3
	c1.9-0.3,3.3-2.1,3.8,1.1c0.6,3.2,3.4,9.3,4.3,11.3c0.9,2,7.8,15.8,8.2,15.8c0.4,0,0.6,3.8,0.6,7.6c0,3.7-0.3,13.5-0.3,14.5
	c0,0.9,2.5,18.9,3.1,20.8c0.6,2,1.7,8,2.5,10.9c0.8,2.9,2.2,4.1,2,5.2c-0.2,1-4,3.7-4.8,3.7c-0.8-0.1-3-3.2-4.6-3.9
	s-4.8-4.5-8.1-5.8c-3.3-1.3,3.3-0.1,3.3-0.1s-2.7-2.8-6.2-3.7c-3.5-0.9-4.2-1.8-7.7-1.8s-5.8,0.6-7.5,1.3s-5.6,3.8-5.6,3.8
	s-5.9,8.4-6.4,13.7c0,0,0,5,0.6,6.3c0.6,1.2,0.8-0.6,0.8-1s-0.2-2.4-0.2-2.4c1-8.2,4-17.3,4-17.3c6.7-7.2,20.9-6.5,26.4-1.9
	c5.5,4.6,8.6,7,10.5,7c1.9,0,4.8-1.9,4.8-1.9s-4.8-18.6-5.8-27.6c-1-9,0.2-20.1,2.4-24.1c2.2-4.1,7.4-8.2,7.4-12.2s-1-9.1-1.9-11.3
	c-1-2.2-9.6-13.7-14.6-15.1s-5.5,0.2-0.7,6c4.8,5.8,12.5,13.7,12.5,18.2c0,4.6-1.9,11.3-3.6,11.5c-1.7,0.2-4.8-9.3-6.7-14.6
	c-1.9-5.3-4.6-12.8-6-13.9c-1.4-1.2-5.8-4.8-5.3,0c0.5,4.8,3.4,10.3,5.3,14.2s6.7,9.6,7.7,15.1c1,5.5,0.5,7.4,0.5,7.4
	s0.5,11.9,1,18.9s5.5,26,5.5,26l-4.1,0.5c0,0-8.9-8.4-14.1-9.6c-5.3-1.2-16.5-0.5-20.4,2.9c-3.8,3.4-7.4,14.1-7.2,19.7
	c0.2,5.5-7.7-23.7-7.7-23.7s-11-31.2-12.2-35.2s-5.7-13-1.9-25.9s11.7-20.9,11.7-20.9S16,123,15.5,127.7c-0.5,4.8,3.1,25.6,4.1,30.8
	c1,5.2,9.6,27.9,10.3,31.3s2.2,7.4,2.2,7.4l1.2,6c0,0-1.6-12.5,4.9-14.9c6.6-2.4,25.5-4.3,29.3-1.7s7.4,8.2,8.2,8.4
	c0.7,0.2-1.7-10.3-2.2-11.7c-0.5-1.4-4.3-13.4-3.8-23c0.5-9.6,1.4-9.6,0.2-14.4s-6-9.3-7-12.5s-4.6-9.8-5.3-12.5
	c-0.7-2.6-2.9-7-3.4-7.9s-3.8-6-5,0.2c-1.2,6.2,1.2,9.8,5.5,16.5c4.3,6.7,9.3,12.2,10.1,20.6c0.7,8.4,1.2,13.3,2.4,18.9
	c1.2,5.6,3.6,14.4,3.6,14.4s-4.3,0.2-4.8-3.6s-2.4-12.7-2.4-15.8c0-3.1-2.2-13.4-3.4-16.3c-1.2-2.9-4.1-6-6.2-11
	c-2.2-5-4.3-6.2-5-10.8c-0.7-4.6-1.7-9.3-2.4-10.5c-0.7-1.2,2.4-6.7-2.2-4.1s-1,5.5,0.7,13.7s2.9,11,6,16.8c3.1,5.8,5,11.3,6,18.7
	c1,7.4,5.8,20.6,5.8,20.6s1.9,2.4-3.1,1.2s-16.5,2.2-18.5,2.2c-1.9,0-7.2,5-8.4,3.8c-1.2-1.2-4.3-8.5-5.3-16.1
	c-1-7.6-4.6-13.8-5.5-19.6c-1-5.8-2.4-12.5-2.6-17.7s-0.7-12.5,2.4-17c3.1-4.6,4.6-10.3,5.5-10.8s9.1-3.1,3.8,2.9s-7.9,7.4-8.9,14.6
	c-1,7.2,1,29,2.9,33.7c1.9,4.7,6,21.7,8.2,22.9c2.2,1.2,8.4,1.2,12.9,0.5s9.8,2.3,12.2-1.9c2.4-4.2-2.4-6.2-1.9-12.7
	c0.5-6.5-4.6-15.6-5-17.7c-0.5-2.2-4.9-8.9-4.8-12.9c0.1-4.1-4.6-10.5-5-14.1c-0.5-3.6-1.2-8.6-1.9-9.1c-0.7-0.5-6.5-3.6-4.1,4.8
	c2.4,8.4,4.3,18.5,7.2,24.5c2.9,6,5.3,12.2,7.7,20.4s4.8,11.3,3.4,13.4c-1.4,2.2-3.1,1.9-6.2,1.7c-3.1-0.2-10.5,1.4-11.7,0.5
	s-3.6-5.4-4.3-9.2s-4.1-13.6-4.1-16.3s-2.6-9.6-1.9-17.3c0.7-7.7,0.7-10.5,2.2-13.4c1.4-2.9,1.2-7.3,3.1-5.5
	c1.9,1.7-0.5,8.4-1.2,17.3s0.2,16.3,2.9,24.3c2.6,8.1,3.7,12.4,5.4,15.5s13,2.4,13,0.7c0-1.7-3.1-6.5-4.3-12.2
	c-1.2-5.8-6.7-19.4-7-21.3s-4.1-15.6-4.3-16.8c-0.2-1.2-2.9-4.8-2.9,2.4c0,7.2,0.5,9.6,3.1,15.1c2.6,5.5,2.9,8.6,5.5,14.4
	C44,162,46,168.5,46,170.7s-2.6,8.7-5,1.9c-2.4-6.9-7.7-23.4-7.9-26.5s-1.4-12.7-1.4-12.7s-1.7-11.3,1.7-21.6
	c3.4-10.3,15.8-3.8,20.9-4.3s12.7-0.5,17.3-0.7c4.6-0.2,11.7,12.5,13.2,12.5c1.4,0,3.1-7.2,1-10.1c-2.2-2.9-7.9-10.1-17.3-8.6
	s-18.5,4.1-26.6,3.8c-8.2-0.2-12.9,0.2-13.4-0.5c-0.5-0.7-3.1-2.6-1.7-4.1c1.4-1.4,2.2,0.5,7.4,1.2c5.3,0.7,9.8,1.4,13.7,0.7
	c3.8-0.7,8.2-2.9,12-2.9s9.6,0,12.2,0s13.4,7,13.4,7s4.8-7,1-7.9S72.8,93.7,63,95.4S50.7,98.5,43.6,99s-11.5-0.7-12-1.4
	c-0.5-0.7-1.2-2.9-0.5-4.1c0.7-1.2-1,0.5,3.1,1.7c4.1,1.2,5.5,1.7,11.7,0.5c6.2-1.2,10.1-2.9,14.6-3.4s12.2-1,14.1,0
	s9.1,2.9,11.3,2.9c2.2,0,8.4-1.9,8.6-5.8c0.2-3.8-0.7-0.2-6.5,1.2c-5.8,1.4-8.2-0.2-12-1.2c-3.8-1-12.9-2.6-18.2-1s-16,4.3-19.7,4.8
	c-3.7,0.5-7.8-2.4-6.4-4.3s5.6-3.4,6.4-3.4s11.6-1,18.3-1s23.7,0.5,27.1,0.5c3.4,0,11.5,1.4,14.4,0.5c2.9-1,6-1.9,6.5-2.9
	c0.5-1-0.5-1.4-6-1.4c-5.5,0-4.8,0.5-9.8,0.5s0.5-0.2-8.6-0.2s-7.4-0.2-11.7,0c-4.3,0.2-7.9,0.2-13.2,0.2s-7.4,0.2-10.8,0.5
	c-3.4,0.2-6.2,1.4-6.1,0.2s-1.8-2.6,0-3.4c1.8-0.7,6.6-1,8.2-0.7c1.7,0.2,15.1,0,17-0.2c1.9-0.2,7.2-0.2,14.1-0.2s7.7,0.7,12.5,0.7
	c4.8,0,12.9,0.5,14.9,0.7c1.9,0.2,7.4,1,8.3,0.5c0.9-0.5,5.9-3.6-3.2-3.6s-0.5,1.2-17,0C76.4,75,82.2,74.3,74.5,75
	s-8.4,0.7-14.6,0.7s-7,1.9-10.8,0c-3.8-1.9-4.3-1.2-4.8-2.4c-0.5-1.2-0.5-0.5-0.5-2.4s-1.7-4.1,1.7-2.4c3.4,1.7,4.6,5.3,7.2,5.3
	c2.6,0,13.2-0.5,13.2-0.5s10.5,0,17-0.5s13.7-1.2,14.9-1.4c1.2-0.2,14.6,1,17.5,1.2c2.9,0.2,5,4.3,5.8,0c0.7-4.3-0.5-3.8-4.3-3.8
	s-2.2,0.7-12.9,0.7s-8.6,0-17.7,0s-6.5-0.2-13.9,0c-7.4,0.2-10.1,1.2-15.3,1.7s-10.1-5-10.1-5c-0.5-7.3,7.7,0.7,7.7,0.7
	c0.5,1.4,7.9-1.4,10.8-0.5c2.9,1,31.6-1.7,36-0.5c4.3,1.2,20.8,0,21.6,1.4s2.2,7.5,2.2,5.9c0-1.6,2.6-4.5,2.1-3.5
	c-0.5,1-1.2-3.8-2.1-4.6c-1-0.7-10.1-3.6-11.6-3c-1.6,0.6-49.8,1.1-49.8,1.1l-6,0.5l-5.8-3.6c-0.1-4.3,6.5-1,6.5-1s1,1,4.1,1
	c3.1,0,32.6-1.4,34.3-1c1.7,0.5,22.8,1.2,22.8,1.2l8.2,4.3l2.2,4.1l2.8-0.2l-2.8-5.3l-7-3.6l-15.1-3.6c0,0-14.6,0.5-16.1,0.7
	c-1.4,0.2-29.2,0.5-29.2,0.5l-3.1-4.1c-3.1-4.1,6.2-0.6,6.2-0.6s15.4-0.8,17.8-0.6c2.4,0.2,18.7-0.2,20.6,0.2
	c1.9,0.5,17.8,3.1,21.1,4.8c3.3,1.7,6.6,5.8,7.6,6.7c1,1,2.7,3.1,2.7,3.1l2.2-1.4l-8.2-8.9l-15.9-4.8l-24.1-3.1L67.1,51l-3.8-3.1
	c-0.1-1.9,4.9,0.9,6.8,0.9c0,0,6.1-3.1,5.7-4.1c-0.4-1-7.7-0.2-7.7-0.2c-0.7,0.1-2,0.8-1,1.3c1,0.5,2.1,0.8,3.3,0.9
	c1.2,0.2,3.9,0.3,6.4,0.2c2.6-0.2,6.2-0.3,8.4-0.4s9.8,0.1,12.7,0.6c2.9,0.5,10.6,1.2,11.1,1.5s9.8,2.4,9.8,2.4s10.7,4.3,12,5.1
	c1.3,0.8,4.6,3.3,5.6,4.7c0,0,7,4.6,9.1,1.6l-13-9.5c0,0-14.8-6.7-16.3-6.7S81,43.1,81,43.1H69.2c-1.3-0.4,0.9-1,2.5-1.7l1.9-3
	c0.2-0.5,1.8-1.3,2.3-1c0.5,0.3,4.5,1.2,6.1,1.8c1.7,0.6,5,1.6,5,1.6c2.4,0,16.1,0.2,20.1,1.2s18.5,4.1,20.6,4.6
	c2.2,0.5,18.7,12,19.2,13.2c0.5,1.2,1.2,2.4,1.7,2.5c0.5,0.1,4.6-1.6,4.6-1.6L138,49.8c0,0-10.5-6-13.2-6.2
	c-2.6-0.2-23.5-3.8-24.2-4.1c-0.7-0.2-20.1-1.9-20.1-1.9L79,34.7c0,0,18.2-15.1,28.5-18.5s12.7-5.5,17.3-3.4
	c4.5,2.2-2.6,2.2-11.6,4.3s-18.3,7.7-20.5,9.8s-12,5.8-8.9,7.4s7-0.7,8.6-2.6c1.7-1.9,7-5.8,13.2-7.9c6.2-2.2,11-3.8,14.6-4.8
	c3.6-1,6.5-2.6,8.4-2.9c1.9-0.2,5.9,0.2,3.8,2.2s-6.9,1.9-13.4,4.3s-7.9,3.4-12.9,5c-5,1.7-8.4,3.4-11,5.3c-2.6,1.9-2.9,3.6,0,3.4
	c2.9-0.2,6.5-3.1,10.1-4.1c3.6-1,11.5-5.5,17.5-7.2c6-1.7,11.8-5.5,13.4-5.3s7.4,1,2.4,3.6c-5,2.6-19.2,4.8-25.3,7.9
	c-6.1,3.1-14,5.8-9,6s5,1.9,10.5-0.7c5.5-2.6,8.2-5.5,12.7-6.2c4.6-0.7,13.7-7.2,16.3-6.5c2.6,0.7,3.1,0.7-1.2,3.4
	c-4.3,2.6-9.8,3.8-14.9,5.8c-5,1.9-6.7,2.9-8.2,3.6s-5.8,3.8-1.2,3.4c4.6-0.5,4.1-0.2,10.5-2.9c6.5-2.6,16.3-9.1,17.3-9.8
	c1-0.7,4.3-3.6,3.8-0.5c-0.5,3.1-3.8,5.3-6.2,6.7c-2.4,1.4-14.1,4.8-15.3,6.2c-1.2,1.4-4.8,2.9-0.2,2.6c4.6-0.2,6-1.7,10.8-3.6
	c4.8-1.9,12.7-8.2,12.7-8.2s3.4-5,4.3-2.4s-15.6,14.1-15.6,14.1s-6.7,0.7-5.8,2.2c1,1.4,6.7,3.6,8.6,1.2
	c1.9-2.4,12.2-13.7,13.4-14.1c1.2-0.5,9.1-2.9,4.6,1c-4.6,3.8-8.4,10.1-10.8,11.5c-2.4,1.4-7,3.8-7.4,4.8c-0.5,1-2.2,5,1,3.1
	c3.1-1.9,11.7-8.6,13.2-10.3c1.4-1.7,7.4-8.6,8.6-7s-8.6,9.6-11.3,12.7c-2.6,3.1-10.5,7.4-6.2,7.9c4.3,0.5,11-8.4,13.4-9.8
	c2.4-1.4,4.8-9.6,7.9-7.7c3.1,1.9,3.8,5,0.2,7c-3.6,1.9-17.5,10.5-17.3,12c0.2,1.4,1.7,3.8,5.8,0.7c4.1-3.1,13.4-8.6,14.1-9.1
	c0.7-0.5,10.8-2.9,2.9,2.2s-16.8,8.2-14.9,8.6c1.9,0.5,1-2.2,11.5-3.6c10.5-1.4,9.6-1.2,8.6,0.2s-15.6,3.6-13.2,4.6
	c2.4,1,16.3,4.6,17.5,4.1s-5-2.6-6.2-4.1s2.4-2.4,4.8-0.7c2.4,1.7,1-7-0.2-8.2c-1.2-1.2-17.5-23.5-24.2-26.6s-12.9-2.6-17.3-6.2
	s-15.6-6.5-8.4-6.5c7.2,0,37.9,4.1,44.8,7.7s18.5,6,17.3,10.1s-5.8-1.9-9.8-4.3s-18.7-7.2-23.3-7.4c-4.6-0.2-23.3-5.5-20.9-3.1
	c2.4,2.4,12,5,18,5.5c1.1,0.1,2.7,0.4,4.5,0.8c8.5,1.8,23,6.4,25.9,9.6c3.6,3.8,4.1,7.4-1,5.3s-21.6-12.7-24.5-12.7
	s-3.6,2.4,1.9,4.6c5.5,2.2,11.3,5.5,15.1,7.4s6.7,2.2,6.5,4.6c-0.2,2.4-2.9,2.9-4.8,1c-1.9-1.9-3.9-4.3-6.7-6s-4.3-7.1-4.3-2.2
	s6.2,7.2,8.4,10.3c2.2,3.1,4.8,4.1,6,7.2c1.2,3.1,1.4,9.6,1.2,11.9s-3.1,5.1,0.7,5.1s2.2-14.9,1.9-16.5c-0.2-1.7-1-9.1,1-10.8
	c1.9-1.7,5.3-15.1,7.2-9.6s-4.8,11.5-4.3,15.8c0.5,4.3,1.2,10.8,0.5,15.9s-1.1,2.9-1,6.8s1.7,5.3,2.4,2.9c0.7-2.4,1.9-14.4,1.9-16.3
	s-0.5-12.5,0.2-13.7c0.7-1.2-0.3-8.6,3.4-9.3c3.7-0.7,1.7,1.2,0.7,5s0.2,16.5-1.9,23.5s-1.7,14.9,0,15.1c1.7,0.2,2.6-12.9,2.6-12.9
	l2.4-14.4c0,0-0.5-11.5,0.2-12.2s4.1-2.6,5.3,1.4c1.2,4.1-1.2,9.1-1.4,11.3s-2.6,11-2.6,12.8s-2.4,10.9-2.4,12.6
	c0,1.7-1.2,4.8,0.5,5.8c1.7,1,4.1-4.8,4.3-6.5s0.7-10.1,1.4-11.9c0.7-1.8,1.9-8.3,1.9-10c0-1.7,1.7-10.8,1.7-10.8s3.1,1,3.1,4.3
	c0,3.4-1,8.9-1.7,12.7c-0.7,3.8-3.1,11.5-3.4,15.1s-2.9,8.9-2.9,9.6c0,0.7,1.7,3.1,2.6,1.4c1-1.7,2.2-4.6,2.4-6.2
	c0.2-1.7,1-4.6,1.9-7.7c1-3.1,1.4-8.6,1.9-11.3c0.5-2.6,1.4-11.3,2.4-9.3s3.1,3.6,1.7,8.9c-1.4,5.3-2.2,5.8-3.4,13.2
	s-4.6,14.6-4.8,16.8s1.9,1,3.8-2.4s4.3-12.9,4.8-15.8c0.5-2.9,1.7-15.1,2.4-11s3.4,7,1.2,10.8c-2.2,3.8-5.5,13.9-7.7,18.5
	c0,0-2.4,1.4-2.4,1.8s-0.9,2.2,0.5,3.3s2.3-1.9,3-2.8c0.6-0.9,2.8-5.5,3.2-6.7c0.4-1.2,1.8-7.6,2.5-7.5c0.6,0.1,1.9,0.6,1,3.8
	c-0.9,3.3-2.8,7.5-3.4,8.6c-0.6,1-2.2,4.6-2.6,5.4c-0.5,0.8-2.2,1.8-2.2,2.6c0,0.9,2.4,0.6,3,0.4c0.6-0.2,4,0.1,1,1.4
	c-3,1.4-5.4,1.8-3.6,1.9c1.8,0.2,6.7-1.3,6.7-1.3s13.5,9.7,14,11.2c0.5,1.5,1.8,2.6-0.4,3.6s-7.8,3-9.2,3.5c-1.4,0.5-3,1-3.8-0.4
	s-5.8-15.1-5.8-15.1s3-1.5,4.4-1.5s9.1,6.3,10.1,7.9c1,1.6,4.1,2.1,3.3,3.3c-0.8,1.2-6.6,3.8-7.8,3.8s-3,0.7-3.7-1.1
	s-3.5-8.4-3.4-9.4c0.2-1,0.4-4.3,3.4-1.7c2.9,2.6,6.3,5.8,7.3,6.5c1,0.7,1.8,1.7-0.6,2.6c-2.5,1-3.6,4.2-5.1,0.6s-3.9-5-2.3-6.3
	c1.6-1.4,1.9-1.4,3.4,0.9c1.4,2.3,3,4,1.8,4c-1.2,0-2.2-0.4-2.6-1.8c-0.4-1.4-0.4-3.3,0.4-1.8c0.8,1.4,1,10.9,0.2,12.5
	c-0.8,1.5,5.4,33,6,34.7c0.6,1.7,3.3,10.8,4.9,12.1s12.6,20.8,13.6,32c1,11.3,0.7,28.7-0.6,36c-1.4,7.3-5.9,15.4-5.9,15.4
	s1.3-22.5,1.3-24.8s0.6-15,1.8-18.6c1.3-3.6,2.1-8.4,2.5-5.7c0.4,2.7-0.1,10.2-0.1,13.2s-0.2,6.6-0.6,12.9s-0.9,8.7-1.8,11.1
	c-0.9,2.4-4.2,13-5.5,15.5c-1.4,2.5-7.8,11.1-13.9,15.3c-6.2,4.2-41.4,6.8-45.2,7.3c-3.8,0.5-20.5-0.3-23.2-5.3
	c-0.3-0.6-0.6-1.3-0.8-2.1c-1.4-5.3,0.4-13.5,2.9-16.5c2.9-3.4,10.1-9,13.7-10.4c3.7-1.4,14.3-6.9,21.2-7.3c6.9-0.4,8.3-0.6,14.3,0
	c6,0.6,10.1,2.1,14.9,3.8s8,1.4,10.3,5.6s3.9,4.6,3.2,8.2c-0.7,3.7-1.5,5.8-5.6,8.9c-4.1,3-7.4,5.3-13,6.2c-5.7,1-13.3,1.7-18.5,2.3
	s-12.6,1.3-18.9,1.4s-9.4,2.5-14.3,0.6s-7.1-2.6-7.1-6c0-3.4-1.6-7.9,2.4-11.5c4-3.6,5.4-7.2,9.6-8.9c4.2-1.8,0.3-5.1,16.3-6
	c16.1-0.9,23.6-1.7,29.3-0.6c5.8,1.1,9.4,1.5,12.9,4.9c3.5,3.4,5.1,5.7,4.8,7.8s0.7,3.6-4.5,5.5c-5.2,1.9-9.1,2.9-11.3,3.7
	c-2.2,0.8-11.1,3.4-19.1,4.5c-8,1-14.7,1.8-20,1.8s-7.3,0.5-10.5-0.1c-3.2-0.6-7.3-3-6.4-7c0.9-4-0.6-4.3,4.8-8.5
	c5.4-4.2,5.4-4.9,12.1-6.9c6.6-2,6.6-1.9,13.6-2.6c7-0.6,15.6-2.2,21.3-1c5.8,1.2,8.6,0.7,10.8,4.4s5.6-0.7,5.4,3.3
	c-0.2,4,0.5,5-5.2,7.4c-5.7,2.4-7.8,3.4-17.2,4.4c-9.3,1-23.4,2.7-28.4,3.3c-5,0.6-7.8,1.2-10.7-0.2s-5.9-3.4-1.5-7
	c4.4-3.7,4.7-6.9,10.8-8.6c6.1-1.8,10.8-2.3,19.2-2.7c8.4-0.4,9.8-2.2,15.3,0.2s7.6,2.3,8.7,3.4s4.8,2.5,1.4,5
	c-3.4,2.6,1.9,2.7-5.7,3.9c-7.6,1.2-10,0.9-17.1,1.3c-7.1,0.4-16.9,0.8-21,1c-4.1,0.2-7,2.9-8.2,0.3c-1.2-2.6-4.5-2.4,2.4-5.2
	c7-2.8,2.4-3.3,16-5.4s22.5-1.2,26.2-1.3c3.8-0.1,5.2-1.2,5.5,0.9c0.4,2.1,5.3,2.7-0.4,4.7c-5.8,2-2.6,2.2-12.3,2.6
	c-9.7,0.4-14.5,0.4-19.3,0.5c-4.7,0.1-4.3-0.5-8,0.2c-3.7,0.7-5.6,1.1-6.6,1.1c-1,0-6.6,0.4-0.3-2.5c6.3-2.9,13.4-5,24.1-5.6
	c10.6-0.6,20.5-1.5,21.2-0.6c0.7,0.9,8.5,3-2.5,4.8c-10.9,1.8-10.1,1.8-18.1,1.8c-8.1,0-14.8-2-18.1-1c-3.3,1-13.2,4.4-12.8,5.2
	s10.2,2.7,17.3,1s21.6-0.5,27.7-2.5s18.9-7,18.9-7s2,4.2-7.6,6.1s-5.4,0.9-11.8,2c-6.5,1.1-20.9,3.4-24.9,3.8
	c-4,0.3-17.7,1.6-20.3,0.9c-2.6-0.7-4.2-2.2-5-0.8s0.8,3.7,3.4,4.1s4.2,0.4,11.7,0.8c7.6,0.4,25.9-1.8,32.7-3.4
	c6.8-1.7,19.5-6.2,21.3-6.9c1.8-0.7,7.3-10.9,7.4-8.7s-14.9,20.2-33.7,21.7s-31.4,2.8-36.8,2.9c-5.5,0.1-22.4-10.4-28.4-12.5
	c-6-2.2-27.2-8.5-33-10.5c-5.8-2.1-21-8.9-24.3-12.9c-3.3-4-8.4-22.1-8.4-22.1l-1-4.2c0,0,2-4.2,2.6,0.3s3,10.6,4.5,14.8
	c1.5,4.2,2,6.9,5.4,10.7c3.4,3.8,13.7,8.2,16.1,8.9c2.4,0.8,27.7,10.4,33,10.6c5.3,0.2,14.4-3.4,17.7-8.8c3.4-5.4,8.9-16.1,3.2-18.9
	s-11.2-7.8-15.8-10.5c-4.6-2.7-9.3-0.5-5.1,3.5c4.2,4,10.1,5.3,8.7,10.9s-0.8,12.7-5.5,15.4c-4.7,2.7-14.7,3.6-13.8,0.8
	c0.9-2.8,15.4,2.1,16.2-7.4c0.8-9.5,1.8-11.2-0.6-13.1s-8.7-5.4-9.7-7.7c-1-2.2-4-7.4-5.4-6.7s-2.6,5.2-0.6,7.5c2,2.3,7,3.7,7.4,8.1
	c0.5,4.4,1.7,9.8-1.4,12.3c-3.1,2.5-7.7,4-10.6,5.1s-7.7,0.6-7.6-0.5c0.1-1.1,13-1.8,14.8-6.5c1.8-4.6,3.6-10.4,1.1-12.1
	c-2.6-1.7-7.8-2.3-8.4-6.4c-0.6-4.1,0.5-9.9-1.8-8.9c-2.2,1-5.2,3-3.4,9.4c1.8,6.4,8.4,10.4,3.2,15.5c-5.2,5.1-7.5,7.7-9.5,7.4
	c-2-0.3-7.1-1-3.8-4.2s6.9-5.8,7.6-8.9c0.7-3.2,0.5-5.4,0.5-9.9c0-4.6-0.3-20.1-3-12.1c-2.6,8-3.3,14.9-5,18.7
	c-1.8,3.8-2.2,6.2-4.1,7.6c-1.9,1.4-6.1,4.9-6.4,2.6s-3.6-2.9,2.8-8.2s6.3-12.9,6.3-13.6s0.6-8.2-1.7-5.7
	c-2.2,2.5-6.3,11.9-8.6,15.5s-7.1,5.5-7.4,3.3s9.7-15.7,11.4-17.9s6.2-10.1,0.6-6.6c-5.6,3.6-10.5,11.1-12.6,13.3
	c-2.1,2.2-4.2,6-4.2,1.7c0.1-4.3-0.2-8.2,2.8-9.5c3-1.4,7.8-6.1,7.9-6.3c0.1-0.2,1.9-6.6-1.7-4.8s-7.6,6.6-8.6,7.7c-1,1-4,0.3-4-0.2
	c0-0.6,6.1-5.6,6.1-5.6s-4.1,1.1-5.8,2.5s-5.8,5.4-5.8,5.4l-0.5-2.2c-6.7-9.3-23.5-13.2-18.7-12s12.7,13.9,12,16.8
	c-0.7,2.9,1.4,7.9,1.4,7.9s3.6,5,3.6,6.7c0,1.7-12,10.1-12,10.1s-2.6,3.6-7,1.9c-4.3-1.7-8.6-7-7.9-14.3c0.7-7.3,10.1-6.8,10.1-6.8
	s2.6-7.2-0.7-7.2c-3.4,0-4.3-9.6-6.5-5s-3.8,13.4-3.8,13.4l-5.3,5.6c0,0-2.2-11.6-0.7-18.8c1.4-7.2,9.6-10.3,12.9-9.6
	c3.4,0.7,5,6.2,6.7,8.4c1.7,2.2,6,7.2,7.9,10.3c1.9,3.1-0.5,5.5-1.9,8.2c-1.4,2.6-4.6,2.9-9.1-0.7s-2.6-4.1-3.6-1.4
	c-1,2.6-1.9,5.3,1.4,10.8c3.4,5.5,5.8,3.1,7.2,2.4c1.4-0.7,6-3.8,10.8-2.6c4.8,1.2,3.4-3.6,3.4-3.6s1,5.5,3.6,9.1
	c2.6,3.6,3.1,9.3-5.8,14.1S60.6,250,57.7,250c-2.9,0-9.3-4.6-9.3-4.6c-9.6-11.3-11.3-23.7-9.6-36.7c1.7-12.9,8.9-12.2,16.3-14.1
	s21.6,10.5,21.6,10.5l9.3-3.1c0,0-1.9-2.2-4.1-11.3s-2.7-28.3-2.7-28.3c-1.4-9.4,5.3-16.2,8.3-19.9s2.1-10.9,2.1-10.9
	c-3.7-11.9-1.4-34.1-1.4-34.1s41.7-35.9,74.7-35.5c29.2,0.4,47.6,26.2,51.5,32.2c0,0,0.4,1,0.3-0.6c-0.1-1.2-4.3-6.7-6.8-9.9
	c-2.4-3.3-20.9-16.8-21.3-17.3c-0.4-0.5-1.9-9.8-3.6-13.7s-10.2-17.5-11.9-19c-1.7-1.4-6.6-6.8-8.6-8.6c-2-1.7-6.5-3.1-10.9-5.2
	c-4.4-2.1-13.3-6.2-13.5-5.9s2.1,2,2.7,2.5s6.8,3.3,7.2,3.6c0.4,0.3,12.9,5.6,12.9,5.6l6.8,6.5l7,9.2l4.7,7.6l2.1,3.3
	c0,0,1,4.4,0.7,4.7c-0.3,0.3-1.3-0.6-2.6-0.3s-0.2,1.9,0.9,3.2c1.1,1.2,2.9,0.8,3.4,1.6s-3.5,0.8-4.3,0.7c-0.8-0.1-3.3-0.5-4.3-1.1
	c-0.9-0.6,2-2.3,1.5-2.2s-5.2,1.2-6.9,1.1c-1.8-0.1,8.8-5.1,9.7-7.3c0.9-2.2-1.7,0-3.7,0.6c-2,0.6-9.3,5.5-11.1,6.2
	c-1.8,0.7,0.8-1.4,1.5-2c0.8-0.6,6.5-4.2,7.9-4.8s3.4-4,3.1-3.7c-0.3,0.2-3.3,0.6-4.5,1.2c-1.3,0.6-4.6,2.6-6.4,3.3
	s-7.4,4.2-8.4,5.5s-1.3-0.1-2.3-0.3c-1-0.2,0.3-1.6,0.6-1.9c0.3-0.3,5.5-4.2,6.8-5c1.3-0.8,11-6.5,12.2-8c1.2-1.5-2-0.3-2-0.3
	s-4.8,3-5.6,3.4c-0.8,0.4-4.3,3.7-5.3,4.4c-0.9,0.8-5,3-6.6,4c-1.6,1-2.7,2.5-3.6,3.1c-0.9,0.6-1.3-1.3-1.4-2.3
	c-0.2-1,12.8-9.7,14.4-10.9c1.6-1.2,1.7-0.4,2.3-3.2s1.1-2.6,1.1-2.6s2.1,3.8,2.3,3.3c0.3-0.4,0.1-1.2-0.2-2.2s-1.5-3.2-1.9-4.7
	c-0.4-1.5-1.6,1-2,1.3c-0.4,0.3-3.5,4.3-4.3,4.8c-0.8,0.4-2.5,2.7-3.7,4c-1.2,1.3-4,3.3-4.8,4.1s-4.2,4.9-6.6,5.2
	c-2.4,0.3-1.2-2.6-1.1-2.9s3.8-3.2,3.8-3.2s6.4-6.1,6.7-6.4s4.5-3.8,5.6-5.2c1.1-1.3,2.8-2.5,4-3.5c1.2-1-0.5-2.2-1.7-2.5
	c-1.2-0.3-2.2,2.3-2.6,2.6c-0.4,0.3-6.2,7-6.4,7.1c-0.3,0.1-7.3,6.3-8.8,6.4s-3.7,3-4.6,3.1c-1,0.1-2.1-1.8-2.1-2.4s3.3-1.9,4.3-2.7
	c0.9-0.8,3.7-2.9,4.9-3.7c1.3-0.8,1.6-2.9,2.6-4.1c1-1.2,2.1-2.3,4.3-4.2c2.3-1.9,4.4-3.4,5.3-5c0.8-1.6-2.3-0.7-3.1-0.7
	c-0.8,0-2.2,2-3.3,3.5c-1.2,1.5-8,7.1-9.8,8.9c-1.8,1.8-3.5,2.8-5.1,3.7c-1.6,0.8-3.4,1.7-5.1,2.4s-3.1-2.2-2.9-3.1
	c0.2-0.9,6.9-2.5,8.8-3.8c1.8-1.3,4.4-3.2,5.7-4.1c1.3-0.9,4.4-2.8,6.2-5c1.8-2.2,5.2-3,4.4-4.8s-2.1-0.4-4.3,0.7
	c-2.2,1.1-3.3,4-6.4,6.4c-3.1,2.3-10.5,5-12.5,5.7c-2,0.7-5.4,3.7-7.7,4.4s-1.3-2.3-1.3-2.6s5.3-3,7.5-3.8
	c2.3-0.8,10.7-5.7,12.8-7.1c2.1-1.4,3.8-2.7,6.8-4.9c3-2.3-0.8-0.6-2.7-0.8c-1.8-0.2-4.9,3.5-6.7,4.4c-1.8,0.9-6.9,3.8-8.4,4.1
	s-7.1,3.3-9.4,4.3c-2.3,1-7.4,4.2-8.7,4.6s-2.3-1.5-2.6-2.3c-0.3-0.8,4.8-2.9,6-3.8c1.2-0.8,11.4-4.9,11.4-4.9s9.5-3.6,10.9-4.3
	c1.3-0.7,4.4-3.1,3.8-3.8c-0.6-0.8-13.1,5.3-13.9,5.5c-0.8,0.2-13.4,4.8-13.4,4.8l-6.2,3.2c0,0-4.3,2.9-5.5,3.5
	c-1.2,0.6-2.3-0.2-3.5-1.3c-1.2-1.1,2.8-1.8,3.8-2.6c1-0.8,11-3.5,13.4-4.9c2.4-1.4,17.1-5.8,19.3-6.9c2.2-1.1,2.8-2.8,1.3-3.7
	c-1.6-0.8-3.3,0.2-3.3,0.2l-4.4,2l-6.9,3.3l-11.1,3.4l-9.6,4.3c0,0-5.6,3.4-7.4,4.2c-1.8,0.8-3.3,0.5-5.5,0.2
	c-2.3-0.3,1.7-2.2,2.8-3.3c1.1-1.1,8.1-4.3,8.1-4.3s9.3-2.8,11.2-3.6c1.9-0.8,12.8-4.4,14.7-5.5c1.9-1.1,6.2-2.8,6.9-3.7
	c0.7-0.8-1.7-1.7-2.7-1.6c-1,0.1-2.4,1.5-4.6,1.8c-2.2,0.3-2.8,1.2-3.8,1.6s-4.4,1-5.9,1.6c-1.5,0.6-5.9,1.8-9.7,3.3
	c-3.8,1.4-5.3,2.3-8.4,3.5c-3,1.2-6.4,3.3-6.4,3.3s-4.1,4.1-5.3,5.3s-4.6,0.8-5.6,0s4.8-3.5,5.8-4.5c1-1,6.3-4.3,8.7-6.4
	s7.5-2.8,12.9-5.2c5.3-2.4,10.1-2.6,12.9-3.3s4.2-2.3,3.5-3.1c-0.7-0.8-5.4,0.1-7.3,0c-1.8-0.1-11.1,3.8-15.5,4.9
	c-4.4,1.1-12.8,7.6-14.3,8.4c-1.5,0.8-9.6,7.8-9.6,7.8S78,36,78.3,36.8s6.4,2.3,6.4,2.3l12.9,1.1c0,0,18.2,2.9,24.7,3.8
	c6.4,0.8,9.4,4.6,10.8,4.7c1.4,0.1,7.2,4.6,8.2,5.2c1,0.6,8.1,5.4,9.4,6.6c1.3,1.2-2.8,2.5-4.1,1.3c-1.3-1.3-4.8-3.9-6.3-5.5
	s-6.1-3.9-7.4-4.7c-1.3-0.8-6.8-4.1-10.2-4.8c-3.5-0.8-14.7-3.4-17.5-3.4c-2.8,0-6.2-1.3-9.6-1c-3.4,0.2-7.9-0.6-10.4-0.6
	s-7.4-0.9-8.6-0.4c-1.3,0.5,1,0.9,3.3,1c2.3,0.1,3.2-1.2,1.3-1.5c-1.9-0.3-3.8-1.7-6.3-1.4c-2.5,0.3,0.3,2.1-1.6,2.5
	c-1.9,0.4-2.1,3.3-0.9,3.6c1.2,0.3,3.3-0.5,4.9-0.3c1.6,0.1,4.3-0.1,5.5,0.1s11.5,0.5,13.2,0.5c1.7,0,9.6,0.8,11.3,1.3
	s8.4,1.3,10.4,1.5c2.1,0.3,4.8,1.8,7.2,3c2.3,1.2,3.4,1.1,4.8,2c1.3,0.9,3.9,2.9,6.1,4.6c2.2,1.7,4,1.4,5.1,2.8
	c1.1,1.4-0.1,3.1-0.1,3.1s-0.4,3.2-5.3-2.6c-4.9-5.8-11.4-7.5-11.4-7.5l-8.1-2.5c0,0-12.1-2.4-15.1-2.5c-3-0.1-7.4-1.2-11.1-1
	c-3.7,0.2-6.3-0.2-8.4,0s-4.8,0.8-7.6,1.3s-5.9,0.6-5.9,0.6c-5.4-2.4-5.3,0.6-5.3,0.6c2.5,1.8,9.8,1.1,11,1c1.3-0.1,8.4-0.1,9.1-0.3
	c0.8-0.3,6.8-0.4,8.3-0.6c1.5-0.2,5.1,0.4,5.1,0.4c12.3-0.6,30.3,5.7,30.9,6.1s3.5,2.9,4.3,3.7c0.8,0.8,2.9,3.3,3.9,4.4
	c0.9,1.2-0.8,2.3-1.8,1.7c-1-0.7-4.4-5.5-5.8-6.3c-1.3-0.8-7.6-3.3-9.6-3.5c-2-0.3-7.4-1.5-9.8-2.3s-6.9-0.1-9.6-0.1
	c-2.7,0-8.9-0.1-9.4-0.1c-0.5,0-12.6,0.8-16.5,1c-3.8,0.2-4.4-0.8-7.9-1.2s-3.3-1.7-3.6-1.3c-0.3,0.3,1.2,1.9,1.3,3
	c0.2,1.1-1.4,1.1-2.5,1c-1.1-0.1-1.7-1.9-2.6-3c-0.9-1.1-0.8,0.5-0.8,1.1c0,0.6,2.1,3.1,2.8,3.4s8.4,0.2,8.4,0.2s20-0.9,21.6-0.9
	s11.9,0,14.7,0.1c2.8,0.1,9.1,0.8,10.7,0.8c1.6,0.1,10.9,3.6,12.4,4.3c1.5,0.7,1.8,2.4,2.5,3.5c0.8,1.1,0.8,2.7-0.3,3.5
	c-1.1,0.8-1.2-1.2-2.4-3.8c-1.3-2.6-5.6-4.1-7.5-4.8c-1.9-0.8-8.4,0.1-11-0.3s-9.4-0.3-11.4-0.3S81.5,61.2,80,61.4
	c-1.6,0.2-9.8,0.4-12.5,0.3S61.1,62,58.2,62C55.4,62,55,60,53,59.6c-2-0.3-2.3,2.3-2.2,2.8s1.6,1.2,3.3,2.3c1.7,1.2,1.8,0.9,3.4,0.9
	s4.1-0.5,5.8-0.7c1.7-0.2,6.6,0,7.7,0.1c1.1,0.1,8.5-0.3,10.2-0.4c1.7-0.2,4.5-0.1,8-0.1c3.5,0,5.9-0.8,7.7-0.6
	c1.8,0.2,13.8,0.6,15.9,0.5s5.8,0.2,8.1,0.5s3.1,2.5,3.8,3.9s-0.5,3.3-2.1,2.9c-1.6-0.3-1.1-4.1-2.5-4.1s-5.6,0-8,0.1
	c-2.4,0.1-8.4-0.3-11.2-0.3s-6.9-0.8-10.7-0.3c-3.8,0.4-3.8-0.6-7.1-0.3s-18.2,0.4-21.1,0.4s-5.3,0.7-7.5,0.7
	c-2.2,0-3.7-2.3-5.4-3.6S47.8,65,47.8,65s3.8,3.6,5.5,4.5s6.2-0.5,10.1-0.6c3.9-0.1,14.4-0.5,17-0.4c2.6,0.1,9.8,2.1,12.3,2.2
	c2.5,0.1,16.7,0.4,19.8,0.4c3.1,0,4.8-0.3,6.5-0.3s-0.1,1.4-0.5,2.4s-8.4-0.5-11.7-0.6c-3.3-0.1-6.6,0.2-9.2,0.4
	c-2.6,0.3-11.2-2.3-12.7-2.3s-6,0.1-11.7,0.5c-5.7,0.4-9.4-0.3-14.5,0.4s-7-0.3-7.9-0.6c-0.8-0.3-3.1-2.5-4.8-2.4
	c-1.7,0.2-1.1,1.8-0.9,2.4s1.7,1.9,2.8,2.8c1.1,0.9,4.3,1,5.9,1s9.8-0.4,12.8-0.4s16.3-0.7,16.3-0.7s2.6,0.4,4.7,0.6
	c2.1,0.2,5.7,0.4,8.6,0.7c3,0.3,4.1,0,8.7-0.3c4.7-0.3,2.5,0.2,6.4-0.3c3.9-0.5,4.3,0,5.4,1.2c1.1,1.2-4,2.3-5.4,2.3
	s-7.6-0.4-9.6-0.4s-11.2-0.6-13.3-0.3c-2.1,0.3-12-0.7-13.9-0.7s-10.2,0.3-12,0.3S54,77.6,53,77.7c-0.9,0.1-6.1-0.8-7.5-1.2
	c-1.4-0.4-2.8-0.8-4.7-0.3c-1.8,0.6-1.3,3.2-1,4c0.3,0.8,1.8,0.5,3.4,0.5c1.7,0,18-0.8,20-0.7c2,0.2,16-0.3,17.5-0.3
	s4.9,1.1,14.5,0.6c9.5-0.5,5.1,1.6,5.5,2.2c0.4,0.6-1.5,0.4-2.3,0.8c-0.8,0.3-10.3,0.5-13.5,0.4s-19.2-0.5-23.3-0.3
	c-4.1,0.2-17.3,2.5-18.9,2.9c-1.6,0.4-2.8,0.2-4.9,0.2c-2.2,0-2.6,1-2.9,1.6c-0.3,0.6,1.8,0.6,3.7,0.5c1.8-0.1,3.5-0.6,8.2-1.4
	s5.1-0.8,8.7-1.5c3.6-0.8,12,0.5,15,0.2s7.9,1.3,9.4,1.4s5,0.1,7.3-0.3c2.3-0.4,10.4-1.2,12.4-0.9c2,0.2,0.1,0.9-0.7,1.7
	c-0.8,0.8-3.3-0.7-5.2-0.6c-1.9,0.1-3.4,0.8-5.2,1.4s-3.8,0.3-5.8,0.9c-1.9,0.7-6.8-2.1-10.8-2.3c-4-0.3-11.7-0.6-14.2,0.3
	c-2.5,0.8-4.6,0.8-9.1,1.5s-5.9,1.4-9.4,2.4s-3.3-0.2-4.8-0.8s-2.9,1.3-2.8,1.8c0.2,0.5,1.1,1.5,2.8,2c1.7,0.5,3.9,0.8,6,0.8
	c2.1,0.1,9.1-1.8,10.4-1.9c1.3-0.2,4.6-1.9,8.4-2.9c3.8-1,11.7-0.3,13.5,0.3c1.8,0.5,6,1.9,7.7,2.2c1.7,0.3,3.8,0.3,5.2,0.3
	s3.5-1.1,6.3-1.3c2.8-0.2-0.7,2-1.3,3.1s-1.8,0.6-4.7,1.2c-2.9,0.6-10.5-1.5-12.9-2.3c-2.3-0.8-9.8-0.2-12.5,0.3
	c-2.7,0.4-18.6,3.4-19.8,3.8c-1.3,0.4-3.3-0.3-4.4-0.3c-1.2-0.1-6.3-2.1-6.7-2s-0.8,1.2-0.8,1.8s4.2,2.9,6.4,2.9
	c2.2,0,6.9-1.8,11.4-2.8s22-1.6,22-1.6s8.9,2,11.6,2.3c2.8,0.3,2.6,0.2,4.3,0.3c1.7,0.2,1.9,1.1,2,2.3c0.1,1.2-1.1,1.8-2.2,2.2
	s-4.3-2.4-5.9-3.3c-1.7-0.8-7.4-2.6-9.9-2.5c-2.5,0.1-7.5,0.3-11.8,0.8s-10.6,2.1-11.2,2.4c-0.6,0.3-7.3,1.8-9.4,2.2
	s-3.3-0.9-5.2-1.2s-2.7-1.3-3.6-1.1c-0.9,0.2,0.2,0.8,0.9,1.9c0.8,1.2,6.9,1.3,9.6,1.3c2.8,0,14.1-1.1,16-1.4
	c1.8-0.3,6.2-1.4,7.7-1.8c1.5-0.4,11.2-0.5,12.5,0.4c1.3,0.9-0.2,1.2-1.1,1.3c-0.9,0.1-3.8,0.5-5.5,0.7c-1.8,0.2-4.8,0.1-6.1,0.1
	c-1.3,0-5.5,1.1-5.8,1.6c-0.3,0.5,3,0.3,5.7,0.2c2.7-0.2,7.2-0.1,9.2-0.1s5.1-0.8,7.9,0.3s3.8,2.9,5.3,4.9s2.3,4.1,1.3,6
	c-0.9,1.9-1.8-2.3-3.7-3.7c-1.9-1.3-3.9-4.1-4.8-4.8c-0.8-0.7-4-1.2-6.9-1.1c-2.8,0.1-5.7-0.4-10.9-0.1s-5.9-1.1-10.8-1
	s-9.9,0.5-12,0.4c-2.2-0.1-5.9,0.1-8.4,0s-2.7-3.7-2.7-4.6s1.5-2.5,2.4-3.9c0.9-1.4,4-8.4,5.3-10c1.3-1.7,4.2-7.1,5.4-9.5
	c1.3-2.4,5.9-8.7,7.3-11.3c1.4-2.6,8.7-10,10.3-12c1.6-2,14.6-13.5,15.8-14.4c1.2-0.8,5.9-4.6,6.6-5.4s7-5.8,8.7-7
	c1.7-1.3,16.9-10.3,18.5-11.5c1.6-1.2,8.9-3.8,12.7-4.6c3.8-0.8,8.7-1,11.7-1c3,0,8.8,1.6,12.5,1.8c3.7,0.2,4,0.4,6.9,0.8
	c2.9,0.3,15.1,2.8,17.5,2.9c2.3,0.1,11.1,3.4,12.8,3.7c1.7,0.3,11.3,5.8,13.6,6.2c2.3,0.3,2,3.3,1.4,3.7c-0.6,0.3-15-7.4-15.8-8
	s-17-4.5-18.7-4.5c-1.8,0-10.9-1.6-11.2-1.6s-2.6,1.4-1.4,1.8s9.3,2.3,11.3,2.3s13,2.8,13,2.8s6.8,1.9,12,3.7
	c5.2,1.8,9.5,6.4,9.5,7.3c0,0.8-1,0.4-2.8,0.2c-1.7-0.2-1.7-0.8-3.3-1.7c-1.7-0.9-13.3-6.3-15-6.6c-1.7-0.3,0.7,0.6,2.1,1.6
	c1.4,1,11.5,6.4,12.9,7.3c1.4,0.9,3.1,0.8,3.2,1.4s-1.3,2.1-3.1,1.6c-1.8-0.5-4.6-3.3-7.5-3.8c-2.9-0.5-13-6.9-13-6.9
	s10.3,7.9,11.5,8.7s4.3,2.9,5.8,4.1c1.4,1.2,2.3,0.8,1.8,1.5s-0.8,2.4,0.3,3.6c1.2,1.2,0.3,2.3-0.3,2.3c-0.5,0.1-1.8-2.1-2.8-3.6
	c-1.1-1.5-6.9-6.9-8.4-8c-1.4-1.2-1.7-0.2-1.3,1.1c0.5,1.3,1.8,3.1,3.2,4.9c1.4,1.8,6.5,6.7,7.6,8c1.1,1.3,2.2,6.4,2.2,8
	c0,1.7-0.3,5,0.8,6.2c1.1,1.2,1.4-9.4,1.4-10.8s-1-7.2-0.7-9.4c0.3-2.3,2.1-6,2.8-4.8c0.7,1.2,0,1.3-0.9,2.3s-0.1,3.4,0.1,4.3
	c0.2,0.9-0.2,3.2,0,4.4c0.2,1.3,0.4,3.3,0.4,6.2s0,7.6-0.3,8.6s1.1,3.3,2.2,4s0.4-10,0.4-12.2c0.1-2.2-0.3-6.9-0.4-7.9
	c-0.1-1.1,0.1-3.5,0.5-5.4s2.1-5.2,3.4-7.8s1.8-3.7,2.3-3.1c0.5,0.6-0.8,4.2-1.2,5.3c-0.3,1.2-2,4.2-2.8,5.7c-0.8,1.5-0.4,4.8-0.4,7
	c0,2.2-0.1,6.2-0.1,7.4c0,1.3-0.4,3.7-0.4,7.8s2.3,6.4,2.6,5.6c0.3-0.8,0.9-5.3,0.7-6.9c-0.3-1.5,0-8.4,0-10c0-1.6,0.8-8.8,0.8-10.1
	s2.4-9.1,3.5-11.5s1.9,2.5,1.9,2.5l-1,2.1l-1,4.8c0,0-0.3,8.4-0.3,8.7s-1.1,12.2-1.2,12.5c-0.1,0.3-1.8,9.9-0.8,11.6
	c0.9,1.7,2.6-1.8,2.6-3.2c0-1.4,0.9-6.9,1.2-8.4s1.3-9.9,1.3-11s0.1-8,0.1-10.5c0-2.5,2.2-6.7,1.8-5.9c-0.4,0.8-0.4,11.1-0.4,12
	c0,0.9,1.9-0.2,1.9-0.4c0-0.3,0.2-3.4,0.4-4.4c0.3-1,0.3-4.2,1.8-4.4c1.5-0.3,1.1,3.7,1.1,3.7l-1.6,6.4l-3.4,16.1
	c0,0-2.2,12.5-1.9,14.4c0.3,1.8,3,0.3,3,0.3l1.2-4.8l2.8-16.6c0,0,1.7-7.9,3.3-14.4s2.4,1.4,2.8,1.8c0.3,0.3-0.4,4.1-0.4,4.1
	l-1.3,8.5l-2.8,11.6c0,0-1.6,8.4-1.6,11s2.2,2.9,2.6,1.2c0.4-1.8,3.8-16.6,4.1-18c0.3-1.4,1.6-8.8,2.2-12s2.4,2.3,2.6,2.5
	c0.2,0.3,0.3,2.4,0.1,2.9s-1.7,6.4-2.7,11.6c-1,5.2-4.2,15.7-4.6,17.1c-0.4,1.3,1.3,2.8,2.1,2.8c0.8,0,1.8-3.2,2.3-5.3
	s3.7-15.4,4.1-18.5c0.4-3.1,1.8-2.3,2.3-1.7s1,3.7,1.3,5.3c0.3,1.7-6.9,19.4-6.9,19.4s-1.9,6-0.6,4.2c1.3-1.8,6.9-16,6.9-16
	s3-6.3,0.5,3.6c-2.5,9.9-8.5,17.6-8.5,17.6s-2.3-0.7-1.7,0.5l7.5,16.3l3.4,9.5c0,0,9,40.3,13.2,45.4s12.2,22.5,12.7,27.1
	s0.1,11.2-1.6,21.5s-5.3,27.6-5.3,32.1c0,4.5-22.2,37.8-23.6,39.2c-1.4,1.4-20-1.8-20.9-1.5s-5.4,0.5-11.3,0.5
	c-5.8,0-41.9-3.2-47.7-4.3c-5.8-1.1-23.1-8.2-29.3-9.2s4.4,9.6,6.9,11.1c2.5,1.5,75,8.8,81.3,8.8s8.8-7.6,8.4-10.2
	c-0.4-2.6-40.6-0.1-53.8-0.7c-13.2-0.6-44.5-19-49-21.7s-8.5-4.1-8.5-0.7c0,3.4,8.4,23,16.1,28.6c7.7,5.6,81.3,10.2,88,10.2
	c6.8,0,18.1-18.1,17.5-20.9c-0.6-2.7-47.5,1.9-58.8,0.4c-11.3-1.5-70.6-32.9-70.6-32.9s10.4,41.5,13.2,44.3
	c2.7,2.8,40.4,12.3,48.9,13.2c8.5,0.8,41.5,3.7,53-1.7c11.5-5.3,16.7-18.6,17.8-19.8c1.1-1.2,6.2,30.6,6.2,30.6
	c-5.9-14.9-2.6-33.4-1.8-37.7c0.8-4.3,19.1-19.7,14.3-27.8c-4.7-8.2-28.8-19.4-28.8-19.4c-1.3-0.1-3,0-6.9-0.8
	c-3.9-0.8-0.8-1.8-0.8-1.8s8.6,0.5,13.9,0s3.4-2.4,3.4-2.4s-2.4-0.3-5.4-0.1c-3,0.1-5.2,0.3-8.8,0.5s-6.6,0.6-9,1.1
	c-2.4,0.5-4.4,0.1-5.1-0.6s1.8-2,1.8-2s10.4-0.5,14.1-0.6c3.8-0.1,11.7,0.4,12.8,0.8c1,0.4,4.2,1.8,4.3,0.6c0.1-1.1-1-1.9-2.5-2.7
	c-1.5-0.8-4.2-0.8-6.8-0.8c-2.7,0-18.4,0.1-22.4,0.4c-4,0.3-4.3,3.3-4.6,2.8c-0.4-0.5,2.4-3.5,3.3-4.3c0.9-0.8,12.9-0.3,16.2-0.5
	s13.8-0.3,15,0.6c1.3,0.9,4,3,4.2,1.4c0.1-1.6-1.9-3.3-4.4-3.7c-2.5-0.4-8.6,0.5-12.5,0.5s-14.6-0.9-17.9-0.3
	c-3.3,0.6-5.7,5.4-6.2,4.7s3.8-5.4,4.9-5.8c1.2-0.4,13-0.1,16.3,0.1c3.3,0.3,12.2-0.6,14.4-1.4s5.4-2.5,5.4-2.5l1.7-2.9
	c-10.5-21.2-23.9-21.1-23.9-21.1l-10.2-5.5L186,186l-16,12.2c0,0-4.5,4.9-4.8,5.7c-0.3,0.8,0,12.2,0.8,10.2s1.9-11.6,1.9-11.6l7.4-7
	c0,0,8-6.7,11.1-7.3c3.2-0.6,10.9-5.1,12.8-6.1c1.9-1-0.8-3.3-2-3.7c-1.3-0.4-15.4,8.8-18.6,10.9c-3.2,2-14.5,13.2-14.5,13.2
	l-0.5,8.1c0,0-0.1,8.7,1.4,7.8c1.5-0.9,3.9-8.1,4.5-12c0.6-3.9,0.4-3.9,0.4-3.9c3-3.1,15.4-12.4,15.4-12.4s16.4-6.3,16.4-7.6
	c0-1.3-3.4-5.4-3.4-5.4c-7.3,0.4-16.3,9-20.1,11c-3.8,2-15.8,14.4-15.8,14.4l0.1,20.4c0,0,6.4-4.8,7.7-9.3c1.3-4.5,1-9.5,1-9.5
	c8.1-10.4,25.8-17.2,25.8-17.2l7.1-2.4c0,0-2.1-5.9-4.3-7.6c-2.1-1.6-9.6,0.6-11.7,2.5c-2.1,1.9-26.6,19.6-27,22.2
	c-0.4,2.7,0.6,23.5,0.6,23.5s8.5-4.9,10.5-10.5c1.9-5.5,10.9-12.1,16.3-14.1s13.7-0.8,16.4-0.8c2.7,0,9.9-0.5,14.3-0.7
	c4.3-0.2,9.8,6.4,11.1,7.6c1.3,1.3-0.3,2.1-0.3,2.1c-1.5,0.8-4.4,0.3-5.8-2c-1.4-2.3-6.1-5.5-12.8-3.9c-6.7,1.6-10.6,0.1-10.6,0.1
	s-9.2-0.5-15.2,3.5c-5.9,3.9-10.8,5.7-10.8,5.7c-2.5,1.1-2.4-1.8-2.4-1.8c0-3.2-0.2-4.9-0.2-4.9c13.8-15.8,32.7-18.9,32.7-18.9
	s6.2-4.2,10.5-2.9c4.3,1.3,21.8,24.2,19.5,17.7s-18.2-17.8-18.2-17.8s-4.2-3.3-4.9-3.3c-0.8,0-0.6,2.1-0.6,2.1s2.7,3.4,9.8,5.4
	c7.2,2,12.2,13.9,12.2,13.9c5.2,9.1,3.7,8.2,4,5.7c0.4-2.5-1.8-7.8-2.9-9.7s-17-15.7-17-15.7s-3.4-2.9-6.2-3.7c-2.8-0.8-2,0.5-2,0.5
	l1.9,6.2c4.9,0.9,9.1,4.2,13.5,7.7c4.4,3.5,13.4,22.3,13.4,22.3c1-1,0.9-7.7,0.9-7.7c-1.1-9.4-4.7-11.9-5.9-13.6
	c-1.3-1.8-15.8-13.8-15.8-13.8s-1.9-2.1,0.3-1.6c2.1,0.5,11.6,10.2,17.6,15.4s5.2,18.4,5.2,18.4s-1.5,7.8-3.2,3.9
	s-10.1-18.7-14.5-23.9c-4.4-5.2-13-5.6-13-5.6s-1.3-6.9-1.6-8.7s3.7-1.2,3.7-1.2c5.8,1.1,6.9-2.1,7.3-6.7c0.4-4.5-4.8-10.3-4.8-10.3
	l-3.9-6.3l-0.1-2.8c11.6,2,20.9,9.1,20.9,9.1c-3-4-2.9-6.9-2.9-6.9c1.7-6.7-6.5-7.1-9.5-8.1s-14.8,0.7-14.8,0.7s10.1-8.2,16.6-6.9
	c6.5,1.3,7.3,9.2,7.3,9.2c-0.9-6-4.6-7.8-4.6-7.8l-2.2,1.7l-6.3-0.1l0.4-0.6c2.7-1.6,6.9,0.3,6.9,0.3l0.3,2.4c-0.9-1.6-8-0.8-8-0.8
	l-0.7-0.6l0.2-1.7c1.2-1.1,8.4-2.4,9.1,0.5c0.7,2.8,0.3,4.2,0.3,4.2c-2.8-1.9-10.2-1.8-10.2-1.8l-0.6-2.5l-0.3-1.2
	c0,0,11.9-8,16.2,6.7l1.6,2.4c0,0,0.3-15.4-14.6-12.8c0,0-6.4,0.1-13.9,8.2c0,0-5.1-2.1-4.5-3.5s-0.5-4.9-0.5-4.9l1.9-1.3
	c0-0.4,24.1-13.8,30.2-3.5c6.1,10.2,5.6,19.1,5.6,19.1s1.4-3.6,1.2-5.5c-0.2-1.9-2.4-15.3-7.3-19.7c-3.7-3.3-12-8.4-21.7-5.7
	c-3.2,0.9-6.6,2.7-9.9,5.7c0,0,2.2,5.1,1.4,8.1c0,0,12.2-5.9,15.9-6.3c3.8-0.4,10.5-0.9,11.8,0.1s5.8,2.6,8.3,15.1l0.5,2.2
	c0,0-1.1-10.7-4.4-14.9c-0.8-1.1-1.8-1.9-2.8-2.5c-2.8-1.8-5.8-2.1-6.4-2.1c-0.9-0.1-11.9,1.2-12.6,1.7c-0.7,0.5-9.3,4.5-9.3,4.5
	s-0.9-5.9-1.1-6.1s4.4-2.5,4.4-2.5s5.4-2.8,8.6-2.6s9.2,1.5,11.8,2.8c2.6,1.3,5.8,3.8,5.8,3.8s-5.5-2.5-7.5-2.9
	c-2-0.4-9.7,1.1-10.3,1.2s-8.7,2.9-8.9,3.1s-1.7,1.5-1.7,1.5l-0.9-3.8l3.4-2.2l5.8-1.7c0,0,2.9-0.6,5.7-0.3c2.8,0.3,6.4,1.3,5.5,1.2
	s-9.3,1.3-13.2,2.5c-4,1.2-5.6,2.1-5.6,2.1s-0.1-2.2,0.4-2.2s10.2-2.5,12-2.6c1.9-0.2-4.6,0.5-6,0.5s-8.2,9-8.2,9l-2.3,2.4
	c0,0,0.1-5.9-1.3-7.3c-1.3-1.4-2.5,0.4-2.5,0.4s1.8,6.4,1.7,7.5c-0.1,1.1-2.3,4.5-1.8,5.1c0,0,2.8,3.6,5.4,4.8
	c1.7,0.8,6.9,3.3,10.5,7c2,2.1,3.4,4.5,3.6,7.2c0.4,7.8-4.5,9.6-4.5,9.6s-6.2,1.7-11.6-1.9c0,0-5.2-1.3-7,1.5
	c-1.8,2.8-2.2,4.7-1.5,5.6s2.2,1.3,4.5-0.3s5.5-2.3,6.7-2s7.3,0.3,8-0.6s4-5.2,4.9-5.2c0.9-0.1,3.6,1.7,2.4,4.7
	c-1.2,3-2.4,4.1-3.5,4.1c-1.1,0.1-3.5-2.5-3.2-2.9s4.1-5.7,4.6-4.8s1.9,1.6,0.9,3.9c-1,2.3-0.9,3.2-2.2,3c-1.2-0.2-2.3-2.1-2.3-2.1
	s1.8-2.7,2.4-3.3c0.6-0.6,1.2-0.7,1.2,0.6c0,1.3-0.4,3-1,3.5c-0.7,0.5-1.3,0-1.3-0.6s1.2-2.2,1.2-2.2l0.5-0.8l-0.4,2.5l-4.2-1.8
	c0,0-6,0.7-7.8-0.2c-1.8-0.9-2.3-1.8-3.6-1.8c-1.3,0-3.4-0.8-4-0.1c-0.6,0.7-2,1.1-2.3,2.4c-0.3,1.3-1.6,2.9-0.9,3.2
	c0.7,0.3,1.1,1,3.2-0.2s3.8-1.8,5-2c1.2-0.3,5.4-0.3,6.4-0.3c1,0,3-0.2,3-0.2l-8.3-0.4c0,0-1.9-1.6-2.7-1.5s-3.1-0.1-3.1-0.1
	s-1.5,0.9-1.9,2.1c-0.4,1.1-1.7,1.9-1,2.1c0.7,0.2,2-0.7,2.8-1c0.9-0.3,3.6-1,3.9-1.3c0.3-0.3,0.8-0.7-0.4-0.7s-1.1-0.2-2.5,0.4
	c-1.4,0.7-2.5,1.2-2.5,1.2l1.9-2.1l-4.5,9.2c0,0-5.4,3.8-8.7,2.8c-3.4-1-4.9-5.6-4.8-9.5s1.5-7.1,1.5-7.1s-11.4-7.1-8.1-11.4
	c3.3-4.3,0.5-7.6,0.5-7.6s-1.3-7.5,2.1-7.8s10.1-6.2,8-6.2c-2.1,0-4.4-1.7-4-1.1c0.4,0.6-3.8,6.2-9,5.8c-5.3-0.4-10.1-5.2-12.6-5.8
	c-2.4-0.6-15.9-4.9-31.5,13.5l-5.8,7.4c0,0-3.3-8.9,0-15.1c3.3-6.2,11.3-10.6,18.4-13s18.4-3.4,22.7-3.2c4.4,0.2,8.9,7.4,11.4,6.4
	c2.4-1,5.5,3.3,5.5,3.3c0.2,0.6-3,3.8-3,3.8c-2.6,1.3-5.5,2.4-8.8,0.7c-3.3-1.7-8.2-4.7-8.2-4.7s-8.5-1.7-9.8-0.9
	c-1.3,0.8-7.5,2-7.5,2l-5.9,3.2c0,0-13.2,11.6-14.2,15.5c0,0-1.9-6.8-0.3-11.3c1.6-4.4,7.9-9,7.9-9l13.2-5.8c0,0,8.6-1.9,12.3-2.2
	c3.7-0.3,7.1-0.6,9.7,0.9c2.6,1.6,2.9,2.9,4.7,4.2c1.7,1.2,5.5,1,6.1,1.2c0.6,0.1,3,1.2,2.6,2.6c-0.4,1.4-4.8,4.1-4.8,4.1
	s-3.8,0.4-7.1-1.9c-3.2-2.3-10-4.6-11.6-4.8c-1.7-0.2-8.3,0.7-9.9,1.1c-1.5,0.4-8.4,3.7-8.4,3.7s-13.6,12.9-14,13.8s-0.6-5.7,0-7
	s6.2-8.1,7.9-9.2c1.7-1.1,11.2-4.8,11.2-4.8s12.2-3,15.2-3.1c2.9-0.1,6.9,0.6,9.4,2.9c2.4,2.3,8.1,3.5,9.3,3.8c1.2,0.2,2.4,1,1,1.9
	s-3.5,2.4-5.6,2.4s-8.3-4.5-8.3-4.5s-7.6-2.6-9.8-2.3s-7,0.9-11.1,2.6c-4,1.8-5.7,2.4-7.2,3.6c-1.5,1.2-10.3,10.8-11.3,11.1
	s0.6-5,0.6-5s3.4-4,5.8-6.4c2.3-2.3,4.6-3.5,7.6-4.5c3-1,5.4-2.3,8.3-2.8c2.9-0.5,10.9-2.2,13.8-1.8c2.9,0.4,6.8,2.8,7.8,3.5
	c1,0.8,6.7,2.6,7.5,2.9s0.1,1.6-2.1,2.2c-2.1,0.6-4-1.2-5.4-1.7c-1.3-0.6-4.3-2.5-6-3c-1.7-0.5-6.3-1.8-7.2-1.8c-0.9,0-6.9,0.1-9,1
	c-2.1,0.9-7.6,3.1-9.1,3.8c-1.4,0.7-4.3,3-6.1,4.8c-1.7,1.8-5.4,5.9-5.4,5.9s0.3-2.8,2.4-4.6c2.1-1.8,4.9-5.9,7.2-6.5
	c2.3-0.6,14.1-6.5,22.8-5.5c8.6,1,7,1.5,8.3,2.1c1.3,0.6,7.4,3.4,8,3.6c0.6,0.2-1.2,1.4-2,0.8s-1.4-1-3.1-1.7
	c-1.8-0.7-5.5-2.6-6.4-2.8c-0.9-0.2-1.7-1.3-4.3-1.1s-25.2,2-33.6,17.3l-1.6,9.7l9-1.6c2.2-2.2,10.8-9.1,13.9-10.5s10-1.8,12.5-1.1
	c2.5,0.7,9.3,5.9,9.5,5.9l0.9,3.2c0,0-6-2-7.4-3.8c-1.4-1.8-5.3-6.2-13-3.3s-12.9,10.4-14.3,11.5c0,0,7.9-2,10.7-2.9
	s12.6-1.9,14.7-2.5s2.1-0.6,2.1-0.6s0.5,0.1,0.1-1.4c-0.4-1.5-4.4-4.8-4.6-4.5c-0.3,0.3-7,3.8-7,3.8l-0.7-0.6c0,0,3.4-0.7,4.2-0.7
	c0.9,0,1,1,1,1s-4.7,1.4-5.9,1.5c-1.1,0.1-0.8-0.7-0.8-1.9s1.6-0.6,2.4-1s3.6-0.4,4.5-0.3c0.9,0.2,1,0.8,1,1.5
	c0,0.7-0.7,0.8-1.7,1.2c-0.9,0.4-5.9,1.8-6.8,1.1s-0.4-3.2-0.4-3.2s4.4-1.4,6.2-1.7s2.6,0.1,3.4,1.3c0.8,1.2,0,2.9,0,2.9
	s-7.9,2.6-9.4,1.4s-1.2-4.4-1.2-4.4c3.3-1.5,9.5-3.2,11.1-1.1c1.5,2.1,0.5,5,0.5,5s-8.6,2.1-10.3,1.7c-1.7-0.5-2.4-5.1-2.4-5.1
	l13.2,2.4l-0.9,1.6c0,0,2.9-0.8,5.6,0.1c2.7,1,6.9,1.9,6.9,1.9s-15.2,10-32.3,7.6"
        />
      </motion.svg>
    </div>
  );
}