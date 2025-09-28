import { useState } from "react";
import CoCurricularActivities from "../component/Coactivits";
import { blogPosts } from "../data/blogPosts";


const categories = [
  "All",
  "Child Learning",
  "Days and Festivals",
  "Extra Curricular Activities and Sports",
  "Parents Corner",
  "Skill Development",
  "Technology",
  "School Locations"
];

const BlogSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <CoCurricularActivities />

      <div className="bg-white px-6 md:px-16 py-16 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Our <span className="text-orange-500">Blog</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-black border-black hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-black rounded-2xl shadow-md hover:shadow-orange-400 transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-md font-semibold text-black mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  {expandedId === post.id ? post.content : post.excerpt}
                </p>
                <button
                  onClick={() => toggleReadMore(post.id)}
                  className="text-sm font-medium text-orange-500 hover:text-orange-700 transition"
                >
                  {expandedId === post.id ? "Show Less" : "Read More"} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;


