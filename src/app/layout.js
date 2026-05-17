import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./components/HOC/ClientLayout";
import { Analytics } from "@vercel/analytics/react";

const bebasNeue = localFont({
  src: [{ path: "../../public//fonts/BebasNeue.ttf" }],
  variable: "--font-bebas",
  weight: "400",
});
const redHatDisplay = localFont({
  src: [{ path: "../../public/fonts/RedHatDisplay.ttf" }],
  variable: "--font-red-hat",
  weight: "100, 300, 400,600, 900",
});

export const metadata = {
  title: "Sooraj Kabeer | Front-End Developer & Shopify Expert",
  description:
    "Discover Sooraj Kabeer, a front-end developer and full-stack Shopify expert with over 7 years of experience in creating seamless digital solutions. Explore my work in React, Next.js, and custom Shopify development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${redHatDisplay.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
