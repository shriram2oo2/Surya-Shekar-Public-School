import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const activities = [
  {
    title: "PARENT TESTIMONIAL: Mother's Day Dance Performance",
    youtube: "https://www.youtube.com/embed/oXZy0fcVMNo",
  },
  {
    title: "STUDENT REVIEW: Our Campus Tour Experience",
    youtube: "https://www.youtube.com/embed/dDTTYH-ivQ4",
  },
  {
    title: "PARENT FEEDBACK: Award Ceremony Highlights",
    youtube: "https://www.youtube.com/embed/FwbuccgIwis",
  },
  {
    title: "STUDENT TESTIMONIAL: Exploring the Campus",
    youtube: "https://www.youtube.com/embed/dDTTYH-ivQ4",
  },
  {
    title: "PARENT REVIEW: Celebrating Achievements at the Awards",
    youtube: "https://www.youtube.com/embed/FwbuccgIwis",
  },
  {
    title: "STUDENT FEEDBACK: Science Exhibition Memories",
    youtube: "https://www.youtube.com/embed/gYdk35Gxp-0?si=b6Kc70NcQhKReBKp",
  },
];

const TestimonialSection = () => {
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
        <h2 className="text-4xl sm:text-4xl font-bold">
          <span className="text-black"> Our </span>
          <span className="text-orange-500">Testimonial</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative">
       

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
                <h4 className="text-base sm:text-lg font-semibold">
                  {a.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
