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
        {/* 1. Hero */}
        <Hero />

        {/* 2. Stats already in Hero */}

        {/* 3. Services */}
        <Services />

        {/* 4. About Clinic */}
        <About />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Doctor Profiles */}
        <Doctors />

        {/* 7. Technology */}
        <Technology />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Local SEO */}
        <LocalSEO />

        {/* 11. Contact / Appointment */}
        <Contact />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Sticky floating call button */}
      <a href="tel:8806333633"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 hover:shadow-[0_8px_32px_rgba(47,128,237,0.55)] transition-all duration-300 group"
        aria-label="Call Now">
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