import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import infraImage from "../assets/school.png";

const points = [
  "24x7 CCTV surveillance for campus safety.",
  "Wi-Fi enabled campus supporting academic and co-curricular activities.",
  "Modern science labs and digital classrooms.",
  "Library to encourage reading and research.",
  "Activity spaces for dance, music, theatre, and painting.",
];

const InfrastructureSection = () => {
  return (
    <div className="bg-white px-6 md:px-16 pt-8 pb-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        <span className="text-gray-800">Infra</span>
        <span className="text-orange-500">structure</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We believe world-class infrastructure plays a vital role in
            nurturing student growth. Our campus offers a perfect blend of
            technology, creativity, and safety to support students from Grade 1
            to Grade 10.
          </p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="text-orange-500 mt-1" size={18} />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={infraImage}
            alt="Infrastructure"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default InfrastructureSection;
