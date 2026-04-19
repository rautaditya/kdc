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
    <section id="why" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f0f8ff 0%, #e6f4ff 50%, #f8fcff 100%)" }}>
      {/* Decorations */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[90px] -left-24 top-0" style={{ background: "rgba(144, 202, 249, 0.25)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[90px] right-0 bottom-0" style={{ background: "rgba(179, 229, 252, 0.2)" }} />
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage:"radial-gradient(circle, #90caf9 1px, transparent 1px)", backgroundSize:"28px 28px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border"
            style={{ background: "rgba(144, 202, 249, 0.2)", color: "#1565c0", borderColor: "rgba(144, 202, 249, 0.5)" }}>
            ⭐ Why Choose Us
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#0d47a1" }}>
            Why Patients in Latur{" "}
            <span style={{ background:"linear-gradient(135deg,#FFC107,#FFD54F)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Trust Us
            </span>
          </h2>
          <p className="reveal text-[17px] max-w-xl mx-auto leading-relaxed" style={{ color: "#5c7fa8" }}>
            Over 5000 happy smiles don't lie. Here's what makes Yash Dental Clinic different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <div key={r.title}
              className="reveal group rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                border: "1px solid rgba(144, 202, 249, 0.4)",
                backdropFilter: "blur(8px)",
                transitionDelay:`${i*70}ms`,
                boxShadow: "0 2px 16px rgba(144, 202, 249, 0.15)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                e.currentTarget.style.borderColor = "rgba(66, 165, 245, 0.6)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(144, 202, 249, 0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                e.currentTarget.style.borderColor = "rgba(144, 202, 249, 0.4)";
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(144, 202, 249, 0.15)";
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, #e3f2fd, #bbdefb)" }}>
                {r.icon}
              </div>
              <h3 className="font-display text-[18px] font-semibold mb-2" style={{ color: "#0d47a1" }}>{r.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#5c7fa8" }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-14 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(227,242,253,0.9) 0%, rgba(187,222,251,0.7) 100%)",
            border: "1px solid rgba(144, 202, 249, 0.5)",
            boxShadow: "0 4px 24px rgba(144, 202, 249, 0.2)"
          }}>
          <div>
            <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "#0d47a1" }}>Ready for a better smile?</h3>
            <p className="text-[15px]" style={{ color: "#5c7fa8" }}>Book your free consultation today — no commitment needed.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}
              className="btn-shimmer font-semibold px-6 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 text-[14px]"
              style={{ background: "linear-gradient(135deg, #1976d2, #42a5f5)", color: "#ffffff", boxShadow: "0 4px 16px rgba(25, 118, 210, 0.35)" }}>
              Book Now
            </button>
            <a href="tel:8806333633"
              className="font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-[14px]"
              style={{
                background: "rgba(255,255,255,0.8)",
                color: "#1565c0",
                border: "1px solid rgba(144, 202, 249, 0.6)"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ffffff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.8)"; }}
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}