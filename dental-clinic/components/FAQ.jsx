import { useState, useEffect, useRef } from "react";

const FAQS = [
  {
    q: "Is Yash Dental Clinic the best dental clinic in Latur?",
    a: "Yash Super Speciality Dental Clinic at Gandhi Chowk, Latur is one of the most trusted dental clinics in Latur, with 10+ years of experience, 5000+ satisfied patients, and qualified specialists Dr. Ashwin Kodgi (MDS) and Dr. Shruti Kodgi. We offer the latest technology and maintain the highest standards of hygiene.",
  },
  {
    q: "Is root canal treatment painful at your clinic in Latur?",
    a: "Absolutely not. We use modern rotary endodontic technology and advanced anaesthesia techniques to ensure that root canal treatment is completely painless. Most patients are surprised by how comfortable the experience is. The procedure typically takes 1–2 sittings.",
  },
  {
    q: "How much does a dental implant cost in Latur?",
    a: "The cost of dental implants in Latur varies depending on the type of implant and the complexity of the case. At Yash Dental Clinic, we offer affordable, transparent pricing with no hidden charges. EMI options are also available. Contact us at 88063 33633 for a free consultation and customised quote.",
  },
  {
    q: "How long does teeth whitening last?",
    a: "Professional teeth whitening done at our Latur clinic can last 1–3 years depending on your lifestyle habits (coffee, tea, smoking etc.). We use a clinically proven LED whitening system that gives results up to 8 shades brighter in a single session.",
  },
  {
    q: "Do you provide dental treatment for children in Latur?",
    a: "Yes! Dr. Shruti Kodgi specialises in paediatric dentistry and is extremely gentle with children. We provide a child-friendly, anxiety-free environment. Services for children include dental check-ups, pit & fissure sealants, fluoride application, and paediatric braces.",
  },
  {
    q: "What are the clinic timings and how do I book an appointment?",
    a: "Yash Super Speciality Dental Clinic is open daily from 9:00 AM to 9:00 PM, including weekends. You can book an appointment by calling us at 88063 33633, filling out our online appointment form, or visiting us directly at 1st Floor, Vyapari Dharmshala Complex, Gandhi Chowk, Latur.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold:0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary left-[-100px] top-[-80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
            ❓ FAQ
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="reveal text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
            Common questions about dental treatment at Yash Dental Clinic, Latur — answered by our specialists.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i}
              className="reveal bg-white rounded-2xl border border-gray-50 shadow-card overflow-hidden transition-all duration-300"
              style={{ transitionDelay:`${i*50}ms` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group">
                <span className="font-display text-[16px] font-semibold text-darkText group-hover:text-primary transition-colors duration-200 leading-snug">
                  {f.q}
                </span>
                <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  open === i ? "bg-primary text-white rotate-45" : "bg-softBlue text-primary"
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open === i ? "max-h-96" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-darkText/65 text-[15px] font-body leading-relaxed border-t border-gray-50 pt-4">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <p className="text-darkText/50 text-[14px] mb-4">Have more questions? We're happy to help.</p>
          <a href="tel:8806333633"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-[14px] px-6 py-3 rounded-xl border border-primary/20 shadow-card hover:shadow-cardHover hover:bg-softBlue transition-all duration-200">
            📞 Call Us: 88063 33633
          </a>
        </div>
      </div>
    </section>
  );
}