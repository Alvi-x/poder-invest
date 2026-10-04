import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { EASE_EDITORIAL } from "../lib/motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: "none" | "navy" | "navy-soft";
};

export default function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "100vw",
  overlay = "none",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(8% 8% 8% 8%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
        transition={{ duration: 1.1, ease: EASE_EDITORIAL }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.4, ease: EASE_EDITORIAL }}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      </motion.div>

      {overlay === "navy" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
      )}
      {overlay === "navy-soft" && (
        <div className="pointer-events-none absolute inset-0 bg-navy-950/30" />
      )}
    </div>
  );
}