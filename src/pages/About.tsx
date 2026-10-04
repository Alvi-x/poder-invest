import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import ClosingCTA from "../sections/ClosingCTA";
import { principles } from "../data/principles";

export default function About() {
  return (
    <PageShell>
      <section className="text-white pt-40 pb-24 md:pt-52 md:pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about1.png')" }}
      >
        <div className="container-editorial">
          {/* <Eyebrow className="mb-8">About Poder</Eyebrow> */}
          <h1 className="font-display mb-30 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em] max-w-4xl">
            A disciplined view
            <br />
            of a <span className="text-gold-400 italic">long horizon.</span>
          </h1>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <div className="lg:col-span-8 space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
            <Reveal delay={0.1}>
              <p>
                Poder Investments is a South African private investment company
                deploying patient capital into businesses, energy
                infrastructure and real assets.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We invest our own capital and, where appropriate, alongside
                aligned investors — allowing us to support businesses and
                projects through the full investment cycle, without the
                pressure of a short exit timetable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24 md:py-32 text-white">
        <div className="container-editorial">
          <Reveal>
            <Eyebrow className="mb-8">Philosophy</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {principles.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.12}>
                <div className="border-t border-white/15 pt-8">
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-400 mb-5">
                    {p.label}
                  </div>
                  <p className="font-display text-xl leading-snug text-white/90">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  );
}