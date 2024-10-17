import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sooraj Kabeer's Portfolio",
  description:
    "Portfolio website build using React, Next.js , TailwindCSS and Framer motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen bg-theme-white dark:bg-theme-black grid grid-cols-1 justify-between">
          <div className="wave-bg">
            <div className="h-full flex flex-col justify-between">
              <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
