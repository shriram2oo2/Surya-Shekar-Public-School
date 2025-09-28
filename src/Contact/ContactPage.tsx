import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Build Gmail compose URL
    const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=shubhamchamoli1810@gmail.com&su=${subject}&body=${body}`;

    // Redirect to Gmail compose
    window.location.href = gmailURL;

    // Optionally clear form and show local success message
    setFormData({ name: "", email: "", message: "" });
    setStatus("Redirecting to Gmail compose...");
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-14">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Get in <span className="text-orange-500">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-orange-50 to-white p-10 shadow-xl rounded-xl space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition shadow-lg"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-green-600">{status}</p>
          )}
        </form>

        {/* Contact Info & Map */}
        <div className="flex flex-col justify-between space-y-10">
          <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Our Location</h4>
                <p className="text-gray-600">
                  Surya Shekhar Public School, Thatiya, Rosera, Samastipur,
                  Bihar ,  848210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+91 8757444683
</p>
            <p className="text-gray-600">+91 9570003339

</p>
            <p className="text-gray-600">+91 8809889083
</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">sspsrosera@gmail.com</p>
              </div>
            </div>
          </div>

          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5406901338396!2d86.0362088!3d25.7334835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edf1138abd84d5%3A0x7500b08941155fb4!2sSurya%20Shekhar%20Public%20School%20Rosera%20S!5e0!3m2!1sen!2sin!4v1718094925000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

