"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import MousePointer from "../ui/MousePointer";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="w-full min-h-screen bg-theme-white dark:bg-theme-black grid grid-cols-1 justify-between">
      <div className="wave-bg">
        <div className="theme-change h-full flex flex-col justify-between">
          <NavBar />
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ minHeight: "100%" }}
          >
            {children}
          </motion.div>
          <Footer />
          <MousePointer />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
