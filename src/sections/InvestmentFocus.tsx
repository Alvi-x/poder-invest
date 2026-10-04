import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import ImageReveal from "../components/ImageReveal";
import { sectors } from "../data/sectors";
import { EASE_EDITORIAL } from "../lib/motion";

export default function InvestmentFocus() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Investment Focus</Eyebrow>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-navy-950 mb-6">
                Three sectors with
                <br />
                structural demand.
              </h2>
              <p className="text-slate-600 max-w-2xl text-lg leading-relaxed mb-6">
                We focus on manufacturing, energy and property — three sectors
                with strong fundamentals and long-term growth drivers in South
                Africa.
              </p>
              <Link
                to="/focus"
                className="group inline-flex items-center gap-2 eyebrow hover:text-gold-400 transition-colors"
              >
                View all sectors
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.article
              key={sector.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE_EDITORIAL }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/focus/${sector.slug}`} className="block">
                <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-navy-900">
                  <ImageReveal
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 w-full h-full"
                    imgClassName="group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                  />
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-3">
                  {sector.label}
                </div>
                <h3 className="font-display text-2xl text-navy-950 mb-3">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {sector.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-navy-950 group-hover:text-gold-500 transition-colors">
                  Learn more
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="mt-4 block h-px bg-line group-hover:bg-gold-500 transition-colors duration-500" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}