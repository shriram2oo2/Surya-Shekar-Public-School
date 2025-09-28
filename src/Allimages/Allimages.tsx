import { useEffect, useState } from "react";
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
import img16 from "../assets/images/16.jpg";
import img17 from "../assets/images/17.jpg";
import img18 from "../assets/images/18.jpg";
import img19 from "../assets/images/19.jpg";
import img20 from "../assets/images/20.jpg";
import img21 from "../assets/images/21.jpg";
import img22 from "../assets/images/22.jpg";
import img23 from "../assets/images/23.jpg";
import img24 from "../assets/images/24.jpg";
import img25 from "../assets/images/25.jpg";
import img26 from "../assets/images/26.jpg";
import img27 from "../assets/images/27.jpg";
import img28 from "../assets/images/28.jpg";
import img29 from "../assets/images/29.jpg";
import img30 from "../assets/images/30.jpg";
import img31 from "../assets/images/31.jpg";
import img32 from "../assets/images/32.jpg";
import img33 from "../assets/images/33.jpg";
import img34 from "../assets/images/34.jpg";
import img35 from "../assets/images/35.jpg";
import img36 from "../assets/images/36.jpg";
import img37 from "../assets/images/37.jpg";
import img38 from "../assets/images/38.jpg";
import img39 from "../assets/images/39.jpg";
import img40 from "../assets/images/40.jpg";
import img100 from "../Allimages/100.jpg";

const AllImagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = [
    img5,
    img2,
    img3,
    img4,
    img100,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img1,
  ].map((src, i) => ({
    id: i + 1,
    src,
    alt: `School Image ${i + 1}`,
  }));

  const imageCount = allImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }, 2500);
    return () => clearInterval(interval);
  }, [imageCount]);

  const getVisibleImages = (count) => {
    return Array.from(
      { length: count },
      (_, i) => allImages[(currentIndex + i) % imageCount]
    );
  };

  return (

    <div className="py-16 px-4 bg-transparent ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6">
          Campus<span className="text-orange-500"> Snapshots</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          A continuous showcase of our school's vibrant moments.
        </p>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden mb-4 px-4">
        {(() => {
          const visibleImage = getVisibleImages(1)[0];
          return (
            <div className="relative h-80 overflow-hidden shadow-2xl rounded-2xl transition-all duration-1000">
              <img
                src={visibleImage.src}
                alt={visibleImage.alt}
                className="w-full h-full object-cover transition-all duration-1000 rounded-2xl"
              />
            </div>
          );
        })()}
      </div>

      {/* Tablet */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-8 max-w-4xl mx-auto mb-4">
        {getVisibleImages(2).map((img) => (
          <div
            key={img.id}
            className="relative group h-72 overflow-hidden shadow-xl rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid xl:hidden grid-cols-3 gap-14 max-w-6xl mx-auto mb-4">
        {getVisibleImages(3).map((img, index) => (
          <div
            key={img.id}
            className={`relative group h-80 overflow-hidden shadow-xl rounded-2xl transition-all duration-1000 ${
              index === 1
                ? "scale-105 shadow-2xl ring-4 ring-orange-200"
                : "hover:scale-105"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* XL Screens */}
      <div className="hidden xl:grid grid-cols-4 gap-8 max-w-7xl mx-auto mb-0">
        {getVisibleImages(4).map((img, index) => (
          <div
            key={img.id}
            className={`relative group h-72 overflow-hidden shadow-lg rounded-2xl transition-all duration-1000 ${
              index === 1 || index === 2
                ? "scale-105 shadow-xl"
                : "hover:scale-105"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImagesSection;
