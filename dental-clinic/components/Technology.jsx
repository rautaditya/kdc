import { useEffect, useRef } from "react";

const TECH = [
  { icon:"🔭", title:"Digital OPG X-Ray", desc:"Full-mouth panoramic X-ray for comprehensive diagnosis with 70% less radiation than conventional X-rays.", badge:"Latest" },
  { icon:"⚡", title:"Rotary Endodontics", desc:"Computer-controlled root canal files for faster, more precise, and completely painless root canal procedures.", badge:"Advanced" },
  { icon:"💡", title:"LED Teeth Whitening", desc:"Clinically proven LED-accelerated whitening system for results up to 8 shades brighter in one session.", badge:"Pro" },
  { icon:"🛡️", title:"Autoclave Sterilisation", desc:"Class B hospital-grade autoclave ensures every instrument is 100% sterilised before use. Zero cross-infection risk.", badge:"Hospital Grade" },
  { icon:"🎯", title:"3D Treatment Planning", desc:"Advanced imaging and digital planning tools to map out precise implant and orthodontic treatment before we begin.", badge:"Precision" },
  { icon:"💊", title:"Painless Anaesthesia", desc:"Ultra-fine needles and buffered anaesthetic agents for a completely painless injection experience every time.", badge:"Comfort" },
];

export default function Technology() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="technology" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-primary right-[-120px] top-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
            🔬 Our Technology
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
            Advanced <span className="gradient-text">Dental Technology</span>
          </h2>
          <p className="reveal text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
            We invest in the latest dental technology so you get the safest, fastest, most comfortable treatment possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH.map((t, i) => (
            <div key={t.title}
              className="reveal group bg-white rounded-2xl p-6 shadow-card border border-gray-50 hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay:`${i*70}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-13 h-13 w-12 h-12 bg-softBlue rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {t.icon}
                </div>
                <span className="bg-primary/10 text-primary text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {t.badge}
                </span>
              </div>
              <h3 className="font-display text-[17px] font-semibold text-darkText mb-2 group-hover:text-primary transition-colors">{t.title}</h3>
              <p className="text-darkText/55 text-[13px] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}