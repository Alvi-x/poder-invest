import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";

export default function ClosingCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-navy-950"
    >
      <motion.img
        style={{ y }}
        src="/images/closingCTA.png"
        alt="South African landscape at golden hour"
        loading="lazy"
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/50" />

      <div className="relative z-10 container-editorial py-24">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow className="mb-6">Let's Build What's Next</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] text-white tracking-[-0.02em] mb-8">
              Tell us what
              <br />
              you are building.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-10">
              Send a short summary of the business or project, the capital you
              are looking for, and where it stands today.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button to="/contact" variant="primary">
              Start a Conversation
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}