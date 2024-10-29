"use client";
import React, { useEffect, useState } from "react";
import { useSpring, motion, useMotionValue } from "framer-motion";

const MousePointer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches("a, p, h1, h2, h3, h4, h5, button")) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches("a, p, h1, h2, h3, h4, h5, button")) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter, true);
    document.body.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    <motion.div
      className="fixed left-0 top-0 rounded-full mix-blend-difference z-50 bg-theme-white pointer-events-none"
      style={{
        width: isHovered ? 16 : 8,
        height: isHovered ? 16 : 8,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{
        scale: { duration: 0.2, ease: "easeInOut" }, // Apply easeInOut for smooth entry and exit
        width: { duration: 0.2, ease: "easeInOut" },
        height: { duration: 0.2, ease: "easeInOut" },
      }}
    ></motion.div>
  );
};

export default MousePointer;
