"use client"

import { useState } from "react"

const CampusTourHello = () => {
  const [activeTab, setActiveTab] = useState("academic")
  const [selectedImage, setSelectedImage] = useState(null)

  // Campus facilities data
  const facilities = [
    {
      id: "academic",
      title: "Academic Facilities",
      description: "Our state-of-the-art classrooms and labs provide the perfect environment for learning and growth.",
      places: [
        {
          name: "Smart Classrooms",
          description:
            "Equipped with interactive whiteboards, projectors, and high-speed internet for an immersive learning experience.",
          image:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Science Laboratories",
          description:
            "Modern labs with advanced equipment for physics, chemistry, and biology experiments and research.",
          image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Library & Resource Center",
          description:
            "A vast collection of books, digital resources, and quiet study spaces for research and reading.",
          image:
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Computer Labs",
          description:
            "Multiple computer labs with the latest hardware and software for technology education and digital skills.",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      id: "sports",
      title: "Sports Facilities",
      description: "We believe in the holistic development of students through sports and physical activities.",
      places: [
        {
          name: "Swimming Pool",
          description:
            "Temperature-controlled pool with trained instructors and lifeguards for swimming lessons and competitions.",
          image:
            "https://images.unsplash.com/photo-1576013551627-0ae7d1d6f79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Sport Courts",
          description:
            "Indoor and outdoor courts for basketball, volleyball, badminton, and tennis with professional coaching.",
          image:
            "https://images.unsplash.com/photo-1505666287802-931dc83a5dc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Football Field",
          description:
            "Full-sized football field with natural grass and spectator stands for matches and practice sessions.",
          image:
            "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
       
      ],
    },
    {
      id: "residential",
      title: "Residential Facilities",
      description: "Our boarding facilities provide a safe and nurturing environment for students.",
      places: [
        {
          name: "Student Dormitories",
          description:
            "Comfortable and secure accommodation with separate wings for boys and girls, supervised by resident wardens.",
          image:
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Dining Hall",
          description: "Spacious dining area serving nutritious and balanced meals prepared by professional chefs.",
          image:
            "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Recreation Rooms",
          description: "Common areas with indoor games, TV, and comfortable seating for relaxation and socializing.",
          image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Study Halls",
          description: "Quiet and well-lit spaces for evening study sessions with teacher supervision and assistance.",
          image:
            "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      id: "arts",
      title: "Arts & Culture",
      description: "We nurture creativity and artistic expression through world-class facilities.",
      places: [
        {
          name: "Performing Arts Center",
          description: "Modern auditorium with professional lighting and sound systems for performances and events.",
          image:
            "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Music Studios",
          description: "Soundproof rooms with pianos, drums, and various instruments for music lessons and practice.",
          image:
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Art Studios",
          description: "Bright and spacious studios for painting, sculpture, pottery, and other visual arts.",
          image:
            "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Dance Studios",
          description: "Mirrored studios with sprung floors for classical, contemporary, and folk dance training.",
          image:
            "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Parent",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "The campus tour was incredibly informative. The facilities are world-class, and the staff was very welcoming. My daughter is excited to join the school!",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Prospective Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "I was amazed by the sports facilities and science labs. The campus has everything I need to pursue my academic and athletic goals.",
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Education Consultant",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Having visited numerous schools across the country, I can confidently say that this campus stands out for its infrastructure and learning environment.",
    },
  ]

  // Tour schedule options
  const tourSchedules = [
    { day: "Monday", times: ["10:00 AM", "2:00 PM"] },
    { day: "Tuesday", times: ["10:00 AM", "2:00 PM"] },
    { day: "Wednesday", times: ["10:00 AM", "2:00 PM"] },
    { day: "Thursday", times: ["10:00 AM", "2:00 PM"] },
    { day: "Friday", times: ["10:00 AM", "2:00 PM"] },
    { day: "Saturday", times: ["11:00 AM"] },
  ]

  const handleScheduleTour = (e) => {
    e.preventDefault()
    alert("Thank you for scheduling a tour! We will contact you shortly to confirm your appointment.")
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Simple Header */}
      <div className="py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
         
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Campus <span className="text-orange-500">Tour</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Experience our world-class facilities and vibrant learning environment. Schedule a visit or take a virtual
            tour today.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Campus Overview */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black">
              Explore Our <span className="text-orange-500">Campus</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Our sprawling 25-acre campus offers state-of-the-art facilities designed to nurture academic excellence,
              creativity, and physical development.
            </p>
          </div>

          {/* Facility Tabs */}
          <div className="mb-8">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <div className="inline-flex rounded-md shadow-sm border border-orange-200" role="group">
                {facilities.map((facility, index) => (
                  <button
                    key={facility.id}
                    type="button"
                    className={`px-5 py-2 text-sm font-medium ${
                      activeTab === facility.id
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 hover:bg-orange-50"
                    } ${
                      index === 0
                        ? "rounded-l-lg"
                        : index === facilities.length - 1
                          ? "rounded-r-lg"
                          : "border-r border-orange-200"
                    }`}
                    onClick={() => setActiveTab(facility.id)}
                  >
                    {facility.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Facility Content */}
            {facilities.map(
              (facility) =>
                activeTab === facility.id && (
                  <div key={facility.id} className="animate-fadeIn">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-black">{facility.title}</h3>
                      <p className="text-gray-600 mt-2">{facility.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {facility.places.map((place, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                        >
                          <div
                            className="h-48 bg-cover bg-center cursor-pointer relative group"
                            style={{ backgroundImage: `url(${place.image})` }}
                            onClick={() => openImageModal(place.image)}
                          >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-lg mb-1 text-black">{place.name}</h4>
                            <p className="text-gray-600 text-sm">{place.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black">
              What Visitors <span className="text-orange-500">Say</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Hear from parents, students, and educators who have experienced our campus tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="bg-white border-2 border-orange-500 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Experience Our Campus?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
            Join us for a guided tour and discover why our school is the perfect place for your child's education.
          </p>
          <a
            href="#schedule-tour"
            className="inline-block px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300"
          >
            Schedule Your Visit Today
          </a>
        </div> */}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="max-w-4xl w-full relative">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Campus facility"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white bg-orange-500 hover:bg-orange-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              onClick={closeImageModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Add some custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default CampusTourHello
