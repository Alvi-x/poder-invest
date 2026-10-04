import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { EASE_EDITORIAL } from "../lib/motion";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, y = 24, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}