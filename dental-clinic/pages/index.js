// import Head from "next/head";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Services from "../components/Services";
// import About from "../components/About";
// import WhyChooseUs from "../components/WhyChooseUs";
// import Doctors from "../components/Doctors";
// import Technology from "../components/Technology";
// import Testimonials from "../components/Testimonials";
// import FAQ from "../components/FAQ";
// import LocalSEO from "../components/LocalSEO";
// import Contact from "../components/Contact";
// import FinalCTA from "../components/FinalCTA";
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Best Dental Clinic in Latur | Yash Super Speciality Dental Clinic | Dr. Ashwin Kodgi</title>
//         <meta name="description" content="Yash Super Speciality Dental Clinic — Best dental clinic in Latur. Expert dental care by Dr. Ashwin Kodgi (MDS) & Dr. Shruti Kodgi. Implants, Root Canal, Braces, Whitening. Open until 9 PM. Call 8806333633." />
//         <meta name="keywords" content="dental clinic latur, best dentist latur, root canal latur, dental implants latur, orthodontics latur, teeth whitening latur, Dr Ashwin Kodgi, Yash Dental Latur, Gandhi Chowk dentist" />
//         <meta name="robots" content="index, follow" />
//         <meta name="geo.region" content="IN-MH" />
//         <meta name="geo.placename" content="Latur" />
//         <meta property="og:title" content="Best Dental Clinic in Latur | Yash Super Speciality Dental Clinic" />
//         <meta property="og:description" content="Expert dental care in Latur by Dr. Ashwin Kodgi. Implants, Root Canal, Braces & more. Open until 9 PM." />
//         <meta property="og:type" content="local.business" />
//         <link rel="canonical" href="https://yashdental.in/" />
//         {/* Schema.org Local Business */}
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Dentist",
//           "name": "Yash Super Speciality Dental Clinic",
//           "description": "Best dental clinic in Latur offering implants, root canal, orthodontics and more.",
//           "url": "https://yashdental.in",
//           "telephone": "+918806333633",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "1st Floor, Vyapari Dharmshala Complex, Beside Kamdar Petrol Pump, Gandhi Chowk",
//             "addressLocality": "Latur",
//             "addressRegion": "Maharashtra",
//             "postalCode": "413512",
//             "addressCountry": "IN"
//           },
//           "openingHours": ["Mo-Sa 09:00-21:00","Su 10:00-18:00"],
//           "priceRange": "₹₹",
//           "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
//         }) }} />
//       </Head>

//       <Navbar />

//       <main>
//         {/* 1. Hero */}
//         <Hero />

//         {/* 2. Stats already in Hero */}

//         {/* 3. Services */}
//         <Services />

//         {/* 4. About Clinic */}
//         <About />

//         {/* 5. Why Choose Us */}
//         <WhyChooseUs />

//         {/* 6. Doctor Profiles */}
//         <Doctors />

//         {/* 7. Technology */}
//         <Technology />

//         {/* 8. Testimonials */}
//         <Testimonials />

//         {/* 9. FAQ */}
//         <FAQ />

//         {/* 10. Local SEO */}
//         <LocalSEO />

//         {/* 11. Contact / Appointment */}
//         <Contact />

//         {/* 12. Final CTA */}
//         <FinalCTA />
//       </main>

//       <Footer />

//       {/* Sticky floating call button */}
//       <a href="tel:8806333633"
//         className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 hover:shadow-[0_8px_32px_rgba(47,128,237,0.55)] transition-all duration-300 group"
//         aria-label="Call Now">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
//         </svg>
//         <span className="absolute right-16 bg-darkText text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//           Call Now
//         </span>
//       </a>
//     </>
//   );
// }

import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Doctors from "../components/Doctors";
import Technology from "../components/Technology";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import LocalSEO from "../components/LocalSEO";
import Contact from "../components/Contact";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Dental Clinic in Latur | Yash Super Speciality Dental Clinic | Dr. Ashwin Kodgi</title>
        <meta name="description" content="Yash Super Speciality Dental Clinic — Best dental clinic in Latur. Expert dental care by Dr. Ashwin Kodgi (MDS) & Dr. Shruti Kodgi. Implants, Root Canal, Braces, Whitening. Open until 9 PM. Call 8806333633." />
        <meta name="keywords" content="dental clinic latur, best dentist latur, root canal latur, dental implants latur, orthodontics latur, teeth whitening latur, Dr Ashwin Kodgi, Yash Dental Latur, Gandhi Chowk dentist" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Latur" />
        <meta property="og:title" content="Best Dental Clinic in Latur | Yash Super Speciality Dental Clinic" />
        <meta property="og:description" content="Expert dental care in Latur by Dr. Ashwin Kodgi. Implants, Root Canal, Braces & more. Open until 9 PM." />
        <meta property="og:type" content="local.business" />
        <link rel="canonical" href="https://yashdental.in/" />
        {/* Schema.org Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Yash Super Speciality Dental Clinic",
          "description": "Best dental clinic in Latur offering implants, root canal, orthodontics and more.",
          "url": "https://yashdental.in",
          "telephone": "+918806333633",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, Vyapari Dharmshala Complex, Beside Kamdar Petrol Pump, Gandhi Chowk",
            "addressLocality": "Latur",
            "addressRegion": "Maharashtra",
            "postalCode": "413512",
            "addressCountry": "IN"
          },
          "openingHours": ["Mo-Sa 09:00-21:00","Su 10:00-18:00"],
          "priceRange": "₹₹",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        }) }} />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Doctors />
        <Technology />
        <Testimonials />
        <FAQ />
        <LocalSEO />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/918806333633"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.215a.75.75 0 00.923.923l5.36-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.355l-.355-.212-3.686 1.01 1.01-3.686-.212-.355A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        <span className="absolute right-16 bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* ── Call Floating Button ── */}
      <a
        href="tel:8806333633"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 hover:shadow-[0_8px_32px_rgba(47,128,237,0.55)] transition-all duration-300 group"
        aria-label="Call Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
        </svg>
        <span className="absolute right-16 bg-darkText text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call Now
        </span>
      </a>
    </>
  );
}