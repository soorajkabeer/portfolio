import React from "react";
import * as motion from "framer-motion/client";

const Skill = ({ name, x, y, className = "text-2xl" }) => {
  return (
    <>
      <motion.div
        className={`${className} flex items-center justify-center  text-theme-black font-body py-3 px-6 shadow-theme-black dark:shadow-theme-yellow-dark  dark:text-theme-yellow absolute`}
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
      <h2 className="page-sub-title mt-12 w-full text-theme-black dark:text-theme-white">
        From Shopify to React, design to development, I’ve got you covered.
      </h2>
      <p className="page-text text-theme-black dark:text-theme-white">
        I’m proficient in front-end technologies like React.js, Next.js, and
        jQuery, as well as eCommerce platforms like Shopify and WordPress. With
        a passion for SEO, site performance optimization, and building
        responsive, accessible websites, I stay on top of the latest industry
        trends.
      </p>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full">
        <Skill name="HTML" x="-6vw" y="0vw" className="text-5xl" />
        <Skill name="CSS" x="-5vw" y="-10vw" className="text-6xl" />
        <Skill name="JavaScript" x="18vw" y="-3vw" className="text-7xl" />
        <Skill name="React" x="6vw" y="3vw" className="text-6xl" />
        <Skill name="NodeJS" x="28vw" y="-8vw" className="text-3xl" />
        <Skill name="Shopify" x="1vw" y="10vw" className="text-8xl" />
        <Skill name="Wordpress" x="12vw" y="18vw" className="text-5xl" />
        <Skill name="JQuery" x="20vw" y="8vw" className="text-6xl" />
        <Skill name="NextJS" x="32vw" y="4vw" className="text-5xl" />
        <Skill name="Express" x="28vw" y="14vw" className="text-4xl" />
        <Skill name="Liquid" x="-12vw" y="15vw" className="text-6xl" />
        <Skill name="Excel" x="-24vw" y="12vw" className="text-4xl" />
        <Skill name="Photoshop" x="-23vw" y="-6vw" className="text-8xl" />
        <Skill name="Illustator" x="-34vw" y="-15vw" className="text-7xl" />
        <Skill name="PHP" x="-34vw" y="10vw" className="text-5xl" />
        <Skill name="Tailwind" x="-23vw" y="5vw" className="text-8xl" />
        <Skill name="Accessibility" x="19vw" y="-17vw" className="text-4xl" />
        <Skill name="SEO" x="12vw" y="-12vw" className="text-7xl" />
        <Skill name="Bootstrap" x="-15vw" y="-18vw" className="text-5xl" />
      </div>
    </>
  );
};

export default Skills;
