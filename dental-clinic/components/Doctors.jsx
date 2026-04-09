import { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

const DOCTORS = [
  {
    name: "Dr. Ashwin Kodgi",
    degree: "BDS, MDS",
    role: "Chief Dental Surgeon & Implantologist",
    exp: "10+ Years",
    avatar: "👨‍⚕️",
    color: "from-blue-500 to-primary",
    specialties: ["Dental Implants","Root Canal Treatment","Oral Surgery","Cosmetic Dentistry"],
    quote: "My goal is simple — to give every patient in Latur access to pain-free, world-class dental care.",
  },
  {
    name: "Dr. Shruti A. Kodgi",
    degree: "BDS",
    role: "Associate Dentist & Orthodontist",
    exp: "7+ Years",
    avatar: "👩‍⚕️",
    color: "from-purple-500 to-pink-400",
    specialties: ["Braces & Aligners","Pediatric Dentistry","Preventive Care","Teeth Whitening"],
    quote: "Every smile is unique. I take pride in crafting personalised treatment plans that truly transform lives.",
  },
];

export default function Doctors() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="doctors" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary left-[-100px] top-[-80px]" />
      <div className="blob w-[300px] h-[300px] bg-accent right-[-60px] bottom-[-60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
            👨‍⚕️ Meet Our Doctors
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
            Expert <span className="gradient-text">Dental Specialists</span>
          </h2>
          <p className="reveal text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
            Highly qualified, experienced professionals dedicated to your oral health and confident smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {DOCTORS.map((doc, i) => (
            <div key={doc.name}
              className="reveal group bg-white rounded-3xl border border-gray-50 shadow-card hover:shadow-cardHover transition-all duration-400 overflow-hidden"
              style={{ transitionDelay:`${i*100}ms` }}>
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${doc.color}`} />
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${doc.color} flex items-center justify-center text-4xl flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {doc.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-xl font-bold text-darkText">{doc.name}</h3>
                      <MdVerified className="text-primary text-lg flex-shrink-0" />
                    </div>
                    <p className="text-primary text-[13px] font-semibold mb-0.5">{doc.degree}</p>
                    <p className="text-darkText/50 text-[13px] mb-2">{doc.role}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><BsStarFill key={i} className="text-accent text-xs"/>)}</div>
                      <span className="bg-softBlue text-primary text-[11px] font-semibold px-2.5 py-0.5 rounded-full">{doc.exp} Experience</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="bg-softBlue/50 border-l-3 border-l-primary rounded-r-xl rounded-l-sm p-4 mb-6 text-darkText/70 text-[14px] italic leading-relaxed" style={{ borderLeft:"3px solid #2F80ED" }}>
                  "{doc.quote}"
                </blockquote>

                {/* Specialties */}
                <div>
                  <p className="text-[11px] font-semibold text-darkText/40 uppercase tracking-wider mb-3">Specialises In</p>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map(s => (
                      <span key={s} className="bg-gray-50 text-darkText/70 text-[12px] font-medium px-3 py-1.5 rounded-full border border-gray-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}