import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Banner.css";

import bannerImg2 from "../assets/banner/1.jpg";
import bannerImg3 from "../assets/banner/2.jpg";
import bannerImg4 from "../assets/banner/3.jpg";

const images = [bannerImg2, bannerImg3, bannerImg4];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        {images.map((img, i) => (
          <div
            key={i}
            className="banner-slide"
            style={{
              opacity: i === index ? 1 : 0,
              zIndex: i === index ? 1 : 0,
            }}
          >
            <img src={img} alt={`Banner ${i + 1}`} className="banner-image" />
          </div>
        ))}

        <button
          onClick={handlePrev}
          className="banner-button banner-button-left"
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="banner-button banner-button-right "
          aria-label="Next Slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;



