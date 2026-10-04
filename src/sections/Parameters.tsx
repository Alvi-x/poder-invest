import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import ParallaxImage from "../components/ParallaxImage";
import { parameters } from "../data/parameters";
import { EASE_EDITORIAL } from "../lib/motion";

export default function Parameters() {
  return (
    <section className="bg-paper-alt">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[720px] overflow-hidden">
          <ParallaxImage
            src="/images/parameters.png"
            alt="South African landscape with infrastructure"
            className="absolute inset-0 w-full h-full"
            range={40}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-14 text-white">
            <Eyebrow className="mb-5">Investment Parameters</Eyebrow>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] max-w-md mb-6">
              Whether you
              <br />
              should call us.
            </h2>
            <p className="text-white/75 text-sm md:text-base max-w-md mb-8">
              If your business or project fits these parameters, we would like
              to hear from you.
            </p>
            <Button href="/contact" variant="primary" className="self-start">
              Start a Conversation
            </Button>
          </div>
        </div>

        <div className="flex items-center py-16 md:py-24">
          <div className="container-editorial w-full">
            <div className="max-w-xl">
              <ul className="divide-y divide-line">
                {parameters.map((p, i) => (
                  <motion.li
                    key={p.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_EDITORIAL }}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 group"
                  >
                    <div className="sm:col-span-5 font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500 group-hover:text-gold-500 transition-colors">
                      {p.label}
                    </div>
                    <div className="sm:col-span-7">
                      <div className="text-navy-950 text-sm md:text-base">{p.value}</div>
                      {p.note && (
                        <div className="text-xs text-slate-400 mt-1 italic">({p.note})</div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}