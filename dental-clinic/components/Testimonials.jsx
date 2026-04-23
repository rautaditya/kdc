import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const videos = [
    "https://youtube.com/shorts/sURTQXxrynQ",
    "https://youtube.com/shorts/LiaFMiSXJIg",
    "https://youtube.com/shorts/zE8iYfWjw9w",
  ];

  // Center scroll when video changes
  useEffect(() => {
    const container = containerRef.current;
    const child = container.children[activeIndex];

    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Real Patient Videos
          </h2>
          <p className="text-gray-500">
            Watch how our patients feel after their treatment.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory"
        >
          {videos.map((url, index) => (
            <div
              key={index}
              className={`snap-center flex-shrink-0 w-[280px] transition-all duration-500 ${
                activeIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50"
              }`}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ReactPlayer
                  url={url}
                  playing={activeIndex === index}
                  muted
                  controls
                  width="100%"
                  height="500px"
                  onEnded={() =>
                    setActiveIndex((prev) => (prev + 1) % videos.length)
                  }
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}