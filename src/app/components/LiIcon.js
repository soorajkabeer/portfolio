import React from "react";
import * as motion from "framer-motion/client";
import { useScroll } from "framer-motion";

const LiIcon = ({ referrence }) => {
  const { scrollYProgress } = useScroll({
    target: referrence,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-theme-black dark:stroke-theme-yellow">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-theme-green-dark dark:storke-theme-white stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
          className=" stroke-[5px] fill-theme-white dark:fill-theme-black"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-theme-green-dark dark:fill-theme-white"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
