import { useState } from "react";
import { motion } from "motion/react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
// import { EASE_EDITORIAL } from "../lib/motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <PageShell>
      <section className="text-white pt-40 pb-20 md:pt-52 md:pb-28 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/contact.png')" }}>
        <div className="container-editorial">
          {/* <Eyebrow className="mb-8">Contact</Eyebrow> */}
          <h1 className="font-display my-15 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em] max-w-4xl">
            Tell us what
            <br />
            you are <span className="text-gold-400 italic">building.</span>
          </h1>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow className="mb-6">Send an enquiry</Eyebrow>
              <p className="text-slate-500 leading-relaxed max-w-sm">
                We review every enquiry and respond within [X] business days.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gold-500/40 bg-paper-warm p-10 md:p-14"
                >
                  <Eyebrow className="mb-4">Enquiry received</Eyebrow>
                  <p className="font-display text-2xl text-navy-950 mb-3">
                    Thank you. We will be in touch shortly.
                  </p>
                  <p className="text-slate-500 text-sm">
                    A member of the Poder team will review your submission.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <input type="text" name="_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Name" name="name" required />
                    <Field label="Company / Project" name="company" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>

                  <div>
                    <label htmlFor="nature" className="eyebrow block mb-3">
                      Nature of Enquiry
                    </label>
                    <select
                      id="nature"
                      name="nature"
                      required
                      className="w-full bg-transparent border-b border-line py-3 text-navy-950 focus:border-gold-500 outline-none transition-colors"
                    >
                      <option value="">Select…</option>
                      <option>Operator</option>
                      <option>Developer</option>
                      <option>Entrepreneur</option>
                      <option>Co-investor</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="eyebrow block mb-3">
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={500}
                      required
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="w-full bg-transparent border-b border-line py-3 text-navy-950 focus:border-gold-500 outline-none transition-colors resize-none"
                      placeholder="A short summary of the business or project, the capital you are looking for, and where it stands today."
                    />
                    <div className="text-right text-xs font-mono text-slate-400 mt-2">
                      {charCount} / 500
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <Button type="submit" variant="primary">
                      {status === "submitting" ? "Sending…" : "Send Enquiry"}
                    </Button>
                    <p className="text-xs text-slate-400 font-mono">
                      We treat all enquiries in confidence.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-line py-3 text-navy-950 focus:border-gold-500 outline-none transition-colors"
      />
    </div>
  );
}