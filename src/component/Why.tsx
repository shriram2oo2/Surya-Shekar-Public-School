import { motion } from "framer-motion";

const WhySuryaShekhar = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-3 text-center">
  <span className="text-black">Why </span>
  <span className="text-orange-500">Surya Shekhar Public School</span>
</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We empower students with creativity, confidence, and critical thinking to thrive in a changing world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-orange-100 rounded-xl p-8 shadow-lg space-y-5"
        >
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              A nurturing environment where learning and innovation grow together.
            </li>
            <li>
              Hands-on, tech-integrated education to face modern global challenges.
            </li>
            <li>
              Focus on digital literacy & STEM for future-ready careers.
            </li>
            <li>
              Leadership & entrepreneurship development from early grades.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-orange-50 rounded-xl p-8 shadow-lg space-y-5"
        >
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              Makerspaces & innovation labs for hands-on creativity and problem-solving.
            </li>
            <li>
              SEL programs that build resilience and emotional intelligence.
            </li>
            <li>
              Globally-aligned curriculum blending academics and life skills.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySuryaShekhar;
