import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Mrs. Anjali Sharma",
    position: "Principal",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Rajesh Verma",
    position: "Math Teacher",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ms. Neha Mehta",
    position: "Science Teacher",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Mr. Amit Sinha",
    position: "Sports Coach",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function TeamSection() {
  return (
    <div className="py-16 px-4 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Meet Our <span className="text-orange-500">Faculty</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Dedicated educators helping students reach their full potential
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-65 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
