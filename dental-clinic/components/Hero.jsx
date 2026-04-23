import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { MdVerified, MdAccessTime } from "react-icons/md";

const STATS = [
  { icon: "⭐", value: "10+", label: "Years Experience" },
  { icon: "😊", value: "5000+", label: "Happy Patients" },
  { icon: "🦷", value: "15+", label: "Specializations" },
];

const FEATURES = [
  { icon: "🏆", title: "Award Winning", sub: "Best Dental Clinic" },
  { icon: "📡", title: "Latest Technology", sub: "Digital X-Ray" },
  { icon: "👨‍⚕️", title: "Experienced", sub: "Specialists" },
];

export default function Hero() {
  const heroRef = useRef(null);

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
      className="relative min-h-screen flex items-center bg-white pt-24 pb-0"
      style={{ overflow: "hidden" }}
    >
      {/* Soft blue right panel */}
      <div
        className="absolute top-0 right-0 h-full w-[55%] rounded-bl-[80px]"
        style={{ background: "linear-gradient(135deg, #deeeff 0%, #eaf4ff 60%, #f0f8ff 100%)" }}
      />

      {/* Subtle wave bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <path
          d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 L0 80 Z"
          fill="#e8f3fc"
          opacity="0.5"
        />
      </svg>

      {/* ── Main layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex items-stretch min-h-screen">

        {/* ─── LEFT — text content ─── */}
        <div className="w-full lg:w-[46%] flex flex-col justify-center py-16 pr-4 lg:pr-8 z-20">

          <div
            className="hero-animate inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[13px] font-semibold px-4 py-2 rounded-full mb-6 border border-blue-100 w-fit"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            <MdVerified className="text-blue-500 text-base" />
            Latur's Trusted Dental Specialists
          </div>

          <h1
            className="hero-animate font-bold text-[#0f1e3d] leading-[1.08] mb-6"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.6s ease",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontFamily: "'Georgia', serif",
            }}
          >
            Your{" "}
            <span className="relative inline-block">
              <span style={{ color: "#2F80ED" }}>
                {text}
                <span className="animate-pulse" style={{ color: "#2F80ED" }}>|</span>
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 10" fill="none">
                <path
                  d="M2 8 Q50 2 100 6 Q150 10 198 4"
                  stroke="#FFC107"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            ,<br />
            Our Priority
          </h1>

          <p
            className="hero-animate text-gray-500 text-[1.05rem] leading-relaxed mb-6 max-w-md"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            Experience world-class dental care at Yash Super Speciality Dental Clinic in Latur.
            From routine cleanings to advanced implants — we care for every smile with precision and warmth.
          </p>

          <div
            className="hero-animate flex items-center gap-2 text-[13px] text-gray-400 mb-8"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            <MdAccessTime className="text-yellow-500 text-base" />
            Open Daily · Until <strong className="text-gray-600 ml-1">9:00 PM</strong>
          </div>

          <div
            className="hero-animate flex flex-wrap gap-4"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-lg"
              style={{ background: "linear-gradient(135deg, #2F80ED, #56CCF2)" }}
            >
              Book Appointment
              <FiArrowRight />
            </button>

            <a
              href="tel:8806333633"
              className="flex items-center gap-3 bg-white text-gray-800 font-semibold text-[15px] px-7 py-4 rounded-2xl border border-gray-100 shadow-md"
            >
              <span className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <FiPhone size={16} className="text-blue-500" />
              </span>
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-animate flex gap-8 mt-10 pt-8 border-t border-gray-100"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-bold text-2xl" style={{ color: "#2F80ED" }}>{s.value}</p>
                  <p className="text-[12px] text-gray-400 mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT — info cards + doctor image ─── */}
        <div className="hidden lg:block relative w-[54%]" style={{ minHeight: "100vh" }}>

          {/* Doctor name + feature cards — top area */}
          <div
            className="hero-animate absolute z-20 text-left"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
              top: "50%",
              left: "6%",
              marginTop: "-260px",
            }}
          >
            <h3
              className="font-bold text-[#0f1e3d] leading-tight"
              style={{ fontFamily: "'Georgia', serif", fontSize: "1.6rem" }}
            >
              Dr. Ashwin Kodgi
            </h3>
            <p className="text-blue-500 text-sm font-medium mt-1 mb-6">
              BDS, MDS — Dental Specialist
            </p>

            <div className="flex gap-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl shadow-md px-3 py-3 flex flex-col items-center gap-1 border border-gray-50"
                  style={{ minWidth: "105px" }}
                >
                  <span className="text-2xl">{f.icon}</span>
                  <p className="text-[12px] font-bold text-gray-800 text-center leading-tight">{f.title}</p>
                  <p className="text-[11px] text-gray-400 text-center">{f.sub}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-[13px] text-green-600 font-semibold">
                Accepting Appointments
              </span>
            </div>
          </div>

          {/* Doctor image — bottom anchored, right side, clipped inside section */}
          <div
            className="hero-animate absolute z-10"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.6s ease",
              bottom: 0,
              right: 0,
              left: "30%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <img
              src="/images/doctor.png"
              alt="Dr Ashwin Kodgi"
              style={{
                height: "88vh",
                width: "auto",
                maxWidth: "none",
                objectFit: "contain",
                objectPosition: "bottom",
                display: "block",
                filter: "drop-shadow(0 10px 40px rgba(47,128,237,0.12))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}