import { motion } from "framer-motion";
import {
  UserCheck,
  Award,
  Layers,
  Headphones,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import schoolimage from "../assets/school.png";

const features = [
  {
    icon: (
      <UserCheck className="text-orange-500 text-3xl sm:text-4xl md:text-5xl" />
    ),
    title: "Awesome Teachers",
    desc: "Our educators bring experience, passion, and innovation to every classroom.",
  },
  {
    icon: <Award className="text-blue-500 text-3xl sm:text-4xl md:text-5xl" />,
    title: "Global Certificate",
    desc: "We provide internationally recognized curriculum and certifications.",
  },
  {
    icon: (
      <Layers className="text-orange-500 text-3xl sm:text-4xl md:text-5xl" />
    ),
    title: "Best Programs",
    desc: "Diverse academic and co-curricular programs to shape holistic learners.",
  },
  {
    icon: (
      <Headphones className="text-blue-500 text-3xl sm:text-4xl md:text-5xl" />
    ),
    title: "Student Support Service",
    desc: "We ensure emotional, academic and tech support for every student.",
  },
];

const WelcomeSection = () => {
  return (
    <section className="bg-white text-gray-800 mt-5">
      {/* Top Heading */}
      <motion.div
  className="text-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-16"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-black">
    Welcome to{" "}
    <span className="text-orange-500">Surya Shekhar Public School</span>
  </h2>
</motion.div>

      {/* Adjusted Spacing Below Heading */}
      <div className="h-1 sm:h-2 md:h-4"></div>

      {/* Half Image, Half School Info */}
      <div className="px-4 sm:px-6 md:px-16">
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Side - School Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={schoolimage}
              alt="Surya Shekhar Public School"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side - School Information */}
          <div className="w-full lg:w-1/2 space-y-6 mb-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                About Our School
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Established with a vision to nurture young minds, Surya Shekhar
                Public School has been a beacon of excellence in education for
                over two decades. We believe in creating an environment where
                students can explore, learn, and grow into confident individuals
                ready to face tomorrow's challenges.
              </p>
            </motion.div>

            {/* School Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="text-2xl sm:text-3xl font-bold text-orange-500">
                  500+
                </h4>
                <p className="text-sm sm:text-base text-gray-600">Students</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="text-2xl sm:text-3xl font-bold text-blue-500">
                  15+
                </h4>
                <p className="text-sm sm:text-base text-gray-600">Teachers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="text-2xl sm:text-3xl font-bold text-orange-500">
                  8+
                </h4>
                <p className="text-sm sm:text-base text-gray-600">Years</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="text-2xl sm:text-3xl font-bold text-blue-500">
                  98%
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Success Rate
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <div className="flex items-center space-x-3">
                <MapPin className="text-orange-500 text-xl" />
                <span className="text-sm sm:text-base text-gray-600">
                  Thatiya, Rosera, Samastipur, Bihar PIN: 848101
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-500 text-xl" />
                <span className="text-sm sm:text-base text-gray-600">
                  +91 87574 44683
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500 text-xl" />
                <span className="text-sm sm:text-base text-gray-600">
                  sspsrosera@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-500 text-xl" />
                <span className="text-sm sm:text-base text-gray-600">
                  Mon - Sat: 8:00 AM - 4:00 PM
                </span>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
