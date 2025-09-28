"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import image1 from "../assets/school.png"

export default function CampusTour() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-slate-800">Campus</span> <span className="text-orange-500">Tour</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experience <span className="font-semibold text-slate-700">Surya Shekhar Public School</span> virtually! Step
          into our modern classrooms, labs, libraries, and sports areas—all from the comfort of your home.
        </motion.p>

        {/* Video/Image Container */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
          style={{
            aspectRatio: "16/9",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {!isVideoPlaying ? (
            // Image with Play Button
            <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
              <img
                src={image1 || "/placeholder.svg"}
                alt="Surya Shekhar Public School Campus"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="bg-orange-500 hover:bg-orange-600 rounded-full p-6 sm:p-7 md:p-8 shadow-2xl transition-all duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                </motion.div>
              </div>

              {/* Mobile tap indicator */}
              <div className="absolute bottom-6 left-6 sm:hidden">
                <div className="bg-black bg-opacity-60 text-white text-sm px-3 py-2 rounded-lg backdrop-blur-sm">
                  Tap to play video
                </div>
              </div>
            </div>
          ) : (
            // YouTube Video
            <div className="relative w-full h-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dDTTYH-ivQ4?si=dgIGBbGSkL3aT0jB&autoplay=1&rel=0&modestbranding=1"
                title="Surya Shekhar Public School Campus Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>

        {/* Back to Preview Button */}
        {isVideoPlaying && (
          <motion.button
            className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setIsVideoPlaying(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            ← Back 
          </motion.button>
        )}
      </div>
    </section>
  )
}


