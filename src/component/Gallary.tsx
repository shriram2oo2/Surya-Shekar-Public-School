import { useState } from "react";
import topstudent from "../assets/ts1.png";
import topstudents from "../assets/ts2.png";
import ActivitySection from "./Videocard";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img17 from "../assets/images/17.jpg";
import img19 from "../assets/images/19.jpg";
import img25 from "../assets/images/25.jpg";
import img26 from "../assets/images/26.jpg";
import img28 from "../assets/images/28.jpg";
import img31 from "../assets/images/31.jpg";
import img32 from "../assets/images/32.jpg";
import img39 from "../assets/images/39.jpg";
import img41 from "../assets/images/41.jpg";
import img45 from "../assets/images/45.jpg";
const gallerySections = [
  {
    title: "Academic",
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img13,
      img14,
      img15,
    ],
  },
  {
    title: "Sports",
    images: [topstudent, topstudents, topstudent,   img3,
      img4,
      img5,
      img6,
      img7,
      img8,],
  },
  {
    title: "Campus Tour",
    images: [img39, img2, img12, img41, img45],
  },
  {
    title: "School Tour",
    images: [img25, img26, img28, img31, img32],
  },
  {
    title: "Top Bright Students",
    images: [img6, img9, img19, img17],
  },
];

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("Academic"); // 👈 Default to Academic

  return (
    <>
      <div className="px-6 md:px-20 py-16 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            School <span className="text-orange-500">Gallery</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {gallerySections.map((section, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  activeSection === section.title
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700"
                } hover:bg-orange-400 hover:text-white transition`}
                onClick={() =>
                  setActiveSection(
                    activeSection === section.title ? null : section.title
                  )
                }
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(activeSection
              ? gallerySections.filter((s) => s.title === activeSection)
              : []
            ).flatMap((section) =>
              section.images.map((url, i) => (
                <div
                  key={`${section.title}-${i}`}
                  className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={url}
                    alt={`${section.title} ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))
            )}
          </div>

          {!activeSection && (
            <p className="text-center text-gray-500 mt-6">
              Please select a section to view images.
            </p>
          )}
        </div>
      </div>
      <ActivitySection />
    </>
  );
}
