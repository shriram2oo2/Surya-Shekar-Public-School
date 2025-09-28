import { motion } from "framer-motion";
import sushant from "../assets/teacherimages/Sushant Kumar_Bachelor of Science (Mathematics).png";
import Praveen from "../assets/teacherimages//Praveen Kumar (Hindi Teacher) Bachelor of Arts  (Hindi).png";
import Shantirai from "../assets/teacherimages//Shanti Rai (English Teacher) Bachelor of Arts (English).png";
import Valentinarai from "../assets/teacherimages//Valentina Rai (Pre Primary Teacher).png";
import Chandenkumar from "../assets/teacherimages//Chandan Kumar Sharma (Science Teacher) (TGT)_B.Sc.(H)_Physics.png";
import manishakumari from "../assets/teacherimages/Manisha Kumari_(PGT)_ Master of Arts (English).png";
import headteacher from "../assets/teacherimages/head teacher.png";
import anuragkumnar from "../assets/teacherimages/Anurag Kumar (Computer Teacher).png"

const teachers = [
  {
    name: "Mr. Prakash Kumar",
    department: "Mathematics Department",
    
    image: headteacher,
  },
  {
    name: "Mr. Sushant Kumar",
    department: "Mathematics Department",
    
    image: sushant,
  },
  {
    name: "Mr. Praveen Kumar",
    department: "Hindi Department",
    image: Praveen,
  },
  {
    name: "Miss. Shanti Rai",
    department: "English Department",
    image: Shantirai,
  },
  {
    name: "Miss. Manisha Kumari",
    department: "English Department",

    image: manishakumari,
  },
  {
    name: "Mr. Chandan kumar",
    department: "Science Department",

    image: Chandenkumar,
  },
    {
    name: "Mr. Anurag Kumar",
    department: "Computer Department",

    image: anuragkumnar,
  },

  {
    name: "Miss. Valentina Rai",
    department: "Junior Department",

    image: Valentinarai,
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

const OurTeachers = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-orange-500">Teachers</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 overflow-hidden"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-50 object-cover"
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

export default OurTeachers;
