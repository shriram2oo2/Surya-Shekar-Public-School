"use client";

import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Trophy,
  Music,
  Heart,
  ZoomIn,
} from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import dance from "../assets/dance.png";

import sport from "../assets/sport.png";

import mataraniji from "../assets/pooja/mataraniji.jpg";

import mata1 from "../assets/pooja/1.jpg";

import mata2 from "../assets/pooja/2.jpg";

import mata3 from "../assets/pooja/3.jpg";

import mata4 from "../assets/pooja/4.jpg";

import mata5 from "../assets/pooja/5.jpg";
import childay from "../assets/childday.jpg";
import cult from "../assets/Culturalprogram/9.jpg";
import cult1 from "../assets/Culturalprogram/1.jpg";
import cult2 from "../assets/Culturalprogram/2.jpg";
import cult3 from "../assets/Culturalprogram/3.jpg";
import cult4 from "../assets/Culturalprogram/4.jpg";
import cult5 from "../assets/Culturalprogram/5.jpg";
import cult6 from "../assets/Culturalprogram/8.jpg";

interface Activity {
  title: string;
  image: string;
  description: string;
  gallery: string[];
  icon: JSX.Element;
  color: string;
}

export default function CoCurricularActivities() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const activities: Activity[] = [
    {
      title: "Dance",
      image: dance,
      description:
        "Express yourself through various dance forms including classical, contemporary, and folk dances.",
      gallery: [childay,cult6],
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-400 to-rose-400",
    },
    {
      title: "Sports",
      image: sport,
      description:
        "Participate in various sports activities including football, basketball, volleyball, and athletics.",
      gallery: [sport],
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
    },

    {
      title: "Spiritual & Worship",
      image: mataraniji,
      description:
        "Connect with your spiritual side through meditation, prayer sessions, and religious festivals.",
      gallery: [mata1, mata2, mata3, mata4, mata5],
      icon: <Heart className="w-6 h-6" />,
      color: "from-orange-400 to-amber-400",
    },
     {
      title: "Cultural program",
      image: cult,
      description:
        "Connect with your spiritual side through meditation, prayer sessions, and religious festivals.",
      gallery: [cult1,cult2,cult3,cult4,cult5],
      icon: <Heart className="w-6 h-6" />,
      color: "from-orange-400 to-amber-400",
    },
  ];

  const openGallery = (activity: Activity) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedActivity(null);
    setCurrentImageIndex(0);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) =>
        prev === selectedActivity.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedActivity.gallery.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;

      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="px-6 md:px-20 pt-16 pb-16 bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Co-Curricular <span className="text-orange-500">Activities</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Click on any activity to explore our photo gallery and see students
            in action
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              onClick={() => openGallery(activity)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.icon}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Click to view gallery
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{activity.gallery.length}</span>
                    <span>photos</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Image Gallery Modal */}
        {isGalleryOpen && selectedActivity && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
            <div className="relative w-full h-full max-w-7xl max-h-screen flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 text-white px-2 sm:px-0 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                  <div
                    className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${selectedActivity.color} flex-shrink-0`}
                  >
                    {selectedActivity.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold truncate">
                      {selectedActivity.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {currentImageIndex + 1} of{" "}
                      {selectedActivity.gallery.length} photos
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeGallery}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 transition-colors duration-300 flex-shrink-0 ml-4"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="flex-1 relative flex items-center justify-center mb-4 sm:mb-6 min-h-0 overflow-hidden">
                {/* Previous Button */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 transition-colors duration-300 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Image Container */}
                <div className="w-full h-full flex items-center justify-center px-12 sm:px-16">
                  <img
                    src={
                      selectedActivity.gallery[currentImageIndex] ||
                      "/placeholder.svg"
                    }
                    alt={`${selectedActivity.title} - Image ${
                      currentImageIndex + 1
                    }`}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                    style={{
                      maxHeight: "calc(100vh - 220px)",
                      maxWidth: "calc(100vw - 120px)",
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 transition-colors duration-300 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Thumbnail Strip and Navigation */}
              <div className="px-2 sm:px-0 flex-shrink-0">
                {/* Thumbnail Strip */}
                <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {selectedActivity.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-12 h-10 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "border-white shadow-lg scale-105"
                          : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-4">
                  {selectedActivity.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60 hover:scale-110"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
