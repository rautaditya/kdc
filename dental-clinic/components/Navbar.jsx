// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FiMenu, FiX, FiPhone } from "react-icons/fi";
// import { MdLocalHospital } from "react-icons/md";

// const NAV_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href) => {
//     setMenuOpen(false);
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(47,128,237,0.10)] py-3"
//             : "bg-transparent py-5"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleNavClick("#home")}>
//             <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
//               <MdLocalHospital className="text-white text-xl" />
//             </div>
//             <div>
//               <p className="font-display font-bold text-darkText leading-none text-[17px]">Yash Dental</p>
//               <p className="text-[10px] text-primary font-body font-medium tracking-wider uppercase">Super Speciality</p>
//             </div>
//           </div>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex items-center gap-8">
//             {NAV_LINKS.map((link) => (
//               <li key={link.label}>
//                 <button
//                   onClick={() => handleNavClick(link.href)}
//                   className="nav-link text-[15px] font-body font-medium text-darkText/80 hover:text-primary transition-colors duration-200"
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <a
//               href="tel:8806333633"
//               className="flex items-center gap-2 text-[14px] font-medium text-darkText/70 hover:text-primary transition-colors"
//             >
//               <FiPhone className="text-primary" />
//               <span>8806333633</span>
//             </a>
//             <button
//               onClick={() => handleNavClick("#contact")}
//               className="btn-shimmer text-white text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-glow hover:scale-105 transition-all duration-300"
//             >
//               Book Appointment
//             </button>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden w-10 h-10 rounded-xl bg-softBlue flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-40 flex flex-col transition-all duration-500 ${
//           menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div
//           className="absolute inset-0 bg-darkText/40 backdrop-blur-sm"
//           onClick={() => setMenuOpen(false)}
//         />
//         <div
//           className={`relative mt-[72px] mx-4 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-2 transition-all duration-500 ${
//             menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
//           }`}
//         >
//           {NAV_LINKS.map((link, i) => (
//             <button
//               key={link.label}
//               onClick={() => handleNavClick(link.href)}
//               className="text-left px-4 py-3 rounded-xl text-darkText font-medium text-[16px] hover:bg-softBlue hover:text-primary transition-all duration-200"
//               style={{ animationDelay: `${i * 60}ms` }}
//             >
//               {link.label}
//             </button>
//           ))}
//           <div className="border-t border-gray-100 mt-2 pt-4 flex flex-col gap-3">
//             <a
//               href="tel:8806333633"
//               className="flex items-center gap-2 px-4 text-darkText/70 font-medium"
//             >
//               <FiPhone className="text-primary" /> 8806333633
//             </a>
//             <button
//               onClick={() => handleNavClick("#contact")}
//               className="btn-shimmer text-white font-semibold py-3 rounded-xl text-[15px] shadow-md"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { MdLocalHospital } from "react-icons/md";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/96 backdrop-blur-md shadow-[0_2px_20px_rgba(47,128,237,0.10)] py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
              <MdLocalHospital className="text-white text-xl" />
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-darkText leading-none text-[16px]">Yash Dental</p>
              <p className="text-[9px] text-primary font-body font-semibold tracking-[0.12em] uppercase">Super Speciality · Latur</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button onClick={() => scrollTo(l.href)}
                  className="nav-link text-[14px] font-body font-medium text-darkText/70 hover:text-primary transition-colors duration-200">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:8806333633" className="flex items-center gap-1.5 text-[13px] font-medium text-darkText/60 hover:text-primary transition-colors">
              <FiPhone className="text-primary text-sm" />88063 33633
            </a>
            <button onClick={() => scrollTo("#contact")}
              className="btn-shimmer text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-glow hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl bg-softBlue flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-400 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-darkText/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`relative mt-[72px] mx-4 bg-white rounded-2xl shadow-2xl p-5 transition-all duration-400 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}>
          {NAV_LINKS.map((l, i) => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-darkText font-medium text-[15px] hover:bg-softBlue hover:text-primary transition-all duration-200 block">
              {l.label}
            </button>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-4 space-y-3">
            <a href="tel:8806333633" className="flex items-center gap-2 px-4 text-darkText/60 font-medium text-[14px]">
              <FiPhone className="text-primary" />88063 33633
            </a>
            <button onClick={() => scrollTo("#contact")}
              className="w-full btn-shimmer text-white font-semibold py-3 rounded-xl text-[14px]">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}