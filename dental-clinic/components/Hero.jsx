import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".hero-animate");
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

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
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #2F80ED 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            className="hero-animate inline-flex items-center gap-2 bg-softBlue text-primary text-[13px] font-semibold px-4 py-2 rounded-full mb-6 border border-primary/10"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            <MdVerified className="text-primary text-base" />
            Latur's Trusted Dental Specialists
          </div>

          {/* Heading */}
          <h1
            className="hero-animate font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-darkText leading-[1.05] mb-6"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
          >
            Your{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Smile</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

          {/* Subtext */}
          <p
            className="hero-animate text-darkText/60 text-lg font-body font-light leading-relaxed mb-8 max-w-lg"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            Experience world-class dental care at Yash Super Speciality Dental Clinic in Latur. 
            From routine cleanings to advanced implants — we care for every smile with precision and warmth.
          </p>

          {/* Hours badge */}
          <div
            className="hero-animate flex items-center gap-2 text-[14px] text-darkText/50 mb-8"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            <MdAccessTime className="text-accent text-base" />
            Open Daily · Until <strong className="text-darkText/70">9:00 PM</strong>
          </div>

          {/* CTAs */}
          <div
            className="hero-animate flex flex-wrap gap-4"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            <button
              onClick={scrollToContact}
              className="group btn-shimmer text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-glow hover:shadow-[0_8px_32px_rgba(47,128,237,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Book Appointment
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="tel:8806333633"
              className="group flex items-center gap-3 bg-white text-darkText font-semibold text-[15px] px-7 py-4 rounded-2xl border border-gray-100 shadow-card hover:shadow-cardHover hover:border-primary/20 hover:scale-105 transition-all duration-300"
            >
              <span className="w-9 h-9 rounded-xl bg-softBlue flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FiPhone size={16} />
              </span>
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-animate flex gap-8 mt-12 pt-8 border-t border-gray-100"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-[13px] text-darkText/50 font-body mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

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

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80 L0 50 Q360 0 720 40 Q1080 80 1440 20 L1440 80 Z" fill="#EAF4FB" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}

// import { useEffect, useRef } from "react";
// import { FiArrowRight, FiPhone } from "react-icons/fi";
// import { MdVerified, MdAccessTime } from "react-icons/md";
// import { BsStarFill } from "react-icons/bs";

// export default function Hero() {
//   const heroRef = useRef(null);
//   useEffect(() => {
//     heroRef.current?.querySelectorAll(".ha").forEach((el, i) => {
//       setTimeout(() => { el.style.opacity="1"; el.style.transform="translateY(0)"; }, i*130);
//     });
//   }, []);
//   const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior:"smooth" });

//   return (
//     <section id="home" ref={heroRef}
//       className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20 pb-0">
//       <div className="blob w-[700px] h-[700px] bg-primary top-[-200px] right-[-150px]" />
//       <div className="blob w-[400px] h-[400px] bg-accent top-[65%] left-[-120px]" />
//       <div className="absolute inset-0 opacity-[0.03]"
//         style={{ backgroundImage:"radial-gradient(circle,#2F80ED 1px,transparent 1px)", backgroundSize:"30px 30px" }} />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           {/* LEFT */}
//           <div>
//             <div className="ha inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-5 border border-primary/10"
//               style={{opacity:0,transform:"translateY(20px)",transition:"all 0.6s ease"}}>
//               <MdVerified className="text-base" />Latur's Most Trusted Dental Clinic
//             </div>

//             <h1 className="ha font-display text-5xl sm:text-6xl lg:text-[66px] font-bold text-darkText leading-[1.06] mb-5"
//               style={{opacity:0,transform:"translateY(28px)",transition:"all 0.65s ease"}}>
//               Best{" "}
//               <span className="relative inline-block">
//                 <span className="gradient-text">Dental Clinic</span>
//                 <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 260 12" fill="none">
//                   <path d="M2 10 Q65 2 130 8 Q195 14 258 5" stroke="#FFC107" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
//                 </svg>
//               </span>
//               <br />in Latur
//             </h1>

//             <p className="ha text-darkText/60 text-[17px] font-body leading-relaxed mb-5 max-w-lg"
//               style={{opacity:0,transform:"translateY(20px)",transition:"all 0.6s ease"}}>
//               Expert care from Dr. Ashwin Kodgi & Dr. Shruti Kodgi at Yash Super Speciality Dental Clinic, Gandhi Chowk, Latur. 
//               Painless treatment. Advanced technology. 5000+ happy smiles.
//             </p>

//             <div className="ha flex items-center gap-3 text-[13px] text-darkText/50 mb-7"
//               style={{opacity:0,transform:"translateY(18px)",transition:"all 0.6s ease"}}>
//               <MdAccessTime className="text-accent" />
//               Open Daily · Until <strong className="text-darkText/70 ml-1">9:00 PM</strong>
//               <span className="mx-1.5 text-gray-200">|</span>
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//               </span>
//               <span className="text-green-600 font-semibold">Accepting Patients</span>
//             </div>

//             <div className="ha flex flex-wrap gap-4 mb-8"
//               style={{opacity:0,transform:"translateY(20px)",transition:"all 0.6s ease"}}>
//               <button onClick={() => scrollTo("#contact")}
//                 className="group btn-shimmer text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-glow hover:shadow-[0_8px_40px_rgba(47,128,237,0.45)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
//                 Book Appointment <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </button>
//               <a href="tel:8806333633"
//                 className="group flex items-center gap-3 bg-white text-darkText font-semibold text-[15px] px-6 py-4 rounded-2xl border border-gray-100 shadow-card hover:shadow-cardHover hover:border-primary/20 hover:scale-105 transition-all duration-300">
//                 <span className="w-9 h-9 rounded-xl bg-softBlue flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                   <FiPhone size={16} />
//                 </span>
//                 88063 33633
//               </a>
//             </div>

//             <div className="ha flex items-center gap-3 mb-10"
//               style={{opacity:0,transform:"translateY(16px)",transition:"all 0.6s ease"}}>
//               <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><BsStarFill key={i} className="text-accent text-sm"/>)}</div>
//               <span className="text-[13px] text-darkText/60"><strong className="text-darkText">4.9/5</strong> · 500+ Google Reviews</span>
//             </div>

//             <div className="ha flex flex-wrap gap-7 pt-7 border-t border-gray-100"
//               style={{opacity:0,transform:"translateY(20px)",transition:"all 0.6s ease"}}>
//               {[{v:"10+",l:"Years Experience",ic:"🏆"},{v:"5000+",l:"Happy Patients",ic:"😊"},{v:"15+",l:"Treatments",ic:"🦷"}].map(s=>(
//                 <div key={s.l} className="flex items-center gap-3">
//                   <span className="text-2xl">{s.ic}</span>
//                   <div>
//                     <p className="font-display text-2xl font-bold gradient-text leading-none">{s.v}</p>
//                     <p className="text-[12px] text-darkText/50 font-body mt-0.5">{s.l}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="ha hidden lg:flex justify-center"
//             style={{opacity:0,transform:"translateY(30px)",transition:"all 0.7s ease"}}>
//             <div className="relative w-full max-w-[430px]">
//               <div className="animate-float">
//                 <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden" style={{aspectRatio:"4/5"}}>
//                   <div className="h-1.5 w-full bg-gradient-to-r from-primary via-blue-400 to-accent" />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-softBlue via-white to-blue-50 p-8 pt-10">
//                     <div className="relative mb-5">
//                       <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
//                         <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
//                           <ellipse cx="60" cy="30" rx="32" ry="22" fill="white" stroke="#2F80ED" strokeWidth="3"/>
//                           <path d="M28 35 Q20 60 30 90 Q38 112 46 110 Q54 108 58 85 Q60 75 62 85 Q66 108 74 110 Q82 112 90 90 Q100 60 92 35" fill="white" stroke="#2F80ED" strokeWidth="3"/>
//                           <path d="M44 25 Q50 20 60 22 Q70 20 76 25" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
//                           <circle cx="60" cy="30" r="4" fill="#2F80ED" opacity="0.3"/>
//                         </svg>
//                       </div>
//                       <div className="absolute -top-1 -right-4 flex gap-0.5">{[1,2,3,4,5].map(i=><BsStarFill key={i} className="text-accent text-xs"/>)}</div>
//                     </div>
//                     <h3 className="font-display text-xl font-bold text-darkText text-center mb-0.5">Dr. Ashwin Kodgi</h3>
//                     <p className="text-primary text-[13px] font-medium mb-0.5">BDS, MDS — Chief Dental Surgeon</p>
//                     <p className="text-darkText/40 text-[12px] mb-5">& Dr. Shruti A. Kodgi, BDS</p>
//                     <div className="w-full bg-softBlue/70 rounded-2xl p-4 space-y-2.5">
//                       {[{icon:"📍",text:"Gandhi Chowk, Latur"},{icon:"⏰",text:"Open until 9:00 PM"},{icon:"✅",text:"All Dental Specialities"},{icon:"📞",text:"88063 33633"}].map(item=>(
//                         <div key={item.text} className="flex items-center gap-2 text-[13px] text-darkText/70">
//                           <span className="w-6 h-6 rounded-lg bg-white/80 flex items-center justify-center text-xs flex-shrink-0">{item.icon}</span>
//                           {item.text}
//                         </div>
//                       ))}
//                     </div>
//                     <div className="mt-4 flex items-center gap-2">
//                       <span className="relative flex h-2.5 w-2.5">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//                       </span>
//                       <span className="text-xs text-green-600 font-semibold">Accepting Appointments Now</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -left-10 top-14 bg-white rounded-2xl shadow-cardHover px-4 py-3 flex items-center gap-3 border border-gray-50">
//                 <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🔬</div>
//                 <div>
//                   <p className="text-[11px] text-darkText/40">Latest Tech</p>
//                   <p className="text-[13px] font-semibold text-darkText">Digital X-Ray</p>
//                 </div>
//               </div>
//               <div className="absolute -right-8 bottom-20 bg-white rounded-2xl shadow-cardHover px-4 py-3 flex items-center gap-3 border border-gray-50">
//                 <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-xl">🏆</div>
//                 <div>
//                   <p className="text-[11px] text-darkText/40">Award Winning</p>
//                   <p className="text-[13px] font-semibold text-darkText">Best Clinic</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Wave */}
//       <div className="absolute bottom-0 left-0 right-0 z-10">
//         <svg viewBox="0 0 1440 90" fill="none" className="w-full block">
//           <path d="M0 90 L0 55 Q360 5 720 45 Q1080 85 1440 25 L1440 90 Z" fill="white"/>
//         </svg>
//       </div>
//     </section>
//   );
// }