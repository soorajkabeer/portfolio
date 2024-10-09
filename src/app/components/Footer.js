import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="font-primary flex justify-between py-6 px-11 text-3xl">
      <p>© 2024 SOORAJ KABEER</p>
      <SocialIcons
        className="grid gap-2 grid-cols-6 justify-center w-full max-w-80"
        border={true}
      />
    </footer>
  );
};

export default Footer;
