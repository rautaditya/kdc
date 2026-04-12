// import { useState, useEffect, useRef } from "react";
// import { FiPhone, FiMapPin, FiClock, FiSend, FiCheck } from "react-icons/fi";

// const SERVICES_LIST = [
//   "Dental Implants",
//   "Root Canal",
//   "Braces/Orthodontics",
//   "Teeth Whitening",
//   "Tooth Extraction",
//   "Dental Cleaning",
//   "Other",
// ];

// export default function Contact() {
//   const sectionRef = useRef(null);
//   const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
//       { threshold: 0.1 }
//     );
//     sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 1500);
//   };

//   return (
//     <section id="contact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
//       <div className="blob w-[450px] h-[450px] bg-primary left-[-100px] bottom-[-100px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[13px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
//             📅 Book Appointment
//           </div>
//           <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
//             Get in <span className="gradient-text">Touch</span>
//           </h2>
//           <p className="reveal text-darkText/55 text-lg max-w-xl mx-auto leading-relaxed">
//             Book your appointment today and take the first step toward a healthier, brighter smile.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-10">
//           {/* Left info cards */}
//           <div className="lg:col-span-2 space-y-5">
//             {/* Call */}
//             <div className="reveal bg-white rounded-2xl p-6 shadow-card border border-gray-50 flex items-start gap-4 hover:shadow-cardHover transition-shadow duration-300">
//               <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
//                 <FiPhone className="text-primary text-xl" />
//               </div>
//               <div>
//                 <p className="font-semibold text-darkText mb-1">Call Us</p>
//                 <a href="tel:8806333633" className="text-primary font-body text-[15px] font-medium hover:underline">
//                   88063 33633
//                 </a>
//                 <p className="text-darkText/40 text-[13px] mt-0.5">Mon–Sun · 9 AM – 9 PM</p>
//               </div>
//             </div>

//             {/* Location */}
//             <div className="reveal bg-white rounded-2xl p-6 shadow-card border border-gray-50 flex items-start gap-4 hover:shadow-cardHover transition-shadow duration-300">
//               <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
//                 <FiMapPin className="text-green-500 text-xl" />
//               </div>
//               <div>
//                 <p className="font-semibold text-darkText mb-1">Address</p>
//                 <p className="text-darkText/60 text-[15px] font-body leading-relaxed">
//                   1st Floor, Vyapari Dharmshala Complex,<br />
//                   Beside Kamdar Petrol Pump,<br />
//                   Gandhi Chowk, Latur
//                 </p>
//               </div>
//             </div>

//             {/* Hours */}
//             <div className="reveal bg-white rounded-2xl p-6 shadow-card border border-gray-50 flex items-start gap-4 hover:shadow-cardHover transition-shadow duration-300">
//               <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
//                 <FiClock className="text-accent text-xl" />
//               </div>
//               <div className="w-full">
//                 <p className="font-semibold text-darkText mb-3">Working Hours</p>
//                 <div className="space-y-1.5">
//                   {[
//                     { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
//                     { day: "Saturday", time: "9:00 AM – 9:00 PM" },
//                     { day: "Sunday", time: "10:00 AM – 6:00 PM" },
//                   ].map((h) => (
//                     <div key={h.day} className="flex justify-between text-[14px]">
//                       <span className="text-darkText/50">{h.day}</span>
//                       <span className="text-darkText font-medium">{h.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Map embed */}
//             <div className="reveal rounded-2xl overflow-hidden shadow-card border border-gray-100 h-48">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4!2d76.5840!3d18.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzMxLjciTiA3NsKwMzUnMDIuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Yash Dental Clinic Location"
//               />
//             </div>
//           </div>

//           {/* Right — Form */}
//           <div className="lg:col-span-3">
//             <div className="reveal bg-white rounded-3xl shadow-cardHover border border-gray-50 p-8 sm:p-10">
//               {!submitted ? (
//                 <>
//                   <h3 className="font-display text-2xl font-bold text-darkText mb-2">Book Your Appointment</h3>
//                   <p className="text-darkText/50 text-[15px] mb-8">Fill in the details and we'll confirm your slot within 2 hours.</p>

//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="grid sm:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-[13px] font-semibold text-darkText/60 mb-2 uppercase tracking-wider">Full Name</label>
//                         <input
//                           className="form-input"
//                           type="text"
//                           name="name"
//                           placeholder="Your full name"
//                           value={form.name}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[13px] font-semibold text-darkText/60 mb-2 uppercase tracking-wider">Phone Number</label>
//                         <input
//                           className="form-input"
//                           type="tel"
//                           name="phone"
//                           placeholder="Mobile number"
//                           value={form.phone}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[13px] font-semibold text-darkText/60 mb-2 uppercase tracking-wider">Service Needed</label>
//                       <select
//                         className="form-input"
//                         name="service"
//                         value={form.service}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select a service...</option>
//                         {SERVICES_LIST.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-[13px] font-semibold text-darkText/60 mb-2 uppercase tracking-wider">Message (Optional)</label>
//                       <textarea
//                         className="form-input resize-none"
//                         name="message"
//                         rows={4}
//                         placeholder="Describe your concern or preferred time..."
//                         value={form.message}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className={`w-full flex items-center justify-center gap-2 font-semibold text-white py-4 rounded-2xl text-[15px] transition-all duration-300 ${
//                         loading
//                           ? "bg-primary/70 cursor-not-allowed"
//                           : "btn-shimmer shadow-glow hover:shadow-[0_8px_32px_rgba(47,128,237,0.4)] hover:scale-[1.02]"
//                       }`}
//                     >
//                       {loading ? (
//                         <>
//                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                           Booking...
//                         </>
//                       ) : (
//                         <>
//                           <FiSend />
//                           Book Appointment
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </>
//               ) : (
//                 <div className="flex flex-col items-center justify-center py-16 text-center">
//                   <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 pulse-ring">
//                     <FiCheck className="text-green-500 text-4xl" />
//                   </div>
//                   <h3 className="font-display text-2xl font-bold text-darkText mb-3">Appointment Requested!</h3>
//                   <p className="text-darkText/60 text-[16px] max-w-sm leading-relaxed">
//                     Thank you, <strong>{form.name}</strong>! We'll call you on <strong>{form.phone}</strong> to confirm your appointment within 2 hours.
//                   </p>
//                   <button
//                     onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", message: "" }); }}
//                     className="mt-8 text-primary font-semibold text-[14px] hover:underline"
//                   >
//                     Book Another →
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { FiPhone, FiMapPin, FiClock, FiSend, FiCheck } from "react-icons/fi";

