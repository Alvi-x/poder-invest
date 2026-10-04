import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_EDITORIAL } from "../lib/motion";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
    >
      {children}
    </motion.div>
  );
}