import image11 from "../assets/images/21.jpg"
export default function SchoolUniformSection() {
  return (
    <div className="bg-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          School <span className="text-orange-500">Uniform</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover the standard attire designed to represent our institution with pride and unity.
        </p>
      </div>

      {/* Uniform Info Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Boys Section */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-4 border-b pb-2 border-orange-300">
            Boys :-
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Blue & white check shirt</li>
            <li>Beige pants</li>
            <li>White socks</li>
            <li>Black shoes with laces</li>
            <li>School tie</li>
            <li>School belt</li>
            <li>Navy blue blazer (for winters) with monogram</li>
          </ul>
        </div>

        {/* Girls Section */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-4 border-b pb-2 border-orange-300">
            Girls :-
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Blue & white check shirt</li>
            <li>Beige pants (Knee Length)</li>
            <li>White socks</li>
            <li>Black shoes</li>
            <li>School tie</li>
            <li>School belt</li>
            <li>Navy blue blazer (for winters) with monogram</li>
            <li>Navy blue leggings (for winters)</li>
          </ul>
        </div>
      </div>

      {/* Group Photo */}
      <div className="mt-16 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <img
          src={image11}
          alt="School Uniform Group"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
