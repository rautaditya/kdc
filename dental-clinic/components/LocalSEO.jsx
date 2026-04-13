import { useEffect, useRef } from "react";
import { FiMapPin } from "react-icons/fi";

const AREAS = [
  
];

export default function LocalSEO() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="local" ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="blob w-[350px] h-[350px] bg-accent right-[-80px] top-[-40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — content */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
              <FiMapPin className="text-primary" />Serving Latur & Marathwada
            </div>
            <h2 className="reveal font-display text-3xl sm:text-4xl font-bold text-darkText mb-4 leading-tight">
              Best Dental Clinic in{" "}
              <span className="gradient-text">Latur, Maharashtra</span>
            </h2>
            <p className="reveal text-darkText/60 text-[16px] leading-relaxed mb-6">
              Yash Super Speciality Dental Clinic is conveniently located at Gandhi Chowk, Latur — the heart of the city. 
              Patients travel from across Marathwada — including Osmanabad, Nanded, Udgir, and Gulbarga — to access our advanced dental services.
            </p>

            <div className="reveal bg-softBlue/60 rounded-2xl p-5 border border-blue-100 mb-6">
              <p className="text-[11px] font-bold text-darkText/40 uppercase tracking-wider mb-3">Clinic Address</p>
              <p className="text-darkText font-medium text-[15px] leading-relaxed">
                1st Floor, Vyapari Dharmshala Complex,<br />
                Beside Kamdar Petrol Pump,<br />
                Gandhi Chowk, Latur — 413 512<br />
                Maharashtra, India
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-primary text-[13px] font-semibold hover:underline">
                <FiMapPin className="text-sm" /> Open in Google Maps
              </a>
            </div>

            <div className="reveal">
              <p className="text-[12px] font-bold text-darkText/40 uppercase tracking-wider mb-3"></p>
              <div className="flex flex-wrap gap-2">
                {AREAS.map(area => (
                  <span key={area} className="bg-gray-50 text-darkText/60 text-[12px] px-3 py-1.5 rounded-full border border-gray-100">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="reveal rounded-3xl overflow-hidden shadow-cardHover border border-gray-100 h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15143.5!2d76.5640!3d18.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf7a4f3f20b5e1%3A0x1a2b3c4d5e6f7a8b!2sGandhi%20Chowk%2C%20Latur%2C%20Maharashtra%20413512!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yash Dental Clinic Gandhi Chowk Latur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}