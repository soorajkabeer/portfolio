import React from "react";
import * as motion from "framer-motion/client";

const Skill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center  bg-theme-black text-theme-white py-3 px-6 shadow-theme-black absolute"
        whileHover={{ scale: 1.05 }}
        initail={{ x: 0, y: 0 }}
        animate={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
      >
        {name}
      </motion.div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="page-sub-title mt-32 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full bg-theme-black text-theme-white p-8 shadow-theme-black"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-14vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="18vw" y="-3vw" />
        <Skill name="Shopify" x="-6vw" y="10vw" />
        <Skill name="Wordpress" x="10vw" y="16vw" />
        <Skill name="React" x="-15vw" y="-10vw" />
        <Skill name="Liquid" x="-18vw" y="13vw" />
        <Skill name="Nodejs" x="-30vw" y="-6vw" />
        <Skill name="Nextjs" x="14vw" y="-17vw" />
        <Skill name="SEO" x="18vw" y="-10vw" />
        <Skill name="Accessability" x="-15vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
