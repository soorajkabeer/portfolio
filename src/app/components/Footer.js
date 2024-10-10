import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="font-primary flex justify-between py-6 px-11 text-3xl">
      <p>© {year} SOORAJ KABEER. Antrim, NI</p>
      <SocialIcons
        className="grid gap-2 grid-cols-6 justify-center w-full max-w-80"
        border={true}
        iconClassName="fill-theme-black"
      />
    </footer>
  );
};

export default Footer;
