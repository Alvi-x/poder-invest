import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import ImageReveal from "./ImageReveal";
import ClosingCTA from "../sections/ClosingCTA";
import PageShell from "./PageShell";
import type { Sector } from "../data/sectors";

type Props = {
  sector: Sector;
  considerations: string[];
};

export default function SectorPage({ sector, considerations }: Props) {
  return (
    <PageShell>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-950 text-white">
        <img
          src={sector.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        <div className="relative z-10 container-editorial pb-20 pt-40">
          <Eyebrow className="mb-6">{sector.label}</Eyebrow>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] mb-6">
            {sector.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            {sector.description}
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Thesis</Eyebrow>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="font-display text-2xl md:text-3xl leading-snug text-navy-950 max-w-3xl">
                {sector.thesis}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>How we partner</Eyebrow>
          </Reveal>
          <div className="lg:col-span-8">
            <ul className="space-y-6">
              {considerations.map((c, i) => (
                <Reveal key={c} delay={i * 0.08}>
                  <li className="flex gap-6 border-t border-line pt-6">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-gold-500 pt-1">
                      0{i + 1}
                    </span>
                    <span className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                      {c}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  );
}