import { useEffect, useRef } from "react";

const REASONS = [
  { icon:"👨‍⚕️", title:"Expert Doctors", desc:"Dr. Ashwin Kodgi (MDS) and Dr. Shruti Kodgi — highly qualified specialists with 10+ years combined experience." },
  { icon:"💰", title:"Affordable Pricing", desc:"World-class dental treatment at transparent, honest prices. EMI options available. No hidden charges." },
  { icon:"🔬", title:"Advanced Technology", desc:"Digital X-Ray, OPG, Rotary Endodontics, and the latest sterilisation equipment for safe, precise care." },
  { icon:"🧼", title:"5-Star Hygiene", desc:"Hospital-grade sterilisation. Every instrument is autoclaved. Disposable materials used for every patient." },
  { icon:"😌", title:"Painless Treatment", desc:"Modern anaesthesia and gentle techniques ensure a completely comfortable, anxiety-free experience." },
  { icon:"⏰", title:"Open Until 9 PM", desc:"Flexible timings including evenings and weekends — because your schedule matters to us." },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why" ref={ref} className="py-24 bg-darkText relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[90px] -left-24 top-0" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/8 blur-[90px] right-0 bottom-0" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-white/10 text-white/80 text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-white/10">
            ⭐ Why Choose Us
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Patients in Latur{" "}
            <span style={{ background:"linear-gradient(135deg,#FFC107,#FFD54F)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Trust Us
            </span>
          </h2>
          <p className="reveal text-white/50 text-[17px] max-w-xl mx-auto leading-relaxed">
            Over 5000 happy smiles don't lie. Here's what makes Yash Dental Clinic different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <div key={r.title}
              className="reveal group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{ transitionDelay:`${i*70}ms` }}>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="font-display text-[18px] font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-white/50 text-[14px] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-14 bg-gradient-to-r from-primary/20 to-accent/10 border border-white/10 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">Ready for a better smile?</h3>
            <p className="text-white/50 text-[15px]">Book your free consultation today — no commitment needed.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}
              className="btn-shimmer text-white font-semibold px-6 py-3.5 rounded-xl shadow-glow hover:scale-105 transition-all duration-300 text-[14px]">
              Book Now
            </button>
            <a href="tel:8806333633"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-[14px] border border-white/10">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}