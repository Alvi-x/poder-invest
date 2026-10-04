import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import ImageReveal from "../components/ImageReveal";
import ClosingCTA from "../sections/ClosingCTA";
import Partners from "../sections/Partners";

export default function Partner() {
  return (
    <PageShell>
      <section
        className="text-white pt-40 pb-24 md:pt-52 md:pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Hero.png')" }}
        >
        <div className="container-editorial">
            {/* <Eyebrow className="mb-8">Partner With Us</Eyebrow> */}
            <h1 className="font-display my-13 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em] max-w-4xl">
            Capital of our own,
            <br />
            and <span className="text-gold-400 italic">capital we raise.</span>
            </h1>
        </div>
        </section>


      <section className="bg-paper py-20 md:py-28">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {[
            {
              label: "Invest with us",
              body: "Poder deploys its own capital directly and alongside aligned co-investors.",
              cta: "Partner With Us",
              href: "/contact",
            },
            {
              label: "Raise capital with us",
              body: "Where appropriate, Poder helps established businesses and project sponsors structure and source third-party capital.",
              cta: "Start a Conversation",
              href: "/contact",
            },
          ].map((path, i) => (
            <Reveal key={path.label} delay={i * 0.12}>
              <div className="bg-paper p-10 md:p-14 h-full flex flex-col">
                <Eyebrow className="mb-6">{path.label}</Eyebrow>
                <p className="font-display text-2xl md:text-3xl text-navy-950 leading-snug mb-10 max-w-md">
                  {path.body}
                </p>
                <div className="mt-auto">
                  <Button href={path.href} variant="ghost">
                    {path.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Partners />

      <section className="bg-paper-warm py-20 md:py-28">
        <div className="container-editorial">
          <ImageReveal
            src="/images/Offering.png"
            alt="South African investment team in discussion"
            className="aspect-[16/9] w-full"
          />
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  );
}