import React from "react";
import * as motion from "framer-motion/client";
import { useScroll } from "framer-motion";

const LiIcon = ({ referrence }) => {
  const { scrollYProgress } = useScroll({
    target: referrence,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-theme-black">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-theme-yellow-dark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
          className=" stroke-[5px] fill-theme-white"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-theme-yellow-dark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
