// import { useState, useEffect, useRef } from "react";
// import { BsStarFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";

// const TESTIMONIALS = [
//   {
//     name: "Priya Sharma",
//     location: "Latur",
//     avatar: "👩",
//     rating: 5,
//     review:
//       "Dr. Ashwin Kodgi did my root canal treatment and I was completely pain-free throughout. The clinic is spotlessly clean and the staff is so welcoming. Best dental clinic in Latur!",
//     treatment: "Root Canal",
//   },
//   {
//     name: "Rahul Desai",
//     location: "Gulbarga",
//     avatar: "👨",
//     rating: 5,
//     review:
//       "Got dental implants done here after years of hesitation. The result is absolutely natural-looking and the procedure was explained step-by-step. Dr. Kodgi is truly a specialist.",
//     treatment: "Dental Implants",
//   },
//   {
//     name: "Anita Patil",
//     location: "Latur",
//     avatar: "👩‍🦱",
//     rating: 5,
//     review:
//       "My daughter's braces treatment has been going perfectly under Dr. Shruti. Both doctors are very gentle with kids and always patient with our questions. Highly recommend!",
//     treatment: "Orthodontics",
//   },
//   {
//     name: "Vijay Kulkarni",
//     location: "Osmanabad",
//     avatar: "🧔",
//     rating: 5,
//     review:
//       "I was terrified of dentists, but the team at Yash Dental made me completely comfortable. Professional, hygienic, and truly painless experience. Changed my view completely!",
//     treatment: "Teeth Cleaning",
//   },
//   {
//     name: "Snehal More",
//     location: "Latur",
//     avatar: "👩‍🦰",
//     rating: 5,
//     review:
//       "The teeth whitening results are stunning! My smile has transformed completely. The clinic has the latest equipment and Dr. Ashwin is extremely knowledgeable and friendly.",
//     treatment: "Teeth Whitening",
//   },
// ];

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const sectionRef = useRef(null);
//   const total = TESTIMONIALS.length;

//   const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
//   const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

//   useEffect(() => {
//     const interval = setInterval(next, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
//       { threshold: 0.1 }
//     );
//     sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="testimonials" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
//       <div className="blob w-[400px] h-[400px] bg-accent left-[-100px] top-[-100px]" />
//       <div className="blob w-[350px] h-[350px] bg-primary right-[-80px] bottom-[-80px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="reveal inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-[13px] font-semibold px-4 py-2 rounded-full mb-4 border border-amber-100">
//             ⭐ Patient Stories
//           </div>
//           <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
//             What Our <span className="gradient-text">Patients Say</span>
//           </h2>
//           <p className="reveal text-darkText/55 text-lg max-w-xl mx-auto leading-relaxed">
//             Real experiences from the Latur community — the smiles speak for themselves.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="reveal relative max-w-4xl mx-auto">
//           {/* Main card */}
//           <div className="bg-gradient-to-br from-softBlue to-white rounded-3xl p-8 sm:p-12 shadow-cardHover border border-blue-50 relative overflow-hidden">
//             {/* Quote mark */}
//             <div className="absolute top-6 right-8 font-display text-[120px] text-primary/5 leading-none select-none">
//               "
//             </div>

//             {/* Stars */}
//             <div className="flex gap-1 mb-6">
//               {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
//                 <BsStarFill key={i} className="text-accent text-base" />
//               ))}
//             </div>

//             {/* Review text */}
//             <p className="text-darkText/75 text-lg sm:text-xl font-body leading-relaxed mb-8 relative z-10">
//               "{TESTIMONIALS[current].review}"
//             </p>

