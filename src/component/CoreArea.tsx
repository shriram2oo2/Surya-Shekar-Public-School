import { ArrowRight } from "lucide-react"

const coreLearningAreas = [
  {
    title: "Foundational Learning",
    desc: "Focus on phonics, numbers, shapes, and basic life skills through playful methods.",
  },
  {
    title: "Creative Exploration",
    desc: "Boosting reading, writing, and early math while sparking imagination and curiosity.",
  },
  {
    title: "Hands-on Discovery",
    desc: "Encouraging project-based learning and experiential exploration of real-world concepts.",
  },
  {
    title: "Understanding the World",
    desc: "Developing deeper knowledge of science, nature, language, and the environment.",
  },
  {
    title: "Skill Building",
    desc: "Sharpening communication, logic, and independent thinking through structured activities.",
  },
  {
    title: "Inquiry & Research",
    desc: "Promoting question-based learning, investigations, and curiosity-driven projects.",
  },
  {
    title: "Technology in Learning",
    desc: "Integrating digital tools, coding basics, and collaborative STEM-based challenges.",
  },
  {
    title: "Creative Thinking & Expression",
    desc: "Nurturing art, innovation, career exposure, and expressive storytelling.",
  },
]

const CoreAreas = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">
          Core <span className="text-orange-500">Learning Areas</span>
        </h2>
        <p className="text-lg text-gray-600">A progressive approach to develop young minds from basics to mastery.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coreLearningAreas.map((area, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md ${
              index % 2 === 0
                ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                : "bg-gradient-to-br from-purple-600 to-purple-700 text-white"
            } flex flex-col justify-between hover:shadow-lg transition-shadow duration-300`}
          >
            <div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-sm opacity-90">{area.desc}</p>
            </div>
            <div className="mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-md hover:bg-white/30 transition-colors duration-200">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreAreas

