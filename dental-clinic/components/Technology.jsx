import { useEffect, useRef } from "react";

const TECH = [
  {
    icon: "🔭",
    title: "Digital OPG X-Ray",
    desc: "Full-mouth panoramic X-ray for accurate diagnosis with lower radiation exposure and faster imaging.",
    image: "/images/technology/opg-xray.jpg",
  },
  {
    icon: "⚡",
    title: "Rotary Endodontics",
    desc: "Modern root canal technology for faster, safer, and more precise treatment with better patient comfort.",
    image: "/images/technology/rotary-endodontics.jpg",
  },
  {
    icon: "💡",
    title: "LED Teeth Whitening",
    desc: "Advanced whitening system designed to brighten teeth efficiently and deliver visible results quickly.",
    image: "/images/technology/teeth-whitening.jpg",
  },
  {
    icon: "🛡️",
    title: "Autoclave Sterilisation",
    desc: "Hospital-grade sterilisation system that keeps every instrument fully disinfected and safe for use.",
    image: "/images/technology/autoclave.jpg",
  },
  {
    icon: "🎯",
    title: "3D Treatment Planning",
    desc: "Digital planning tools help us design precise treatments for implants, aligners, and smile correction.",
    image: "/images/technology/treatment-planning.jpg",
  },
  {
    icon: "💊",
    title: "Painless Anaesthesia",
    desc: "Comfort-focused anaesthesia methods that reduce pain and make injections much easier for patients.",
    image: "/images/technology/painless-anaesthesia.jpg",
  },
];

export default function Technology() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );

    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="technology"
      ref={ref}
      className="py-24 bg-[#f7f7fb] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-primary text-[13px] font-semibold uppercase tracking-[0.2em] mb-4">
              <span className="text-lg">🔬</span> Our Technology
            </div>

            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText max-w-3xl leading-tight">
              Advanced dental technology designed for safer and smarter care
            </h2>
          </div>

          <div className="reveal">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              View More
              <span className="text-xl">+</span>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH.map((t, i) => (
            <div
              key={t.title}
              className="reveal group bg-white rounded-[32px] p-7 border border-[#ececf3] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl shadow-sm">
                  {t.icon}
                </div>

                <button className="text-primary text-3xl leading-none group-hover:translate-x-1 transition-transform duration-300">
                  →
                </button>
              </div>

              <h3 className="text-[26px] font-semibold text-darkText mb-4 leading-snug">
                {t.title}
              </h3>

              <div className="w-full h-px bg-gray-200 mb-5"></div>

              <p className="text-darkText/60 text-[15px] leading-7 mb-6">
                {t.desc}
              </p>

              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-[210px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}