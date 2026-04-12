import Link from "next/link";
import { useRouter } from "next/router";

const SERVICES_DATA = {
  "dental-implants": {
    title: "Dental Implants",
    image: "/images/implant.jpg",
    intro:
      "Dental implants are a permanent and modern solution for replacing missing teeth. They look natural, feel comfortable, and help restore full dental function.",
    details:
      "A dental implant is a titanium post placed into the jawbone, acting like an artificial tooth root. Once it heals properly, a crown is attached on top. This treatment is highly effective for patients who have lost one or more teeth and want a durable, aesthetic, and long-term solution.",
    benefits: [
      "Natural look and feel",
      "Improves chewing ability",
      "Supports jawbone health",
      "Long-lasting treatment",
    ],
    process: [
      "Dental examination and X-ray",
      "Implant placement in jawbone",
      "Healing period for integration",
      "Crown placement on implant",
    ],
  },

  "root-canal-treatment": {
    title: "Root Canal Treatment",
    image: "/images/rootcanal.jpeg",
    intro:
      "Root canal treatment helps save an infected or damaged tooth instead of removing it.",
    details:
      "In this procedure, the infected pulp inside the tooth is removed carefully. The root canals are cleaned, disinfected, and sealed. Modern rotary instruments make this treatment faster, safer, and more comfortable. It helps remove pain and preserves your natural tooth structure.",
    benefits: [
      "Saves the natural tooth",
      "Removes infection",
      "Relieves pain",
      "Prevents extraction",
    ],
    process: [
      "Examination and diagnosis",
      "Cleaning infected pulp",
      "Disinfection of canal",
      "Sealing and restoration of tooth",
    ],
  },

  "braces-orthodontics": {
    title: "Braces & Orthodontics",
    image: "/images/braces.jpeg",
    intro:
      "Orthodontic treatment is used to align teeth properly and improve smile appearance and bite correction.",
    details:
      "Braces and orthodontic solutions help correct crooked teeth, gaps, crowding, and bite problems. Depending on the case, treatment may include metal braces, ceramic braces, or clear aligners. Proper alignment not only improves appearance but also makes oral hygiene easier and improves dental health.",
    benefits: [
      "Straightens teeth",
      "Improves bite function",
      "Boosts smile confidence",
      "Improves oral hygiene",
    ],
    process: [
      "Orthodontic consultation",
      "Smile and bite evaluation",
      "Custom treatment planning",
      "Regular adjustment visits",
    ],
  },

  "teeth-whitening": {
    title: "Teeth Whitening",
    image: "/images/whitening.jpg",
    intro:
      "Teeth whitening is a cosmetic treatment that brightens stained or discolored teeth and improves smile appearance.",
    details:
      "Professional teeth whitening is performed safely in the clinic using advanced whitening agents. It can help remove stains caused by tea, coffee, smoking, or aging. The procedure is fast, safe, and provides visible brightness in a short time.",
    benefits: [
      "Brighter smile",
      "Quick visible results",
      "Safe treatment",
      "Improves confidence",
    ],
    process: [
      "Shade evaluation",
      "Teeth preparation",
      "Whitening gel application",
      "Final cleaning and smile check",
    ],
  },

  "tooth-extraction": {
    title: "Tooth Extraction",
    image: "/images/extraction.jpg",
    intro:
      "Tooth extraction is done when a tooth is badly damaged, decayed, loose, or causing pain and complications.",
    details:
      "Our clinic performs tooth extraction with patient comfort as a priority. Using modern methods and careful planning, extractions are done gently and safely. Aftercare instructions are also provided to support quick healing and prevent complications.",
    benefits: [
      "Removes painful tooth",
      "Stops spread of infection",
      "Protects nearby teeth",
      "Safe and effective procedure",
    ],
    process: [
      "Consultation and X-ray",
      "Local anesthesia",
      "Gentle tooth removal",
      "Aftercare and recovery guidance",
    ],
  },

  "dental-cleaning": {
    title: "Dental Cleaning",
    image: "/images/cleaning.jpg",
    intro:
      "Dental cleaning is an essential preventive treatment that helps keep teeth and gums healthy.",
    details:
      "This procedure includes scaling and polishing to remove plaque, tartar, and stains. Dental cleaning helps prevent gum disease, bad breath, and cavities. It is recommended at regular intervals to maintain oral hygiene and keep the smile fresh and clean.",
    benefits: [
      "Removes plaque and tartar",
      "Prevents gum disease",
      "Freshens breath",
      "Maintains oral health",
    ],
    process: [
      "Oral checkup",
      "Scaling procedure",
      "Polishing teeth",
      "Oral hygiene guidance",
    ],
  },
};

export default function ServiceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-darkText mb-4">Service not found</h1>
          <Link href="/" className="text-primary font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary font-semibold mb-8">
          ← Back to Home
        </Link>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[260px] sm:h-[420px] object-cover rounded-3xl shadow-lg mb-8"
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-darkText mb-4">
          {service.title}
        </h1>

        <p className="text-lg text-darkText/70 leading-relaxed mb-8">
          {service.intro}
        </p>

        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-darkText mb-4">
            Detailed Information
          </h2>
          <p className="text-darkText/70 leading-relaxed">
            {service.details}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-darkText mb-4">
              Benefits
            </h2>
            <ul className="space-y-3 text-darkText/75">
              {service.benefits.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-50 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-darkText mb-4">
              Treatment Process
            </h2>
            <ul className="space-y-3 text-darkText/75">
              {service.process.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-glow"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}