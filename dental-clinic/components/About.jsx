import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary right-[-100px] top-[40%]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Clinic Photo + Overlaid Cards ── */}
        <div className="reveal relative">
          <div className="rounded-3xl overflow-hidden shadow-card border border-white relative h-[440px]">
            <img
              src={`https://plus.unsplash.com/premium_photo-1661776242582-0bb7c580e37e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Yash Super Speciality Dental Clinic interior at Gandhi Chowk Latur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Est. badge */}
          <div className="absolute top-4 left-4 bg-primary text-white rounded-2xl px-5 py-3 shadow-lg">
            <p className="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Est.</p>
            <p className="font-display text-3xl font-bold leading-none">2014</p>
            <p className="text-white/70 text-[11px] mt-1">Trusted Since 10+ Years</p>
          </div>

          {/* Mission + Vision */}
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-sm">🎯</div>
                <h3 className="font-bold text-darkText text-[12px]">Our Mission</h3>
              </div>
              <p className="text-darkText/60 text-[11px] leading-relaxed">
                Delivering advanced, affordable dental treatments to every patient in Latur with precision and compassion.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center text-sm">👁️</div>
                <h3 className="font-bold text-darkText text-[12px]">Our Vision</h3>
              </div>
              <p className="text-darkText/60 text-[11px] leading-relaxed">
                To be Marathwada's leading super-speciality dental clinic — setting the gold standard for oral healthcare.
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: SEO Text Content ── */}
        <div>
        
          {/* SEO: keyword-rich badge */}
         <div className="reveal flex items-center gap-2 flex-wrap mb-4">
  <div className="inline-flex items-center bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full border border-primary/10">
    About Us
  </div>
  <div className="inline-flex items-center bg-primary text-white text-[12px] font-semibold px-4 py-2 rounded-full">
    Best Dental Clinic in Latur
  </div>
</div>

          {/* SEO: H2 with primary keyword */}
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-6 leading-tight">
            Latur's Most Trusted <span className="gradient-text">Super-Speciality Dental Clinic</span>
          </h2>

          {/* SEO: keyword-rich description paragraphs */}
          <p className="reveal text-darkText/60 text-[16px] leading-relaxed mb-4">
            <strong className="text-darkText font-semibold">Yash Super Speciality Dental Clinic</strong> is
            Latur's premier dental care centre, conveniently located at Vyapari Dharmshala Complex,
            Gandhi Chowk, Latur — right beside Kamdar Petrol Pump. We offer a full range of dental
            treatments under one roof, from routine check-ups to complex oral surgeries.
          </p>
          <p className="reveal text-darkText/60 text-[16px] leading-relaxed mb-8">
            Serving the Marathwada region since 2014, our clinic combines cutting-edge dental technology
            with compassionate patient care. Whether you need <strong className="text-darkText font-medium">teeth whitening,
            dental implants, orthodontics, or root canal treatment in Latur</strong> — our expert
            team is here to give you the healthiest smile possible.
          </p>

          {/* Stats */}
          <div className="reveal grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "10+",   label: "Years Serving Latur" },
              { value: "5000+", label: "Happy Patients" },
              { value: "15+",   label: "Dental Treatments" },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-card">
                <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-[11px] text-darkText/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Feature highlights — SEO keyword-aware labels */}
          <div className="reveal grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: "🏥", text: "Modern Dental Infrastructure" },
              { icon: "🧪", text: "Digital X-Ray & OPG in Latur" },
              { icon: "🩺", text: "All Dental Specialities Under One Roof" },
              { icon: "🧼", text: "ISO-Grade Sterilisation Protocols" },
              { icon: "💰", text: "Affordable Dental Care in Latur" },
              { icon: "📅", text: "Easy Online Appointment Booking" },
            ].map(h => (
              <div key={h.text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-50 shadow-card">
                <span className="text-lg">{h.icon}</span>
                <span className="text-[13px] font-medium text-darkText/80">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Clinic Photo Gallery ── */}
      <div className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
           {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    label: "Reception Area",
    alt: "Dental clinic reception at Yash Dental Latur"
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    label: "Treatment Room",
    alt: "Advanced dental treatment room in Latur"
  },
  {
    src: "https://images.unsplash.com/photo-1652549210729-68bbd206ae3e?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Digital X-Ray Unit",
    alt: "Digital X-ray and OPG machine at Yash Dental Clinic Latur"
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    label: "Sterilisation Room",
    alt: "Sterilisation room at best dental clinic in Latur"
  },  
          ].map(img => (
            <div key={img.label} className="rounded-2xl overflow-hidden shadow-card relative group h-28">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[11px] text-center py-1 font-medium">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}