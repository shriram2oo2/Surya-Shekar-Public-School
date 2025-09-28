"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Users,
  Award,
  Compass,
  BookOpen,
 
} from "lucide-react";

import libraylab from "../assets/ouraim/labreal.png"
import courage from "../assets/ouraim/courage.jpg"
import growth from "../assets/admission/classphot.jpg"
import creativit from "../assets/ouraim/creativity.png"
import truth from "../assets/ouraim/integrity.jpg"

const aims = [
  {
    image: truth,
    title: "Truth & Integrity",
    description:
      "We foster an environment where honesty, transparency, and moral values are the foundation of all learning and interactions.",
    icon: Compass,
    // color: "from-blue-600 to-indigo-600",
    quote: "Truth is the highest virtue",
  },
  {
    image: libraylab,
    title: "Wisdom & Knowledge",
    description:
      "We cultivate deep understanding and critical thinking, empowering students to make informed decisions throughout their lives.",
    icon: BookOpen,
    // color: "from-purple-600 to-violet-600",
    quote: "Knowledge is power, wisdom is strength",
  },
  {
    image: courage,
    title: "Courage & Resilience",
    description:
      "We build confident individuals who face challenges with determination and learn from every experience.",
    icon: Award,
    // color: "from-red-600 to-rose-600",
    quote: "Courage is not the absence of fear",
  },
  {
    image: growth,
    title: "Individualism & Growth",
    description:
      "We celebrate each student's unique talents and provide personalized pathways for their individual development.",
    icon: Users,
    // color: "from-green-600 to-emerald-600",
    quote: "Every child is unique and special",
  },
  {
    image: creativit,
    title: "Creativity & Innovation",
    description:
      "We encourage creative thinking and innovative problem-solving to prepare students for tomorrow's challenges.",
    icon: Lightbulb,
    // color: "from-orange-600 to-amber-600",
    quote: "Innovation distinguishes leaders",
  },
 
];

export default function OurAim() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, aims.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-6 lg:px-24 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-black">Our</span>{" "}
            <span className="text-orange-500">Aim</span>
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              An abode of{" "}
              <span className="text-blue-600 font-semibold">Truth</span>,{" "}
              <span className="text-purple-600 font-semibold">Wisdom</span> &{" "}
              <span className="text-red-600 font-semibold">Courage</span>
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Where individualism, creativity & innovation is valued & nurtured
            </p>
          </motion.div>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-2xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-200 border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-2xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-200 border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * (100 / cardsPerView)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {aims.map((aim, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-3 md:px-4 ${
                    cardsPerView === 1
                      ? "w-full"
                      : cardsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <AimCard
                    image={aim.image}
                    title={aim.title}
                    description={aim.description}
                    icon={aim.icon}
                    color={aim.color}
                    quote={aim.quote}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-orange-500 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-orange-500 h-2 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AimCard({
  image,
  title,
  description,
  icon: Icon,
  color,
  quote,
}: {
  image: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  quote: string;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
        />

        {/* Icon */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Quote Badge */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <p className="text-white text-xs italic text-center">"{quote}"</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="relative z-10">
          {/* Title with Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${color} text-white shadow-lg`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          {/* Bottom Border Animation */}
          <div
            className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
          />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
      />
    </motion.div>
  );
}
