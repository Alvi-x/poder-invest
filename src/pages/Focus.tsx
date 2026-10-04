import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import ImageReveal from "../components/ImageReveal";
import ClosingCTA from "../sections/ClosingCTA";
import { sectors } from "../data/sectors";

export default function Focus() {
  return (
    <PageShell>
      <section
        className="text-white pt-40 pb-24 md:pt-52 md:pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Business card.png')" }}
        >
        <div className="container-editorial">
            {/* <Eyebrow className="mb-8">Investment Focus</Eyebrow> */}
            <h1 className="font-display my-13 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em] max-w-4xl">
            Three sectors with
            <br />
            <span className="text-gold-400 italic">structural demand.</span>
            </h1>
        </div>
        </section>


      {sectors.map((s, i) => (
        <section
          key={s.slug}
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-paper" : "bg-paper-warm"}`}
        >
          <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <ImageReveal
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <Reveal>
                <Eyebrow className="mb-6">{s.label}</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-navy-950 mb-6">
                  {s.title}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-lg">
                  {s.description}
                </p>
                <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                  {s.thesis}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link
                  to={`/focus/${s.slug}`}
                  className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-navy-950 hover:text-gold-500 transition-colors"
                >
                  Explore {s.title}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <ClosingCTA />
    </PageShell>
  );
}