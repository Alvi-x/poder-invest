import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import ImageReveal from "../components/ImageReveal";
import { principles } from "../data/principles";
import { EASE_EDITORIAL } from "../lib/motion";

export default function Approach() {
  return (
    <section id="approach" className="bg-navy-950 py-24 md:py-32 text-white">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow className="mb-8">Approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] tracking-[-0.02em] mb-8">
                Patient capital.
                <br />
                Active partnership.
                <br />
                <span className="text-gold-400 italic">Disciplined allocation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-12">
                We invest our own capital and, where appropriate, alongside
                aligned investors. Because we are not driven by a short exit
                timetable, we can support businesses and projects through the
                full investment cycle.
              </p>
            </Reveal>

            <div className="space-y-px">
              {principles.map((pr, i) => (
                <motion.div
                  key={pr.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: EASE_EDITORIAL }}
                  className="border-t border-white/10 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-400">
                    {pr.label}
                  </div>
                  <div className="sm:col-span-2 text-white/70 text-sm leading-relaxed">
                    {pr.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ImageReveal
              src="/images/approach.png"
              alt="South African energy engineers reviewing operations"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}