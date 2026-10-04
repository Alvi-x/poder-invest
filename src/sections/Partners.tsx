import { motion } from "motion/react";
import { Building2, HardHat, UserCheck, Handshake } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import { partners } from "../data/partners";
import { EASE_EDITORIAL } from "../lib/motion";

const iconMap = { Building2, HardHat, UserCheck, Handshake };

export default function Partners() {
  return (
    <section className="bg-paper-warm py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Partner With Us</Eyebrow>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-navy-950 mb-6">
                Built for the long term.
              </h2>
              <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
                We look for established businesses and projects with strong
                underlying economics, experienced leadership, and a clear
                opportunity for long-term growth.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {partners.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_EDITORIAL }}
                whileHover={{ y: -4 }}
                className="group bg-paper-warm p-8 md:p-10 relative transition-colors"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-transparent group-hover:bg-gold-500 transition-colors duration-500" />
                <div className="flex items-start justify-between mb-10">
                  <Icon
                    size={26}
                    strokeWidth={1.4}
                    className="text-navy-950 group-hover:text-gold-500 transition-colors duration-500"
                  />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-navy-950 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}