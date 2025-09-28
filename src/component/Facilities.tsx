"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Music, Monitor, TreePine, BookOpen, Trophy, Microscope ,ShieldCheck } from "lucide-react"
import computerlab from "../assets/images/43.jpg";
import bus from "../assets/images/41.jpg";

import schoolimgage from "../assets/school.png"
import msuic from "../assets/Culturalprogram/9.jpg"
import lib from "../assets/ouraim/labreal.png"
import scice from "../assets/ouraim/creativity.png";
import guard from "../assets/teacherimages/guard.jpg";
const facilities = [
  {
    image: msuic,
    title: "Music",
    description: "Music education enhances psychomotor skills and overall learning in a joyful way.",
    icon: Music,
    color: "from-purple-500 to-pink-500",
  },
  {
    image: computerlab,
    title: "Computer Labs",
    description: "Equipped with modern systems, our computer labs provide hands-on digital learning experiences.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
  },
  {
    image: schoolimgage,
    title: "Premises",
    description: "Our 5-acre lush green campus fosters a calm and inspiring learning environment.",
    icon: TreePine,
    color: "from-green-500 to-emerald-500",
  },
  {
    image: lib,
    title: "Library",
    description: "Our library holds a rich collection of textbooks and literature for all age groups.",
    icon: BookOpen,
    color: "from-amber-500 to-orange-500",
  },
 {
  image: bus,
  title: "School Bus Service",
  description: "Safe and reliable transportation ensuring students reach school and home on time.",
  icon: Trophy,
  color: "from-yellow-500 to-amber-500",
},
  {
    image: scice,
    title: "Science Labs",
    description: "Well-equipped laboratories for hands-on scientific experiments and research.",
    icon: Microscope,
    color: "from-indigo-500 to-purple-500",
  },
  {
  image: guard, // replace with actual import or path
  title: "Security",
  description: "Professional school guards ensuring campus safety and protection.",
  icon: ShieldCheck,
  color: "from-red-500 to-yellow-500",
}
]

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3) // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(1) // Mobile: 1 card
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, facilities.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-20 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Facilities</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A good head and a good heart are always a formidable combination.
        </motion.p>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-200 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-200 border border-white/20"
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
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-3 md:px-4 ${
                    cardsPerView === 1 ? "w-full" : cardsPerView === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <FacilityCard
                    image={facility.image}
                    title={facility.title}
                    description={facility.description}
                    icon={facility.icon}
                    color={facility.color}
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
                  ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125"
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
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FacilityCard({
  image,
  title,
  description,
  icon: Icon,
  color,
}: {
  image: string
  title: string
  description: string
  icon: any
  color: string
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
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
          className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
        />

        {/* Icon */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <Icon className="w-5 h-5 text-gray-700" />
        </div>

        {/* Floating Badge */}
        <div
          className={`absolute top-4 left-4 bg-gradient-to-r ${color} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0`}
        >
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Title with Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${color} text-white shadow-lg`}>
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
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
      />
    </motion.div>
  )
}
