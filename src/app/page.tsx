"use client";

import { useState, useRef } from "react";

type Step = "qualify" | "details" | "done";

export default function Home() {
  const [step, setStep] = useState<Step>("qualify");
  const [selected, setSelected] = useState<"A" | "B" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [muted, setMuted] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleQualify = (choice: "A" | "B") => {
    setSelected(choice);
    setTimeout(() => setStep("details"), 280);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStep("done");
  };

  return (
    <div className="bg-vignette min-h-screen flex flex-col">
      <section className="relative flex flex-col items-center px-4 pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="mb-8 md:mb-10 animate-fade-in">
          <div className="flex items-center gap-2 rounded-md bg-black/80 px-3 py-1.5 border border-white/10">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-gradient-to-br from-[#7a1f2b] to-[#3d0e16]">
              <span className="text-[11px] font-bold tracking-tight text-white">F</span>
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">FOUNDABLE</span>
          </div>
        </div>

        <h1 className="max-w-4xl text-center text-[1.85rem] leading-[1.2] font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.18] lg:text-[3.15rem] animate-fade-in-up">
          Where High-Ticket Founders At{" "}
          <span className="highlight-pill">$100k/mo+</span>
          <br className="hidden sm:block" />{" "}
          Plan Their Move To{" "}
          <span className="highlight-pill">8 Figures/yr</span>
        </h1>

        <p className="mt-5 text-center text-[15px] text-zinc-300 md:text-base animate-fade-in">
          Must be doing $100k/mo to qualify
        </p>

        <button onClick={scrollToForm} className="mt-4 text-[15px] font-medium text-[#e11d48] hover:text-[#fb7185] transition-colors animate-fade-in">
          Here&apos;s how it works for you ↓
        </button>

        <div className="relative mt-8 w-full max-w-[860px] animate-fade-in-up">
          <div className="video-frame relative aspect-video w-full">
            <div className="absolute inset-0 grid-overlay opacity-60" />
            <div className="absolute inset-0 flex flex-wrap content-start gap-2 p-3 opacity-40">
              {["$7k → $40k/m", "I&apos;ll tell you everything", "$120k/m", "Think Bigger", "$25K → $120K", "In 6 months", "$0 → $20k/m", "$75k/m Ops"].map((t, i) => (
                <div key={i} className="rounded bg-zinc-800/80 px-2 py-1 text-[10px] text-zinc-300">{t}</div>
              ))}
            </div>

            <button type="button" onClick={() => setMuted((m) => !m)} className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/35">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-black/40 backdrop-blur-sm">
                {muted ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                )}
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white drop-shadow md:text-xl">Your Video Is Playing</p>
                <p className="mt-1 text-sm text-white/90">{muted ? "Click To Unmute" : "Click To Pause"}</p>
              </div>
            </button>

            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-12 text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-white/90 md:text-base">To Six Figures</p>
              <p className="text-xl font-extrabold uppercase tracking-tight text-fuchsia-400 md:text-2xl">A Month And Beyond</p>
            </div>
          </div>
        </div>

        <div className="cta-pill mt-8 max-w-xl px-5 py-3.5 text-center text-[14px] leading-relaxed text-zinc-200 md:text-[15px] animate-fade-in">
          The private operating system for service founders ready to scale.{" "}
          <span className="text-amber-300 font-medium">Book a private demo</span>{" "}
          below to see if you qualify.
        </div>

        <button onClick={scrollToForm} className="apply-btn mt-8 text-xl text-white md:text-2xl tracking-wide animate-fade-in">
          BOOK A PRIVATE DEMO ↓
        </button>
      </section>

      <section ref={formRef} className="flex flex-col items-center px-4 pb-16 pt-4">
        <div className="form-card w-full max-w-[440px] overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#7a1f2b] via-[#a605df] to-[#7a1f2b]" />
          <div className="px-6 py-8 md:px-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#3d0e16] to-[#1a0508]">
                <span className="text-sm font-bold text-white">F</span>
              </div>
            </div>

            {step === "qualify" && (
              <div>
                <h2 className="mb-6 text-center text-[1.15rem] font-semibold leading-snug text-[#4c1d95] md:text-xl">
                  What best describes where you are right now?
                  <span className="text-rose-500">*</span>
                </h2>
                <div className="flex flex-col gap-3">
                  <button type="button" onClick={() => handleQualify("A")} className={`option-btn flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3.5 text-left text-[15px] font-medium text-zinc-900 ${selected === "A" ? "selected" : ""}`}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-700 shadow-sm">A</span>
                    I haven&apos;t started my business yet
                  </button>
                  <button type="button" onClick={() => handleQualify("B")} className={`option-btn flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3.5 text-left text-[15px] font-medium text-zinc-900 ${selected === "B" ? "selected" : ""}`}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-700 shadow-sm">B</span>
                    I run a service business and I want to scale it
                  </button>
                </div>
              </div>
            )}

            {step === "details" && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="mb-2 text-center text-[1.15rem] font-semibold text-[#4c1d95] md:text-xl">
                  Almost there — where should we send the demo link?
                </h2>
                <p className="mb-4 text-center text-sm text-zinc-500">Private demos only. No public calendar.</p>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700">Full name <span className="text-rose-500">*</span></label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-[15px] text-zinc-900 outline-none focus:border-[#7a1f2b] focus:ring-2 focus:ring-[#7a1f2b]/20" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700">Work email <span className="text-rose-500">*</span></label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-[15px] text-zinc-900 outline-none focus:border-[#7a1f2b] focus:ring-2 focus:ring-[#7a1f2b]/20" placeholder="you@company.com" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-[#7a1f2b] py-3 text-[15px] font-semibold text-white transition hover:bg-[#5c1520]">
                  Request Private Demo
                </button>
              </form>
            )}

            {step === "done" && (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 className="text-xl font-semibold text-zinc-900">Request received</h2>
                <p className="mt-2 text-sm text-zinc-600">If you qualify, you&apos;ll hear from us within one business day with a private demo slot.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-white/5 px-4 py-8 text-center">
        <p className="text-[12px] text-zinc-500">
          © 2026 Foundable. All rights reserved. •{" "}
          <a href="#" className="underline hover:text-zinc-300">Privacy Policy</a>
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-relaxed text-zinc-600">
          Results vary by market and individual implementation. Foundable does not guarantee future performance. This website is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way.
        </p>
      </footer>
    </div>
  );
}
