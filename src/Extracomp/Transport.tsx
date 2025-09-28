import transportImage from "../assets/images/41.jpg";
import transportImage2 from "../assets/images/45.jpg";
import { FaCheckCircle } from "react-icons/fa"

const Transportation = () => {
  const transportPoints = [
    "Well-maintained and licensed vehicles.",
    "CCTV surveillance and GPS tracking.",
    "Trained drivers and bus attendants.",
    "First-aid kits available in every vehicle.",
    "Real-time updates to parents.",
    "Fixed route plans and safety protocols."
  ]

  return (
    <section className="px-4 py-10 md:px-8 lg:px-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-black">Our </span>
        <span className="text-orange-500">Transportation</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4">Facilities</h3>
          <ul className="space-y-2">
            {transportPoints.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-orange-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-black mb-4">Safety & Support</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-orange-500 mt-1" />
              <span>Students are supervised by staff during the journey.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-orange-500 mt-1" />
              <span>Parents are informed about pickup/drop times via app.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-orange-500 mt-1" />
              <span>Emergency contacts are available at all times.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={transportImage}
          alt="School Bus 1"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <img
          src={transportImage2}
          alt="School Bus 2"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </section>
  )
}

export default Transportation
