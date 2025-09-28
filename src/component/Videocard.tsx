import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { title } from "framer-motion/client";
import { Youtube } from "lucide-react";

const activities = [
  {
    title: "DANCE PERFORMANCE BY CLASS 1 ON MOTHER'S DAY",
    youtube: "https://www.youtube.com/embed/oXZy0fcVMNo",
  },
  {
    title: "Campus Tour",
    youtube: "https://www.youtube.com/embed/dDTTYH-ivQ4",
  },
  {
    title: "Award Ceremony",
    youtube: "https://www.youtube.com/embed/FwbuccgIwis",
  },
  {
    title: "Campus Tour",
    youtube: "https://www.youtube.com/embed/dDTTYH-ivQ4",
  },
  {
    title: "Award Ceremony",
    youtube: "https://www.youtube.com/embed/FwbuccgIwis",
  },
   {
    title: "SCIENCE EXHIBITION ",
    youtube: "https://www.youtube.com/embed/gYdk35Gxp-0?si=b6Kc70NcQhKReBKp",
  },
  
];

const ActivitySection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1.1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 28 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 bg-gray-50 text-gray-800 relative">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-black uppercase text-sm tracking-widest font-semibold mb-2">
          Glimpses of Campus Life
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-black">Our </span>
          <span className="text-orange-500">School Activities</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
          Explore our vibrant campus life through selected event highlights.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="hidden md:flex items-center justify-center absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 bg-opacity-80 text-white w-10 h-10 rounded-full shadow hover:bg-orange-600"
        >
          <FaArrowLeft size={16} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={sliderRef}
          className="keen-slider overflow-x-auto sm:overflow-hidden px-1"
        >
          {activities.map((a, i) => (
            <div
              key={i}
              className="keen-slider__slide min-w-[90%] sm:min-w-0 bg-white p-5 rounded-2xl shadow-lg border border-gray-200"
            >
              <div className="h-72 sm:h-80 rounded-lg overflow-hidden">
                <iframe
                  src={a.youtube}
                  title={a.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-base sm:text-lg font-semibold">{a.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="hidden md:flex items-center justify-center absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 bg-opacity-80 text-white w-10 h-10 rounded-full shadow hover:bg-orange-600"
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default ActivitySection;
