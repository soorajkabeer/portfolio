"use client";
import dynamic from "next/dynamic";

const PageAnimatePresence = dynamic(() => import("./PageAnimatePresence"), {
  ssr: false,
});

export default function ClientPageAnimatePresence({ children }) {
  return <PageAnimatePresence>{children}</PageAnimatePresence>;
}