//             {/* Patient info */}
//             <div className="flex items-center justify-between flex-wrap gap-4">
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-200 rounded-2xl flex items-center justify-center text-2xl">
//                   {TESTIMONIALS[current].avatar}
//                 </div>
//                 <div>
//                   <p className="font-display font-bold text-darkText text-lg">{TESTIMONIALS[current].name}</p>
//                   <p className="text-darkText/50 text-sm">{TESTIMONIALS[current].location}</p>
//                 </div>
//               </div>
//               <div className="bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
//                 {TESTIMONIALS[current].treatment}
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="flex items-center justify-center gap-4 mt-8">
//             <button
//               onClick={prev}
//               className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-card flex items-center justify-center text-darkText hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
//             >
//               <BsChevronLeft size={16} />
//             </button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {TESTIMONIALS.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`rounded-full transition-all duration-300 ${
//                     i === current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-200 hover:bg-primary/40"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={next}
//               className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-card flex items-center justify-center text-darkText hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
//             >
//               <BsChevronRight size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Summary row */}
//         <div className="reveal grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16 text-center">
//           {[
//             { val: "5000+", label: "Happy Patients" },
//             { val: "4.9★", label: "Average Rating" },
//             { val: "10+", label: "Years Serving" },
//           ].map((s) => (
//             <div key={s.label} className="bg-softBlue/60 rounded-2xl p-4 border border-blue-100">
//               <p className="font-display text-2xl font-bold gradient-text">{s.val}</p>
//               <p className="text-xs text-darkText/50 mt-1">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { BsStarFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const TESTIMONIALS = [
  { name:"Priya Sharma", location:"Latur", avatar:"👩", rating:5, review:"Dr. Ashwin Kodgi did my root canal treatment and I was completely pain-free throughout. The clinic is spotlessly clean and the staff is incredibly welcoming. Best dental clinic in Latur without a doubt!", treatment:"Root Canal" },
  { name:"Rahul Desai", location:"Gulbarga", avatar:"👨", rating:5, review:"Got dental implants done here after years of hesitation. The result is absolutely natural-looking and the procedure was explained step-by-step. Dr. Kodgi is truly world-class. Travelling from Gulbarga was absolutely worth it.", treatment:"Dental Implants" },
  { name:"Anita Patil", location:"Latur", avatar:"👩‍🦱", rating:5, review:"My daughter's braces treatment has been going perfectly under Dr. Shruti. Both doctors are very gentle with children and always patient with our questions. The clinic is hygienic and the results are excellent!", treatment:"Orthodontics" },
  { name:"Vijay Kulkarni", location:"Osmanabad", avatar:"🧔", rating:5, review:"I was terrified of dentists but the team at Yash Dental made me completely comfortable. Painless, professional, hygienic experience. They completely changed my view about dental treatment!", treatment:"Teeth Cleaning" },
  { name:"Snehal More", location:"Latur", avatar:"👩‍🦰", rating:5, review:"The teeth whitening results are stunning! My smile has completely transformed. Dr. Ashwin is extremely knowledgeable and the whole experience was smooth and comfortable. Highly recommend to everyone in Latur!", treatment:"Teeth Whitening" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const total = TESTIMONIALS.length;

  const next = () => setCurrent(c => (c === total - 1 ? 0 : c + 1));
  const prev = () => setCurrent(c => (c === 0 ? total - 1 : c - 1));

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-accent left-[-100px] top-[-80px]" />
      <div className="blob w-[350px] h-[350px] bg-primary right-[-80px] bottom-[-80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-amber-100">
            ⭐ Patient Stories
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="reveal text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
            Trusted by thousands across Latur and Marathwada — real experiences, real smiles.
          </p>
        </div>

        <div className="reveal max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-softBlue to-white rounded-3xl p-8 sm:p-12 shadow-cardHover border border-blue-50 relative overflow-hidden">
            <div className="absolute top-4 right-6 font-display text-[110px] text-primary/5 leading-none select-none">"</div>
            <div className="flex gap-1 mb-6">{Array.from({length:TESTIMONIALS[current].rating}).map((_,i)=><BsStarFill key={i} className="text-accent text-base"/>)}</div>
            <p className="text-darkText/75 text-lg sm:text-xl font-body leading-relaxed mb-8 relative z-10 min-h-[80px]">
              "{TESTIMONIALS[current].review}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-200 rounded-2xl flex items-center justify-center text-2xl">
                  {TESTIMONIALS[current].avatar}
                </div>
                <div>
                  <p className="font-display font-bold text-darkText text-lg">{TESTIMONIALS[current].name}</p>
                  <p className="text-darkText/50 text-sm">{TESTIMONIALS[current].location}</p>
                </div>
              </div>
              <span className="bg-primary/10 text-primary text-[12px] font-semibold px-4 py-1.5 rounded-full">{TESTIMONIALS[current].treatment}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-card flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
              <BsChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_,i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i===current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-200 hover:bg-primary/40"}`} />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-card flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
              <BsChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal grid grid-cols-3 gap-6 max-w-sm mx-auto mt-14 text-center">
          {[{v:"5000+",l:"Happy Patients"},{v:"4.9★",l:"Avg Rating"},{v:"10+",l:"Years Serving"}].map(s => (
            <div key={s.l} className="bg-softBlue/60 rounded-2xl p-4 border border-blue-100">
              <p className="font-display text-xl font-bold gradient-text">{s.v}</p>
              <p className="text-[11px] text-darkText/50 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}