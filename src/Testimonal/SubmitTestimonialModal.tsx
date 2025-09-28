import { useState } from "react";
import imageCompression from "browser-image-compression";

interface SubmitTestimonialModalProps {
  onClose: () => void;
}

const SubmitTestimonialModal = ({ onClose }: SubmitTestimonialModalProps) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !review || !photo) {
      setMessage("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      // Compress the photo before uploading
      const compressedPhoto = await imageCompression(photo, {
        maxSizeMB: 0.5, // Max file size in MB
        maxWidthOrHeight: 800, // Max dimension
        useWebWorker: true,
      });

      const formData = new FormData();
      formData.append("name", name);
      formData.append("review", review);
      formData.append("stars", stars.toString());
      formData.append("photo", compressedPhoto);

      const response = await fetch("https://school-backend1-ideo.onrender.com/api/testimonials", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setMessage(result.message || "Submitted!");

      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Share Your Testimonial
        </h3>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />

        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />

        <div className="mb-3">
          <label className="block mb-1 font-medium text-gray-700">Rating</label>
          <select
            value={stars}
            onChange={(e) => setStars(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {[5, 4, 3, 2, 1].map((s) => (
              <option key={s} value={s}>
                {s} Star{s > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        {message && <p className="text-center text-sm text-green-600 mb-3">{message}</p>}

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitTestimonialModal;

