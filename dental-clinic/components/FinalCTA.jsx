import { useEffect, useRef } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function FinalCTA() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.15 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal relative bg-gradient-to-br from-primary via-blue-600 to-primaryDark rounded-3xl px-8 py-16 text-center overflow-hidden shadow-[0_20px_80px_rgba(47,128,237,0.35)]">
          {/* Background details */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"24px 24px" }} />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-accent/20 blur-xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-[12px] font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              🦷 Take the First Step
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Book Your Appointment<br />
              <span style={{ color:"#FFC107" }}>Today</span>
            </h2>
            <p className="text-white/70 text-[17px] max-w-xl mx-auto leading-relaxed mb-10">
              Don't wait for tooth pain to become a bigger problem. The best time to visit a dentist is now. 
              Open until 9 PM daily — we fit around your schedule.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}
                className="group flex items-center gap-2 bg-white text-primary font-bold text-[15px] px-8 py-4 rounded-2xl hover:bg-accent hover:text-darkText shadow-xl hover:shadow-[0_8px_32px_rgba(255,193,7,0.5)] hover:scale-105 transition-all duration-300">
                Book Appointment Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:8806333633"
                className="flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white font-semibold text-[15px] px-8 py-4 rounded-2xl border border-white/25 hover:border-white/40 transition-all duration-300">
                <FiPhone />88063 33633
              </a>
            </div>
            <p className="text-white/40 text-[13px] mt-8">
              📍 Gandhi Chowk, Latur · ⏰ Open Daily 9 AM – 9 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}