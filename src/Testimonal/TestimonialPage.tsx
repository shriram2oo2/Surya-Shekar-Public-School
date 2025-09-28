// "use client"

// import { useEffect, useState } from "react"
// import SubmitTestimonialModal from "../Testimonal/SubmitTestimonialModal"

// interface Testimonial {
//   _id: string
//   name: string
//   review: string
//   stars: number
//   photo: string
// }

// const TestimonialPage = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([])
//   const [showModal, setShowModal] = useState(false)

//   useEffect(() => {
//     fetch("https://school-backend1-ideo.onrender.com/api/testimonials")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//   }, [])

//   return (
//     <section className="bg-gray-50 pt-4 pb-0 mb-6 sm:px-5 lg:px-8 overflow-hidden">
//       <div className="text-center mb-4">
//         <h2 className="text-4xl font-bold text-gray-800">
//           What <span className="text-orange-500">People Say</span>
//         </h2>
//         <p className="mt-1 text-gray-600 text-lg">Hear from our students and parents</p>
//       </div>
//       <div className="flex justify-center mb-6">
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
//         >
//           Share Your Review's
//         </button>
//       </div>

//       {/* Continuous Scrolling Container */}
//       <div className="relative w-full overflow-hidden">
//         <div className="animate-scroll flex gap-6 lg:gap-4">
//           {/* Row 1 */}
//           {testimonials.map((t) => (
//             <Card key={t._id + "-1"} testimonial={t} />
//           ))}
//           {/* Row 2 (duplicate for seamless loop) */}
//           {testimonials.map((t) => (
//             <Card key={t._id + "-2"} testimonial={t} />
//           ))}
//         </div>
//       </div>

//       {showModal && <SubmitTestimonialModal onClose={() => setShowModal(false)} />}

//       {/* CSS Animation Fix */}
//       <style>{`
//         .animate-scroll {
//           display: flex;
//           flex-wrap: nowrap;
//           width: max-content;       /* content defines width */
//           min-width: 200%;          /* ensures two rows fill screen */
//           animation: scroll 40s linear infinite;
//         }
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   )
// }

// const Card = ({ testimonial }: { testimonial: Testimonial }) => (
//   <div className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-[420px]">
//     <div className="flex justify-center mb-4">
//       <img
//         src={
//           testimonial.photo.startsWith("http")
//             ? testimonial.photo
//             : `https://school-backend1-ideo.onrender.com/uploads/${testimonial.photo}`
//         }
//         alt={testimonial.name}
//         className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-orange-400 shadow-sm transition duration-300"
//         onError={(e) =>
//           (e.currentTarget.src = "/placeholder.svg?height=100&width=100")
//         }
//       />
//     </div>
//     {/* Review (fixed max height, scroll if too long) */}
//     <p className="text-gray-700 mb-4 text-md italic flex-grow overflow-hidden line-clamp-5">
//       "{testimonial.review}"
//     </p>
//     <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
//     <div className="text-yellow-400 mt-2 text-lg">
//       {"★".repeat(testimonial.stars)}
//       {"☆".repeat(5 - testimonial.stars)}
//     </div>
//   </div>
// )

// export default TestimonialPage
// "use client"

// import { useEffect, useState } from "react"
// import { ChevronLeft, ChevronRight, Music, Monitor, Building } from "lucide-react"
// import SubmitTestimonialModal from "../Testimonal/SubmitTestimonialModal"

// interface Testimonial {
//   _id: string
//   name: string
//   review: string
//   stars: number
//   photo: string
// }

// const TestimonialPage = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([])
//   const [showModal, setShowModal] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     fetch("https://school-backend1-ideo.onrender.com/api/testimonials")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//   }, [])

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3))
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3))
//   }

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index * 3)
//   }

//   const totalPages = Math.ceil(testimonials.length / 3)
//   const currentPage = Math.floor(currentIndex / 3)

//   return (
//     <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-gray-800 mb-4">
//             Our <span className="text-orange-500">Facilities</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             A good head and a good heart are always a formidable combination.
//           </p>
//         </div>

//         <div className="flex justify-center mb-8">
//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
//           >
//             Share Your Review's
//           </button>
//         </div>

//         <div className="relative">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
//             disabled={testimonials.length <= 3}
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
//             disabled={testimonials.length <= 3}
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>

//           <div className="overflow-hidden mx-16">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div key={testimonial._id} className="w-1/3 flex-shrink-0 px-4">
//                   <FacilityCard testimonial={testimonial} index={index} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8 space-x-2">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === currentPage ? "bg-orange-500" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {showModal && <SubmitTestimonialModal onClose={() => setShowModal(false)} />}
//       </div>
//     </section>
//   )
// }

// const FacilityCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
//   const getIcon = (index: number) => {
//     const icons = [
//       { Icon: Music, bgColor: "bg-purple-100", iconColor: "text-purple-600" },
//       { Icon: Monitor, bgColor: "bg-blue-100", iconColor: "text-blue-600" },
//       { Icon: Building, bgColor: "bg-green-100", iconColor: "text-green-600" },
//     ]
//     return icons[index % 3]
//   }

//   const { Icon, bgColor, iconColor } = getIcon(index)

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={
//             testimonial.photo.startsWith("http")
//               ? testimonial.photo
//               : `https://school-backend1-ideo.onrender.com/uploads/${testimonial.photo}`
//           }
//           alt={testimonial.name}
//           className="w-full h-full object-cover"
//           onError={(e) => (e.currentTarget.src = "/placeholder.svg?height=256&width=400")}
//         />
//       </div>

//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <div className={`${bgColor} p-3 rounded-lg mr-4`}>
//             <Icon className={`w-6 h-6 ${iconColor}`} />
//           </div>
//           <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
//         </div>

//         <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{testimonial.review}</p>

//         <div className="flex items-center justify-between">
//           <div className="text-yellow-400 text-lg">
//             {"★".repeat(testimonial.stars)}
//             {"☆".repeat(5 - testimonial.stars)}
//           </div>
//           <span className="text-xs text-gray-500">Review</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TestimonialPage

"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import SubmitTestimonialModal from "../Testimonal/SubmitTestimonialModal"

interface Testimonial {
  _id: string
  name: string
  review: string
  stars: number
  photo: string
}

export default function TestimonialPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [showModal, setShowModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  // Fetch testimonials
  useEffect(() => {
    fetch("https://school-backend1-ideo.onrender.com/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
  }, [])

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3)
      else if (window.innerWidth >= 768) setCardsPerView(2)
      else setCardsPerView(1)
    }
    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  const goToSlide = (index: number) => setCurrentIndex(Math.min(index, maxIndex))

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
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
          What <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent  ">People Say</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real experiences and feedback from our students and parents.
        </motion.p>

        {/* Button to open Modal */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Share Your Review
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-200 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-200 border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * (100 / cardsPerView)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className={`flex-shrink-0 px-3 md:px-4 ${
                    cardsPerView === 1 ? "w-full" : cardsPerView === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
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

        {/* Modal */}
        {showModal && <SubmitTestimonialModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-80 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image (Circular and centered) */}
      <div className="flex justify-center mt-6">
        <img
          src={testimonial.photo.startsWith("http") ? testimonial.photo : `https://school-backend1-ideo.onrender.com/uploads/${testimonial.photo}`}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
          onError={(e) => (e.currentTarget.src = "/placeholder.svg?height=100&width=100")}
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2">
            {testimonial.name}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
            {testimonial.review}
          </p>
        </div>
        {/* Stars */}
        <div className="flex justify-center items-center text-yellow-400 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.stars ? "fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}






