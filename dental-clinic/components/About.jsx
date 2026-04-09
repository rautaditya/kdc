// import { useEffect, useRef } from "react";
// import { MdVerified } from "react-icons/md";
// import { BsStarFill } from "react-icons/bs";

// const HIGHLIGHTS = [
//   { icon: "🎓", text: "MDS Qualified Specialists" },
//   { icon: "💉", text: "Painless Treatment Protocols" },
//   { icon: "🏥", text: "Modern Sterilized Equipment" },
//   { icon: "❤️", text: "Compassionate Patient Care" },
// ];

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("visible");
//         });
//       },
//       { threshold: 0.1 }
//     );
//     sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
//       <div className="blob w-[400px] h-[400px] bg-primary right-[-100px] top-[50%]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left — Visual */}
//         <div className="reveal relative">
//           <div className="relative bg-gradient-to-br from-softBlue to-white rounded-3xl p-8 shadow-card border border-white overflow-hidden">
//             {/* Pattern */}
//             <div
//               className="absolute inset-0 opacity-[0.04]"
//               style={{
//                 backgroundImage: `repeating-linear-gradient(45deg, #2F80ED 0, #2F80ED 1px, transparent 0, transparent 50%)`,
//                 backgroundSize: "16px 16px",
//               }}
//             />

//             {/* Doctor avatar area */}
//             <div className="relative z-10 flex flex-col items-center text-center">
//               {/* Avatar placeholder */}
//               <div className="relative mb-6">
//                 <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-blue-300 flex items-center justify-center shadow-glow text-7xl">
//                   👨‍⚕️
//                 </div>
//                 <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
//                   <MdVerified className="text-primary text-xl" />
//                 </div>
//               </div>

//               <h3 className="font-display text-2xl font-bold text-darkText">Dr. Ashwin Kodgi</h3>
//               <p className="text-primary text-sm font-medium mt-1 mb-1">BDS, MDS</p>
//               <p className="text-darkText/50 text-sm mb-4">Chief Dental Surgeon</p>

//               <div className="flex gap-1 mb-6">
//                 {[1,2,3,4,5].map(i => <BsStarFill key={i} className="text-accent" />)}
//               </div>

//               {/* Dr. Shruti */}
//               <div className="w-full bg-white/70 rounded-2xl p-4 flex items-center gap-4 border border-blue-50">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center text-2xl shadow">
//                   👩‍⚕️
//                 </div>
//                 <div className="text-left">
//                   <p className="font-semibold text-darkText text-sm">Dr. Shruti A. Kodgi</p>
//                   <p className="text-darkText/50 text-xs">BDS — Associate Dental Surgeon</p>
//                 </div>
//                 <div className="ml-auto">
//                   <MdVerified className="text-purple-400 text-lg" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Floating experience badge */}
//           <div className="absolute -left-6 -bottom-4 bg-white rounded-2xl shadow-cardHover p-4 border border-gray-50 flex items-center gap-3">
//             <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
//               <span className="text-2xl">🏆</span>
//             </div>
//             <div>
//               <p className="font-display text-2xl font-bold text-darkText leading-none">10+</p>
//               <p className="text-xs text-darkText/50 mt-0.5">Years of Excellence</p>
//             </div>
//           </div>
//         </div>

//         {/* Right — Content */}
//         <div>
//           <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[13px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
//             About Us
//           </div>

//           <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-6 leading-tight">
//             Dedicated to Your{" "}
//             <span className="gradient-text">Oral Health</span>
//           </h2>

//           <p className="reveal text-darkText/60 text-[16px] font-body leading-relaxed mb-4">
//             Yash Super Speciality Dental Clinic, led by Dr. Ashwin Kodgi and Dr. Shruti Kodgi, has been providing 
//             exceptional dental care to the people of Latur for over a decade.
//           </p>
//           <p className="reveal text-darkText/60 text-[16px] font-body leading-relaxed mb-8">
//             Located at Gandhi Chowk in the heart of Latur, our clinic combines cutting-edge dental technology 
//             with a warm, patient-first approach. Every treatment is tailored to your unique needs — because your 
//             smile deserves nothing less than the best.
//           </p>

//           {/* Highlights */}
//           <div className="reveal grid sm:grid-cols-2 gap-4 mb-8">
//             {HIGHLIGHTS.map((h) => (
//               <div key={h.text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-50 shadow-card">
//                 <span className="text-xl">{h.icon}</span>
//                 <span className="text-[14px] font-medium text-darkText/80">{h.text}</span>
//               </div>
//             ))}
//           </div>

//           <div className="reveal">
//             <button
//               onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
//               className="btn-shimmer text-white font-semibold px-7 py-3.5 rounded-2xl shadow-glow hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
//             >
//               Meet Our Team
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary right-[-100px] top-[40%]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left visual */}
        <div className="reveal relative">
          <div className="bg-gradient-to-br from-softBlue to-white rounded-3xl p-8 border border-white shadow-card relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage:"repeating-linear-gradient(45deg,#2F80ED 0,#2F80ED 1px,transparent 0,transparent 50%)", backgroundSize:"14px 14px" }} />
            <div className="relative z-10 space-y-4">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl">🎯</div>
                  <h3 className="font-display font-bold text-darkText text-lg">Our Mission</h3>
                </div>
                <p className="text-darkText/60 text-[14px] leading-relaxed">
                  To provide affordable, world-class dental care to every family in Latur with compassion, precision, and advanced technology.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-xl">👁️</div>
                  <h3 className="font-display font-bold text-darkText text-lg">Our Vision</h3>
                </div>
                <p className="text-darkText/60 text-[14px] leading-relaxed">
                  To be Latur's most trusted super-speciality dental clinic — where every patient leaves with a healthier, more confident smile.
                </p>
              </div>
              {/* Established */}
              <div className="bg-gradient-to-br from-primary to-primaryDark rounded-2xl p-5 text-white">
                <p className="text-white/60 text-[12px] font-semibold uppercase tracking-wider mb-1">Established</p>
                <p className="font-display text-4xl font-bold">2014</p>
                <p className="text-white/70 text-[13px] mt-1">Serving Latur for 10+ years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
            About Us
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-6 leading-tight">
            A Clinic Built on <span className="gradient-text">Trust & Care</span>
          </h2>
          <p className="reveal text-darkText/60 text-[16px] leading-relaxed mb-4">
            Yash Super Speciality Dental Clinic is Latur's most advanced dental care centre, located at Vyapari Dharmshala Complex, Gandhi Chowk, Latur — just beside Kamdar Petrol Pump.
          </p>
          <p className="reveal text-darkText/60 text-[16px] leading-relaxed mb-8">
            Founded by Dr. Ashwin Kodgi with a vision to bring super-speciality dental care to every corner of Marathwada, our clinic has grown to become a benchmark for quality, hygiene, and patient comfort in the region.
          </p>

          <div className="reveal grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon:"🏥", text:"State-of-the-art infrastructure" },
              { icon:"🧪", text:"Digital X-ray & OPG available" },
              { icon:"🩺", text:"All specialities under one roof" },
              { icon:"🧼", text:"Strict sterilisation protocols" },
              { icon:"💰", text:"Affordable, transparent pricing" },
              { icon:"📅", text:"Flexible appointment slots" },
            ].map(h => (
              <div key={h.text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-50 shadow-card">
                <span className="text-lg">{h.icon}</span>
                <span className="text-[13px] font-medium text-darkText/80">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}