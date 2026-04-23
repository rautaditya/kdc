import { useEffect, useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="reveal text-4xl font-bold mb-4">
            Real Patient Videos
          </h2>
          <p className="reveal text-gray-500">
            Watch how our patients feel after their treatment.
          </p>
        </div>

        {/* Video Grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Video 1 */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/sURTQXxrynQ"
              title="Patient Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/LiaFMiSXJIg"
              title="Patient Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/zE8iYfWjw9w"
              title="Patient Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}