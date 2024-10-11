import React from "react";
import * as motion from "framer-motion/client";

const Skill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center  bg-theme-black text-theme-white py-3 px-6 shadow-theme-black absolute"
        whileHover={{ scale: 1.05 }}
        initail={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
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
        <Skill name="HTML" x="-12vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="18vw" y="-3vw" />
        <Skill name="NodeJS" x="28vw" y="-8vw" />
        <Skill name="Shopify" x="3vw" y="10vw" />
        <Skill name="Wordpress" x="12vw" y="18vw" />
        <Skill name="JQuery" x="20vw" y="8vw" />
        <Skill name="NextJS" x="32vw" y="4vw" />
        <Skill name="Express" x="28vw" y="14vw" />
        <Skill name="Liquid" x="-12vw" y="15vw" />
        <Skill name="Photoshop" x="-23vw" y="-6vw" />
        <Skill name="Illustator" x="-34vw" y="-10vw" />
        <Skill name="PHP" x="-34vw" y="8vw" />
        <Skill name="Tailwind" x="-23vw" y="5vw" />
        <Skill name="Accessibility" x="19vw" y="-17vw" />
        <Skill name="SEO" x="12vw" y="-12vw" />
        <Skill name="Bootstrap" x="-15vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
