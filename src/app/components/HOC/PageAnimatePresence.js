"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageAnimatePresence = ({ children }) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ minHeight: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimatePresence;
