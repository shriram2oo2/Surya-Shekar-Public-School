import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Use next/link if it's a Next.js project

const curriculumItems = [
  {
    title: "Academics",
    description:
      "We emphasize a modern academic plan that balances subject rigor with creativity and real-world.",
    bg: "bg-[#4B3F91]", // Purple tone from your theme
    route: "/classes",
  },
  {
    title: "Cocurriculum",
    description:
      "Holistic development through diverse cocurricular activities that support academic growth.",
    bg: "bg-[#0F6C5B]", // Dark green from your CTA theme
    route: "/silentfeature",
  },
  {
    title: "Community Engagement",
    description:
      "We build strong community ties that enrich student life and encourage civic responsibility.",
    bg: "bg-[#E2645A]", // Coral red tone for variation
    route: "/blog",
  },
];

const CurriculumSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800">
          Our <span className="text-orange-500">Curriculum</span>
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 bg-green-600 rounded-full"></div>
        <p className="mt-6 text-lg max-w-xl mx-auto text-gray-700">
          Empowering students with the skills and knowledge to shape a brighter
          future for themselves and the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {curriculumItems.map((item, index) => (
           <Link key={index} to={item.route}>
          <div
            key={index}
            className={`p-8 rounded-xl text-white flex flex-col justify-between shadow-md transition hover:scale-105 ${item.bg}`}
          >
            <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
            <p className="flex-grow text-sm md:text-base mb-6">
              {item.description}
            </p>
            <div className="flex justify-center">
              <button className="w-12 h-12 rounded-full bg-white text-blue-700 hover:text-blue-900 shadow-md flex items-center justify-center">
                <FaArrowRight />
              </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection;
