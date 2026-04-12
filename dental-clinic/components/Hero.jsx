import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { MdVerified, MdAccessTime } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Patients" },
  { value: "15+", label: "Specializations" },
];

export default function Hero() {
  const heroRef = useRef(null);

  // ✅ Typing animation states
  const words = ["Smile", "Trust"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".hero-animate");
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

  // ✅ Typing logic
  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-16"
    >
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-primary top-[-100px] right-[-100px]" />
      <div className="blob w-[400px] h-[400px] bg-accent top-[60%] left-[-80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <div className="hero-animate inline-flex items-center gap-2 bg-softBlue text-primary text-[13px] font-semibold px-4 py-2 rounded-full mb-6 border border-primary/10"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            <MdVerified className="text-primary text-base" />
            Latur's Trusted Dental Specialists
          </div>

          {/* ✅ UPDATED HEADING ONLY */}
          <h1 className="hero-animate font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-darkText leading-[1.05] mb-6"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}>
            
            Your{" "}
            <span className="relative inline-block">
              <span className="gradient-text">
                {text}
                <span className="ml-1 animate-pulse">|</span>
              </span>

              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10 Q50 2 100 8 Q150 14 198 6"
                  stroke="#FFC107"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            ,<br />Our Priority
          </h1>

          {/* Rest of your code SAME */}
          <p className="hero-animate text-darkText/60 text-lg font-body font-light leading-relaxed mb-8 max-w-lg"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            Experience world-class dental care at Yash Super Speciality Dental Clinic in Latur. 
            From routine cleanings to advanced implants — we care for every smile with precision and warmth.
          </p>

          <div className="hero-animate flex items-center gap-2 text-[14px] text-darkText/50 mb-8"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            <MdAccessTime className="text-accent text-base" />
            Open Daily · Until <strong className="text-darkText/70">9:00 PM</strong>
          </div>

          <div className="hero-animate flex flex-wrap gap-4"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            <button onClick={scrollToContact}
              className="group btn-shimmer text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-glow flex items-center gap-2">
              Book Appointment
              <FiArrowRight />
            </button>

            <a href="tel:8806333633"
              className="group flex items-center gap-3 bg-white text-darkText font-semibold text-[15px] px-7 py-4 rounded-2xl border border-gray-100 shadow-card">
              <span className="w-9 h-9 rounded-xl bg-softBlue flex items-center justify-center">
                <FiPhone size={16} />
              </span>
              Call Now
            </a>
          </div>

          <div className="hero-animate flex gap-8 mt-12 pt-8 border-t border-gray-100"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-[13px] text-darkText/50 font-body mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE SAME (UNCHANGED) */}
        {/* keep your full existing right section exactly same */}
          {/* Right — Illustration Card */}
        <div
          className="hero-animate hidden lg:flex justify-center"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
        >
          <div className="relative w-full max-w-lg">
            {/* Floating card */}
            <div className="animate-float">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-[4/5]">
                {/* Decorative top bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-blue-400 to-accent" />

                {/* Illustration area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-softBlue via-white to-blue-50 p-8">
                  {/* Tooth SVG Illustration */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                        <ellipse cx="60" cy="30" rx="32" ry="22" fill="white" stroke="#2F80ED" strokeWidth="3"/>
                        <path d="M28 35 Q20 60 30 90 Q38 112 46 110 Q54 108 58 85 Q60 75 62 85 Q66 108 74 110 Q82 112 90 90 Q100 60 92 35" fill="white" stroke="#2F80ED" strokeWidth="3"/>
                        <path d="M44 25 Q50 20 60 22 Q70 20 76 25" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
                        <circle cx="60" cy="30" r="4" fill="#2F80ED" opacity="0.3"/>
                        <path d="M35 50 Q40 55 45 50" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                        <path d="M75 50 Q80 55 85 50" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                      </svg>
                    </div>
                    {/* Stars */}
                    <div className="absolute -top-2 -right-4 flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <BsStarFill key={i} className="text-accent text-xs" />
                      ))}
                    </div>
                  </div>

                  {/* Clinic info */}
                  <h3 className="font-display text-2xl font-bold text-darkText text-center mb-1">
                    Dr. Ashwin Kodgi
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">BDS, MDS — Dental Specialist</p>

                  <div className="w-full bg-softBlue/70 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-darkText/70">
                      <span className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xs">📍</span>
                      Gandhi Chowk, Latur
                    </div>
                    <div className="flex items-center gap-2 text-sm text-darkText/70">
                      <span className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center text-xs">⏰</span>
                      Open until 9:00 PM
                    </div>
                    <div className="flex items-center gap-2 text-sm text-darkText/70">
                      <span className="w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center text-xs">✅</span>
                      All Dental Services
                    </div>
                  </div>

                  {/* Pulse availability dot */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-600 font-medium">Accepting Appointments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-8 top-16 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-gray-50">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-xl">🦷</div>
              <div>
                <p className="text-xs text-darkText/50">Latest Technology</p>
                <p className="text-sm font-semibold text-darkText">Digital X-Ray</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-24 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-gray-50">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl">🏆</div>
              <div>
                <p className="text-xs text-darkText/50">Award Winning</p>
                <p className="text-sm font-semibold text-darkText">Best Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}