const SERVICES_LIST = [
  "Dental Implants",
  "Root Canal Treatment",
  "Braces / Orthodontics",
  "Teeth Whitening",
  "Tooth Extraction",
  "Dental Cleaning",
  "Dental Check-up",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);

  const [form, setForm] = useState({
    name: "",
    age: "",
    sex: "",
    phone: "",
    date: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="blob w-[450px] h-[450px] bg-primary left-[-120px] bottom-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-softBlue text-primary text-[12px] font-semibold px-4 py-2 rounded-full mb-4 border border-primary/10">
            📅 Book Appointment
          </div>

          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-darkText mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>

          <p className="reveal text-darkText/55 text-[17px] max-w-xl mx-auto leading-relaxed">
            Fill in the form and we&apos;ll confirm your slot within 2 hours. Or
            simply call us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: <FiPhone className="text-primary text-xl" />,
                bg: "bg-blue-50",
                title: "Call Us",
                content: (
                  <a
                    href="tel:8806333633"
                    className="text-primary font-semibold text-[15px] hover:underline"
                  >
                    88063 33633
                  </a>
                ),
                sub: "Mon–Sun · 9 AM – 9 PM",
              },
              {
                icon: <FiMapPin className="text-green-500 text-xl" />,
                bg: "bg-green-50",
                title: "Address",
                content: (
                  <p className="text-darkText/65 text-[14px] leading-relaxed">
                    1st Floor, Vyapari Dharmshala Complex,
                    <br />
                    Beside Kamdar Petrol Pump,
                    <br />
                    Gandhi Chowk, Latur — 413 512
                  </p>
                ),
                sub: null,
              },
              {
                icon: <FiClock className="text-accent text-xl" />,
                bg: "bg-amber-50",
                title: "Hours",
                content: (
                  <div className="space-y-1">
                    {[
                      ["Mon – Sat", "9:00 AM – 9:00 PM"],
                      ["Sunday", "10:00 AM – 6:00 PM"],
                    ].map(([d, t]) => (
                      <div
                        key={d}
                        className="flex justify-between text-[13px]"
                      >
                        <span className="text-darkText/50">{d}</span>
                        <span className="text-darkText font-medium">{t}</span>
                      </div>
                    ))}
                  </div>
                ),
                sub: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal bg-white rounded-2xl p-5 shadow-card border border-gray-50 flex items-start gap-4 hover:shadow-cardHover transition-shadow"
              >
                <div
                  className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-darkText text-[14px] mb-1">
                    {item.title}
                  </p>
                  {item.content}
                  {item.sub && (
                    <p className="text-darkText/40 text-[12px] mt-0.5">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 reveal">
            <div className="bg-white rounded-3xl shadow-cardHover border border-gray-50 p-8 sm:p-10">
              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-darkText mb-1">
                    Request an Appointment
                  </h3>
                  <p className="text-darkText/50 text-[14px] mb-7">
                    We&apos;ll call you back to confirm within 2 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-darkText/40 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-darkText/40 mb-1.5">
                          Age
                        </label>
                        <input
                          className="form-input"
                          type="number"
                          placeholder="Age"
                          value={form.age}
                          onChange={(e) =>
                            setForm({ ...form, age: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-darkText/40 mb-1.5">
                          Sex
                        </label>
                        <select
                          className="form-input"
                          value={form.sex}
                          onChange={(e) =>
                            setForm({ ...form, sex: e.target.value })
                          }
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-darkText/40 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-darkText/40 mb-1.5">
                        Appointment Date{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="date"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-darkText/40 mb-1.5">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="form-input"
                        value={form.service}
                        onChange={(e) =>
                          setForm({ ...form, service: e.target.value })
                        }
                        required
                      >
                        <option value="">Select a service</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex items-center justify-center gap-2 font-semibold text-white py-4 rounded-2xl text-[15px] transition-all duration-300 ${
                        loading
                          ? "bg-primary/70 cursor-not-allowed"
                          : "btn-shimmer shadow-glow hover:shadow-[0_8px_32px_rgba(47,128,237,0.4)] hover:scale-[1.02]"
                      }`}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Book Appointment
                        </>
                      )}
                    </button>

                    <p className="text-center text-darkText/40 text-[12px]">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 pulse-ring">
                    <FiCheck className="text-green-500 text-4xl" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-darkText mb-2">
                    Appointment Requested!
                  </h3>

                  <p className="text-darkText/60 text-[15px] max-w-xs leading-relaxed">
                    Thank you, <strong>{form.name}</strong>! We&apos;ll call{" "}
                    <strong>{form.phone}</strong> within 2 hours to confirm your
                    slot.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        age: "",
                        sex: "",
                        phone: "",
                        date: "",
                        service: "",
                      });
                    }}
                    className="mt-8 text-primary font-semibold text-[14px] hover:underline"
                  >
                    Book Another Appointment →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}