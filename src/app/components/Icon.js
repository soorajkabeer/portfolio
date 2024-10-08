import * as React from "react";

export const LinkedinIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M255.5 256h-50.8v-88.9c0-24.4-10.8-38-30.1-38-21 0-33.5 14.2-33.5 38V256H90.4V90.9h50.8v18.6s15.9-28 51.9-28c35.9 0 62.5 21.9 62.5 67.3V256h-.1zM32.5 64.5c-17.1 0-31-14-31-31.3C1.5 16 15.4 2 32.5 2s31 14 31 31.2c0 17.3-13.9 31.3-31 31.3zM1.5 256H65V90.9H1.5V256z" />
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      d="M128 198.1c38.6 0 69.8-31.3 69.8-69.8 0-38.6-31.3-69.8-69.8-69.8-38.6 0-69.8 31.3-69.8 69.8s31.2 69.8 69.8 69.8zm0-23.3c25.7 0 46.5-20.8 46.5-46.5S153.7 81.8 128 81.8s-46.5 20.8-46.5 46.5c0 25.6 20.8 46.5 46.5 46.5z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#1d1d1d",
      }}
    />
    <path
      d="M197.8 46.8c-6.4 0-11.6 5.2-11.6 11.6S191.4 70 197.8 70s11.6-5.2 11.6-11.6-5.2-11.6-11.6-11.6z"
      style={{
        fill: "#1d1d1d",
      }}
    />
    <path
      d="M7.6 38.4C0 53.3 0 72.8 0 111.9v32.6c0 39.1 0 58.7 7.6 73.6 6.7 13.1 17.4 23.8 30.5 30.5 14.9 7.6 34.5 7.6 73.6 7.6h32.6c39.1 0 58.7 0 73.6-7.6 13.1-6.7 23.8-17.4 30.5-30.5 7.6-14.9 7.6-34.5 7.6-73.6v-32.6c0-39.1 0-58.7-7.6-73.6-6.7-13.1-17.4-23.8-30.5-30.5C203 .2 183.4.2 144.3.2h-32.6C72.6.2 53 .2 38.1 7.8 25 14.5 14.3 25.2 7.6 38.4zm136.7-14.9h-32.6c-19.9 0-33.5 0-44 .9-10.2.8-15.4 2.3-19.1 4.2-8.7 4.4-15.8 11.6-20.3 20.3-1.9 3.6-3.4 8.9-4.2 19.1-.9 10.5-.9 24-.9 44v32.6c0 19.9 0 33.5.9 44 .8 10.2 2.3 15.4 4.2 19.1 4.5 8.8 11.6 15.9 20.3 20.3 3.6 1.9 8.9 3.4 19.1 4.2 10.5.9 24 .9 44 .9h32.6c19.9 0 33.5 0 44-.9 10.2-.8 15.4-2.3 19.1-4.2 8.8-4.5 15.9-11.6 20.3-20.3 1.9-3.6 3.4-8.9 4.2-19.1.9-10.5.9-24 .9-44V112c0-19.9 0-33.5-.9-44-.8-10.2-2.3-15.4-4.2-19.1-4.5-8.8-11.6-15.9-20.3-20.3-3.6-1.9-8.9-3.4-19.1-4.2-10.5-.9-24.1-.9-44-.9z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#1d1d1d",
      }}
    />
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M128 0c70.7 0 128 58.8 128 131.2 0 58-36.6 107.1-87.5 124.5-6.5 1.3-8.8-2.8-8.8-6.3 0-4.3.2-18.5.2-36 0-12.2-4.1-20.2-8.7-24.3 28.5-3.2 58.5-14.4 58.5-64.8 0-14.3-5-26-13.2-35.2 1.3-3.3 5.7-16.7-1.3-34.7 0 0-10.7-3.5-35.2 13.5-10.2-2.9-21.2-4.4-32.1-4.4-10.9 0-21.8 1.5-32 4.4-24.5-17-35.2-13.5-35.2-13.5-7 18.1-2.6 31.4-1.2 34.7-8.2 9.2-13.2 20.9-13.2 35.2 0 50.3 29.9 61.5 58.3 64.9-3.7 3.3-7 9.1-8.1 17.5-7.3 3.4-25.8 9.2-37.2-10.9 0 0-6.8-12.6-19.6-13.5 0 0-12.5-.2-.9 8 0 0 8.4 4 14.2 19.2 0 0 7.5 23.4 43.1 15.5.1 11 .2 21.3.2 24.4 0 3.5-2.4 7.5-8.7 6.3C36.7 238.4.1 189.2.1 131.2 0 58.8 57.3 0 128 0" />
  </svg>
);

export const FacebookIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M128 93.8v29.7h53.2l-5.8 47.5H128v85H65v-85.1H32.1v-47.5H65V87.5c0-17.8-1.3-26.2 6.2-39.9s28.8-31.9 65.7-31.5c36.8.5 52.4 4 52.4 4l-8 50.6s-23.5-6.2-35.1-4C134.6 68.9 128 76 128 93.8z" />
  </svg>
);

export const EmailIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 320.3 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M272.2 0H48C21.6 0 0 21.6 0 48v160.1c0 26.5 21.6 48 48 48h224.2c26.5 0 48-21.6 48-48V48c.1-26.4-21.5-48-48-48zM48 32h224.2c2.9 0 5.7.8 8 2.1-.5.3-1.1.7-1.6 1.1l-99.3 74.5c-11.3 8.5-27.1 8.5-38.4 0L41.6 35.2c-.5-.4-1.1-.7-1.6-1.1 2.4-1.3 5.1-2.1 8-2.1zm240.3 176.2c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V68.1l89.7 67.3c11.2 8.4 24.5 12.8 38.4 12.8s27.3-4.4 38.4-12.8l89.7-67.3.1 140.1z" />
  </svg>
);

export const BehanceIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 397.4 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M254.8 42.4h99.9V13.8h-99.9v28.6zM304 99.8c-22.3 0-39.2 13.8-40.8 39.3h79.9c-5.4-30.2-18.8-39.3-39.1-39.3zm3.1 118.3c20.6 0 35.7-13 38.7-23.9h43.3c-12.4 39.6-37.9 61.8-83.8 61.8-58.5 0-91.4-41.6-91.4-96.8 0-130 187.6-134.7 178.2 12.1H263.2c1.3 29.8 13.6 46.8 43.9 46.8zm-194.6-5.7c23.6 0 40.1-9.1 40.1-33.6 0-25.4-14.6-36.4-39.1-36.4H54.3v70h58.2zm-3.1-108.3c19.6 0 33.2-9.1 33.2-30.4 0-22.4-15.8-29.3-37.4-29.3H54.3v59.7h55.1zM116.3.8c46.5 0 78.9 15.4 78.9 63.2 0 23.7-9.5 41.4-33.6 53.3 30.8 9.1 45.3 33.1 45.3 64.7 0 50.1-39.7 74-87.2 74H0V.8h116.3z" />
  </svg>
);