"use client";
import React, { useEffect } from "react";
import { useSpring, motion, useMotionValue } from "framer-motion";

const MousePointer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    <motion.div
      className="fixed left-0 top-0 w-8 h-8 rounded-2xl mix-blend-difference z-50 bg-theme-white pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    ></motion.div>
  );
};

export default MousePointer;
