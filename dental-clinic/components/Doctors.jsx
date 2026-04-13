import { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

const DOCTORS = [
  {
    name: "Dr. Ashwin Kodgi",
    degree: "BDS, MDS",
    role: "Chief Dental Surgeon & Implantologist",
    exp: "10+ Years",
    img: "/images/Ashwin-kodgi.jpg",
    bg: "from-blue-100 to-blue-50",
    accent: "blue",
    specialties: ["Dental Implants","Root Canal Treatment","Oral Surgery"],
    quote: "My goal is simple – to give every patient in Latur access to pain-free, world-class dental care.",
    phone: "+91 9175028730",
    email: "info@yourclinic.com",
  },
  {
    name: "Dr. Shruti A. Kodgi",
    degree: "BDS",
    role: "Associate Dentist & Orthodontist",
    exp: "7+ Years",
    img: "/images/Shruti-kodgi.jpg",
    bg: "from-pink-100 to-purple-50",
    accent: "pink",
    specialties: ["Braces & Aligners","Pediatric Dentistry","Preventive Care"],
    quote: "Every smile is unique. I take pride in crafting personalised treatment plans that truly transform lives.",
    phone: "+91 9175028740",
    email: "info@yourclinic.com",
  },
];

export default function Doctors() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="doctors" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            Expert <span className="text-blue-600">Dental Specialists</span>
          </h2>
          <p className="text-gray-500">
            Highly qualified professionals dedicated to your smile
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden text-center p-6"
            >

              {/* Top Background */}
              <div className={`h-52 rounded-2xl bg-gradient-to-r ${doc.bg} relative`}>

                {/* 🔥 Larger Doctor Image */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    onError={(e) => (e.target.src = "/images/default-doctor.png")}
                    className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

              </div>

              {/* Content */}
              <div className="mt-32">

                <div className="flex justify-center items-center gap-2">
                  <h3 className="text-2xl font-bold">{doc.name}</h3>
                  <MdVerified className="text-blue-500" />
                </div>

                <p className={`font-semibold mt-1 ${
                  doc.accent === "pink" ? "text-pink-500" : "text-blue-600"
                }`}>
                  {doc.degree}
                </p>

                <p className="text-gray-500 text-sm mb-3">
                  {doc.role}
                </p>

                {/* Rating */}
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => (
                      <BsStarFill key={i} />
                    ))}
                  </div>

                  <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                    {doc.exp} Experience
                  </span>
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic mb-5 px-4">
                  "{doc.quote}"
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {doc.specialties.map((s) => (
                    <span
                      key={s}
                      className={`px-4 py-1.5 rounded-full text-white text-xs ${
                        doc.accent === "pink"
                          ? "bg-pink-500"
                          : "bg-blue-600"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <div className="flex justify-center gap-6 border-t pt-4 text-sm">
                  <span className="text-green-600">📞 {doc.phone}</span>
                  <span className="text-blue-600">✉️ {doc.email}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}