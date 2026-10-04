import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Button from "../components/Button";
import { EASE_EDITORIAL } from "../lib/motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      <motion.div
        style={{ y: bgY }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_EDITORIAL }}
        className="absolute inset-0"
      >
        <img
          src="/images/Hero.png"
          alt="Johannesburg skyline at dusk with South African business leaders"
          className="w-full h-full object-cover object-[70%_center]"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

      {/* Contour lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldLine" x1="0" x2="1">
            <stop offset="0%" stopColor="#B9965A" stopOpacity="0" />
            <stop offset="50%" stopColor="#B9965A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B9965A" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M 100 200 C 400 100, 700 300, 1000 200 S 1300 300, 1400 250",
          "M 100 400 C 400 300, 700 500, 1000 400 S 1300 500, 1400 450",
          "M 100 600 C 400 500, 700 700, 1000 600 S 1300 700, 1400 650",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.6 + i * 0.2, ease: EASE_EDITORIAL }}
          />
        ))}
      </svg>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 container-editorial w-full pt-32 pb-20"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE_EDITORIAL }}
            className="eyebrow mb-8"
          >
            Investment Company · Johannesburg, South Africa
          </motion.p>

          <h1 className="font-display text-white text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.02em] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE_EDITORIAL }}
              className="block"
            >
              Capital that
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EASE_EDITORIAL }}
              className="block"
            >
              stays the <span className="text-gold-400 italic">course.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3, ease: EASE_EDITORIAL }}
            className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Poder Investments deploys patient private capital into South African
            businesses, energy infrastructure and real assets. We partner with
            experienced operators, developers and entrepreneurs where we see a
            clear opportunity to build enduring value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6, ease: EASE_EDITORIAL }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
            <Button href="/focus" variant="secondary">
              See Our Investment Focus
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}