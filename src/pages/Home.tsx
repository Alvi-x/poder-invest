import { motion } from "motion/react";
import Hero from "../sections/Hero";
import Partners from "../sections/Partners";
import Approach from "../sections/Approach";
import InvestmentFocus from "../sections/InvestmentFocus";
import Parameters from "../sections/Parameters";
import ClosingCTA from "../sections/ClosingCTA";
import { EASE_EDITORIAL } from "../lib/motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
    >
      <Hero />
      <Partners />
      <Approach />
      <InvestmentFocus />
      <Parameters />
      <ClosingCTA />
    </motion.div>
  );
}