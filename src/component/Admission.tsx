import type React from "react";
import { useState } from "react";
import admsison from "../assets/admission/adm.jpg"

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    "parent name": "",
    age: "",
    "phone number": "",
    grade: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    previousSchool: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://sheetdb.io/api/v1/5g91yigpq424x", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (res.ok) {
        alert("🎉 Thank you! Your enquiry has been submitted.");
        setFormData({
          name: "",
          "parent name": "",
          age: "",
          "phone number": "",
          grade: "",
          dateOfBirth: "",
          gender: "",
          address: "",
          previousSchool: "",
        });
      } else {
        alert("❌ Failed to submit. Try again.");
      }
    } catch (err) {
      alert("Error: " + (err as Error).message);
    }

    setLoading(false);
  };

  const gradeOptions = [
    "Nursery",
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-black ">Admission </span>
            <span className="text-orange-500">Enquiry</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Join our school community and give your child the best education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="w-full space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src= {admsison}
                alt="School Building"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-6">
                Why Choose Our School?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Excellence in Education",
                    desc: "Comprehensive curriculum designed for holistic development",
                  },
                  {
                    title: "Experienced Faculty",
                    desc: "Qualified teachers committed to student success",
                  },
                  {
                    title: "Modern Facilities",
                    desc: "State-of-the-art classrooms, labs, and sports facilities",
                  },
                  {
                    title: "Individual Attention",
                    desc: "Small class sizes ensuring personalized learning",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
              Admission Enquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter student name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="parent name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Parent Name *
                  </label>
                  <input
                    id="parent name"
                    name="parent name"
                    type="text"
                    placeholder="Enter parent name"
                    value={formData["parent name"]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Age *
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth *
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Grade/Class *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select grade</option>
                    {gradeOptions.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  id="phone number"
                  name="phone number"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData["phone number"]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter complete address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="previousSchool"
                  className="block text-sm font-medium text-gray-700"
                >
                  Previous School (if any)
                </label>
                <input
                  id="previousSchool"
                  name="previousSchool"
                  type="text"
                  placeholder="Enter previous school name"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 text-lg"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
