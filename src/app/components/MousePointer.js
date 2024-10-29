"use client";
import React, { useEffect, useState } from "react";
import { useSpring, motion, useMotionValue } from "framer-motion";

const MousePointer = () => {
  //using the useMotionValue hook to track cursor point
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  //a state to identify if hover on an element
  const [isHovered, setIsHovered] = useState(false);

  //using useEffects to fetch the changes and read cursor points
  useEffect(() => {
    const moveCursor = (e) => {
      //subscrating 16 from cursor point values to make the point center
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    //to handle mouse enter funtion to read mouse enter in a, p, headings and button
    const handleMouseEnter = (e) => {
      if (e.target.matches("a, p, h1, h2, h3, h4, h5, button")) {
        setIsHovered(true);
      }
    };
    //to handle mouse exit for the same elements as above
    const handleMouseLeave = (e) => {
      if (e.target.matches("a, p, h1, h2, h3, h4, h5, button")) {
        setIsHovered(false);
      }
    };
    //adding event listerner for movemove, mouseenter and mouseleave
    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter, true);
    document.body.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  //using useSpring from framer motion to handle a sprint effect
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    <motion.div
      className={`fixed left-0 top-0 ${
        isHovered ? "h-8 w-8 " : "h-4 w-4 "
      } rounded-full mix-blend-difference z-50 bg-theme-white pointer-events-none transition-[height,width] duration-300 ease-in-out`}
      style={{
        // width: isHovered ? 16 : 8,
        // height: isHovered ? 16 : 8,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      // animate={{
      //   scale: isHovered ? 1.5 : 1,
      // }}
      transition={{
        scale: { duration: 0.2, ease: "easeInOut" }, // Apply easeInOut for smooth entry and exit
        width: { duration: 0.2, ease: "easeInOut" },
        height: { duration: 0.2, ease: "easeInOut" },
      }}
    ></motion.div>
  );
};

export default MousePointer;
