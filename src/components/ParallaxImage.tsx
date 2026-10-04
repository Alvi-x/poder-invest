import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  range?: number;
};

export default function ParallaxImage({
  src,
  alt,
  className = "",
  range = 30,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -range, reduce ? 0 : range]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
    </div>
  );
}