// import { MdLocalHospital } from "react-icons/md";
// import { FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

// const QUICK_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About Us", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "Contact", href: "#contact" },
// ];

// const SERVICES = [
//   "Dental Implants",
//   "Root Canal Treatment",
//   "Orthodontics & Braces",
//   "Teeth Whitening",
//   "Tooth Extraction",
//   "Dental Cleaning",
// ];

// const SOCIALS = [
//   { icon: <FiFacebook />, href: "#", label: "Facebook" },
//   { icon: <FiInstagram />, href: "#", label: "Instagram" },
//   { icon: <FiTwitter />, href: "#", label: "Twitter" },
//   { icon: <FiMail />, href: "mailto:info@yashdental.com", label: "Email" },
// ];

// export default function Footer() {
//   const scrollTo = (href) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-darkText text-white relative overflow-hidden">
//       {/* Top wave */}
//       <div className="absolute top-0 left-0 right-0">
//         <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
//           <path d="M0 0 Q360 60 720 30 Q1080 0 1440 40 L1440 0 Z" fill="#F9FBFD" />
//         </svg>
//       </div>

//       {/* Background blobs */}
//       <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px] -left-20 top-10" />
//       <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] right-20 bottom-10" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3 mb-5 cursor-pointer" onClick={() => scrollTo("#home")}>
//               <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow">
//                 <MdLocalHospital className="text-white text-xl" />
//               </div>
//               <div>
//                 <p className="font-display font-bold text-white leading-none text-[17px]">Yash Dental</p>
//                 <p className="text-[10px] text-primary font-body tracking-wider uppercase mt-0.5">Super Speciality</p>
//               </div>
//             </div>
//             <p className="text-white/50 text-[14px] font-body leading-relaxed mb-6">
//               Your trusted dental care partner in Latur. Bringing world-class smiles to the heart of Maharashtra.
//             </p>
//             {/* Social links */}
//             <div className="flex gap-3">
//               {SOCIALS.map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.href}
//                   aria-label={s.label}
//                   className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
//                 >
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display font-semibold text-white text-[16px] mb-5 after:block after:w-8 after:h-0.5 after:bg-primary after:mt-2">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {QUICK_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => scrollTo(link.href)}
//                     className="text-white/50 text-[14px] font-body hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-200" />
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-display font-semibold text-white text-[16px] mb-5 after:block after:w-8 after:h-0.5 after:bg-accent after:mt-2">
//               Services
//             </h4>
//             <ul className="space-y-3">
//               {SERVICES.map((s) => (
//                 <li key={s}>
//                   <button
//                     onClick={() => scrollTo("#services")}
//                     className="text-white/50 text-[14px] font-body hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group text-left"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-accent/0 group-hover:bg-accent transition-all duration-200 flex-shrink-0" />
//                     {s}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display font-semibold text-white text-[16px] mb-5 after:block after:w-8 after:h-0.5 after:bg-primary after:mt-2">
//               Contact Info
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <FiPhone className="text-primary text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-white/40 text-[12px] uppercase tracking-wider">Phone</p>
//                   <a href="tel:8806333633" className="text-white text-[14px] hover:text-primary transition-colors">
//                     88063 33633
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <FiMapPin className="text-primary text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-white/40 text-[12px] uppercase tracking-wider">Address</p>
//                   <p className="text-white text-[14px] leading-relaxed">
//                     1st Floor, Vyapari Dharmshala Complex,<br />
//                     Gandhi Chowk, Latur
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-accent text-xs">⏰</span>
//                 </div>
//                 <div>
//                   <p className="text-white/40 text-[12px] uppercase tracking-wider">Hours</p>
//                   <p className="text-white text-[14px]">Open Daily · Until 9 PM</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-white/30 text-[13px]">
//             © {new Date().getFullYear()} Yash Super Speciality Dental Clinic · Dr. Ashwin Kodgi · All rights reserved.
//           </p>
//           <p className="text-white/20 text-[12px]">
//             Gandhi Chowk, Latur, Maharashtra
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { MdLocalHospital } from "react-icons/md";
import { FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const SERVICES = ["Dental Implants","Root Canal","Braces & Orthodontics","Teeth Whitening","Tooth Extraction","Dental Cleaning"];
const QUICK = [
  {l:"Home",h:"#home"},{l:"Services",h:"#services"},{l:"About Us",h:"#about"},
  {l:"Our Doctors",h:"#doctors"},{l:"Technology",h:"#technology"},{l:"Testimonials",h:"#testimonials"},
  {l:"FAQ",h:"#faq"},{l:"Contact",h:"#contact"},
];
const SOCIALS = [
  {ic:<FiFacebook/>,h:"#",l:"Facebook"},{ic:<FiInstagram/>,h:"#",l:"Instagram"},
  {ic:<FiTwitter/>,h:"#",l:"Twitter"},{ic:<FiYoutube/>,h:"#",l:"YouTube"},
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({behavior:"smooth"});
  return (
    <footer className="bg-darkText text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 0 Q360 60 720 30 Q1080 0 1440 40 L1440 0 Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] -left-20 top-10" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/8 blur-[80px] right-20 bottom-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"><MdLocalHospital className="text-white text-xl"/></div>
              <div>
                <p className="font-display font-bold text-white text-[16px] leading-none">Yash Dental</p>
                <p className="text-[9px] text-primary tracking-wider uppercase mt-0.5">Super Speciality · Latur</p>
              </div>
            </button>
            <p className="text-white/45 text-[13px] leading-relaxed mb-5">
              Latur's most trusted dental clinic. Bringing world-class smiles to Marathwada since 2014.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(s => (
                <a key={s.l} href={s.h} aria-label={s.l}
                  className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-200">
                  {s.ic}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-[15px] mb-5 after:block after:w-7 after:h-0.5 after:bg-primary after:mt-1.5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK.map(l => (
                <li key={l.l}>
                  <button onClick={() => scrollTo(l.h)}
                    className="text-white/45 text-[13px] hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-200"/>
                    {l.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-[15px] mb-5 after:block after:w-7 after:h-0.5 after:bg-accent after:mt-1.5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s}>
                  <button onClick={() => scrollTo("#services")}
                    className="text-white/45 text-[13px] hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group text-left">
                    <span className="w-1 h-1 rounded-full bg-accent/0 group-hover:bg-accent transition-all duration-200 flex-shrink-0"/>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-[15px] mb-5 after:block after:w-7 after:h-0.5 after:bg-primary after:mt-1.5">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon:<FiPhone className="text-primary text-sm"/>, bg:"bg-primary/15", label:"Phone", content:<a href="tel:8806333633" className="text-white text-[13px] hover:text-primary transition-colors">88063 33633</a> },
                { icon:<FiMapPin className="text-primary text-sm"/>, bg:"bg-primary/15", label:"Address", content:<p className="text-white/60 text-[13px] leading-relaxed">1st Floor, Vyapari Dharmshala Complex,<br/>Gandhi Chowk, Latur</p> },
                { icon:<span className="text-[11px]">⏰</span>, bg:"bg-accent/15", label:"Hours", content:<p className="text-white text-[13px]">Open Daily · Until 9 PM</p> },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`w-7 h-7 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>{item.icon}</div>
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
  
  <p className="text-white/40 text-[13px] text-center md:text-left">
    © {new Date().getFullYear()} Yash Dental Super Speciality Clinic. All Rights Reserved.
  </p>

  <p className="text-white/30 text-[12px] text-center md:text-right">
    Designed & Developed by <span className="text-primary font-medium">CODEWINX IT SOLUTION</span>
  </p>

</div>
      </div>
    </footer>
  );
}