import { FaCheckCircle } from "react-icons/fa"
import featureImage from "../assets/images/13.jpg";

const SalientFeatures = () => {
  const features = [
    "Well-furnished classrooms.",
    "Teacher student ratio of 1:30",
    "Smart classes.",
    "Experienced teaching staff.",
    "State of the art computer lab.",
    "Spacious play ground.",
    "Co-curricular activities",
    "Well furnished hostel",
    "Round the clock security and CCTV surveillance.",
    "24 Hours power backup.",
  ]

  const curriculum = [
    "Central Board of Secondary Education.",
    "Teaching & mentoring by highly qualified & trained faculty."
  ]

  const method = [
    "Interactive classes",
    "Use of audio & visual teaching aids.",
    "Individual attention towards a child's academic progress.",
    "Peer teach by students.",
    "Group discussion."
  ]

  return (
    <section className="px-4 py-10 md:px-8 lg:px-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-black">Salient </span>
        <span className="text-orange-500">Features</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Features List */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4">Features</h3>
          <ul className="space-y-2">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-orange-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Curriculum */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4">Curriculum</h3>
          <ul className="space-y-2">
            {curriculum.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-orange-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Method of Teaching</h3>
          <ul className="space-y-2">
            {method.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-orange-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Below Content */}
   <div className="mt-10 flex justify-center">
  <img
    src={featureImage}
    alt="Students Assembly"
    className="w-[800px] h-[500px] rounded-lg shadow-lg object-cover"
  />
</div>
    </section>
  )
}

export default SalientFeatures
