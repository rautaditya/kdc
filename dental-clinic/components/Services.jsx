// import { useEffect, useRef } from "react";

// const SERVICES = [
//   { icon:"🦷", title:"Dental Implants", desc:"Permanent, natural-looking tooth replacements using precision-placed titanium implants. Long-lasting results that look and feel like real teeth.", color:"from-blue-500 to-blue-400", bg:"bg-blue-50", border:"border-blue-100" },
//   { icon:"🔬", title:"Root Canal Treatment", desc:"Painless, same-day root canal therapy to save your natural tooth and eliminate infection using modern rotary equipment.", color:"from-purple-500 to-purple-400", bg:"bg-purple-50", border:"border-purple-100" },
//   { icon:"😁", title:"Braces & Orthodontics", desc:"Metal, ceramic & clear aligners for perfectly aligned teeth. Custom treatment plans for children, teens, and adults.", color:"from-amber-500 to-amber-400", bg:"bg-amber-50", border:"border-amber-100" },
//   { icon:"✨", title:"Teeth Whitening", desc:"Professional in-office whitening that brightens your smile by several shades in a single visit. Safe and fast results.", color:"from-cyan-500 to-cyan-400", bg:"bg-cyan-50", border:"border-cyan-100" },
//   { icon:"🩺", title:"Tooth Extraction", desc:"Gentle, minimally invasive extractions using the latest techniques. Painless procedures with quick recovery times.", color:"from-rose-500 to-rose-400", bg:"bg-rose-50", border:"border-rose-100" },
//   { icon:"🧼", title:"Dental Cleaning", desc:"Professional scaling, polishing and oral hygiene education. Prevent gum disease and maintain optimal oral health.", color:"from-green-500 to-green-400", bg:"bg-green-50", border:"border-green-100" },
// ];

// export default function Services() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
//     ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
//       <div className="blob w-[450px] h-[450px] bg-primary left-[-180px] top-[-80px]" />
//       <div className="blob w-[350px] h-[350px] bg-accent right-[-60px] bottom-[-60px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
//             🦷 Our Services
//           </div>
//           <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
//             Comprehensive <span className="gradient-text">Dental Care</span>
//           </h2>
//           <p className="reveal text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
//             Full spectrum of dental services — from routine checkups to complex restorations — under one roof in Latur.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {SERVICES.map((s, i) => (
//             <div key={s.title}
//               className={`reveal service-card group relative bg-white rounded-2xl border ${s.border} p-6 cursor-pointer shadow-card overflow-hidden`}
//               style={{ transitionDelay:`${i*70}ms` }}>
//               <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                 {s.icon}
//               </div>
//               <h3 className="font-display text-[19px] font-semibold text-darkText mb-2 group-hover:text-primary transition-colors duration-200">{s.title}</h3>
//               <p className="text-darkText/55 text-[14px] font-body leading-relaxed mb-4">{s.desc}</p>
//               <div className="flex items-center gap-1 text-primary text-[13px] font-semibold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
//                 Learn More
//                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
//               </div>
//               <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
//             </div>
//           ))}
//         </div>

//         <div className="reveal text-center mt-12">
//           <button onClick={() => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}
//             className="btn-shimmer text-white font-semibold text-[15px] px-8 py-4 rounded-2xl shadow-glow hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
//             Book a Consultation
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SERVICES = [
  {
    icon: "🦷",
    slug: "dental-implants",
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements using precision-placed titanium implants. Long-lasting results that look and feel like real teeth.",
    image: "/images/implant.jpg",
    color: "from-blue-500 to-blue-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "🔬",
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    desc: "Painless, same-day root canal therapy to save your natural tooth and eliminate infection using modern rotary equipment.",
    image: "/images/rootcanal.jpeg",
    color: "from-purple-500 to-purple-400",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: "😁",
    slug: "braces-orthodontics",
    title: "Braces & Orthodontics",
    desc: "Metal, ceramic & clear aligners for perfectly aligned teeth. Custom treatment plans for children, teens, and adults.",
    image: "/images/braces.jpeg",
    color: "from-amber-500 to-amber-400",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: "✨",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    desc: "Professional in-office whitening that brightens your smile by several shades in a single visit. Safe and fast results.",
    image: "/images/whitening.jpg",
    color: "from-cyan-500 to-cyan-400",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: "🩺",
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    desc: "Gentle, minimally invasive extractions using the latest techniques. Painless procedures with quick recovery times.",
    image: "/images/extraction.jpg",
    color: "from-rose-500 to-rose-400",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: "🧼",
    slug: "dental-cleaning",
    title: "Dental Cleaning",
    desc: "Professional scaling, polishing and oral hygiene education. Prevent gum disease and maintain optimal oral health.",
    image: "/images/cleaning.jpg",
    color: "from-green-500 to-green-400",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];
export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".reveal-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="blob w-[450px] h-[450px] bg-primary left-[-180px] top-[-80px]" />
      <div className="blob w-[350px] h-[350px] bg-accent right-[-60px] bottom-[-60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
            🦷 Our Services
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
            Comprehensive <span className="gradient-text">Dental Care</span>
          </h2>

          <p className="text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
            Full spectrum of dental services — from routine checkups to complex
            restorations — under one roof in Latur.
          </p>
        </div>

       <Swiper
  modules={[Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  speed={1000}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {SERVICES.map((s) => (
    <SwiperSlide key={s.slug}>
      <div className={`group relative bg-white rounded-2xl border ${s.border} p-6 shadow-card overflow-hidden h-full hover:-translate-y-2 transition-all duration-500`}>
        
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-44 object-cover rounded-2xl mb-5"
        />

        <h3 className="font-display text-[19px] font-semibold text-darkText mb-2 group-hover:text-primary transition-colors duration-200">
          {s.title}
        </h3>

        <p className="text-darkText/55 text-[14px] font-body leading-7 mb-4 min-h-[84px]">
          {s.desc}
        </p>

        <Link
          href={`/services/${s.slug}`}
          className="inline-flex items-center gap-1 text-primary text-[13px] font-semibold"
        >
          Learn More →
        </Link>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-shimmer text-white font-semibold text-[15px] px-8 py-4 rounded-2xl shadow-glow hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Book a Consultation
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}