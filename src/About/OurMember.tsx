import { motion } from "framer-motion";
import member from "../assets/teacherimages/Purushottam Mishra (Accountant).png";


const teachers = [
  {
    name: "Mr. Purushottam Mishra",
    department: "School Manager",
    image: member
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: "spring",
    },
  }),
};

const OurMember = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-orange-500">Administration</span>
      </h2>

      <div className="flex justify-center">
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 overflow-hidden max-w-sm"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-purple-800 mb-1">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {teacher.department}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurMember;


