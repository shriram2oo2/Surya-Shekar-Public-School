import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import logo from "../assets/logo/newlogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Fee Structure", path: "/classes" },
    { name: "Careers", path: "/teachers" },
    { name: "Admin", path: "/admin" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallary" },
    { name: "Contact", path: "/contacts" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {/* School Overview - Takes 2 columns on xl screens */}
            <div className="sm:col-span-2 xl:col-span-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 mr-3 flex-shrink-0 bg-[#111827] rounded p-1">
                    <img
                      src={logo}
                      alt="Surya Shekhar Public School Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Other content here */}
                </div>

                <h3 className="text-3xl md:text-2xl font-bold text-orange-400">
                  Surya Shekhar Public School
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Empowering young minds through quality education and holistic
                development. We focus on nurturing talents, building strong
                academic foundations, and preparing students for a bright
                future.
              </p>
              {/* School Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <FaUsers className="text-orange-400 text-xl mx-auto mb-1" />
                  <div className="text-lg font-semibold">500+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <FaGraduationCap className="text-orange-400 text-xl mx-auto mb-1" />
                  <div className="text-lg font-semibold">15+</div>
                  <div className="text-xs text-gray-400">Faculty</div>
                </div>
              </div>
              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/SURYASHEKHAPUBLICSCHOOL?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://www.instagram.com/suryashekhar_publicschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-sm" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-orange-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navItems.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-sm md:text-base text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-orange-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-orange-400">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base text-gray-300">
                    <div className="font-medium">Address:</div>
                    <div>Thatiya, Rosera,</div>
                    <div>Samastipur, Bihar</div>
                    <div>PIN: 848210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-orange-400 flex-shrink-0" />
                  <div className="text-sm md:text-base text-gray-300">
                    <div className="font-medium">Phone:</div>
                    <a
                      href="tel:+91 8757444683"
                      className="hover:text-orange-400 transition-colors"
                    >
                      +91 8757444683
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-orange-400 flex-shrink-0" />
                  <div className="text-sm md:text-base text-gray-300">
                    <div className="font-medium">Email:</div>
                    <a
                      href="mailto:sspsrosera@gmail.com"
                      className="hover:text-orange-400 transition-colors"
                    >
                      sspsrosera@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaClock className="text-orange-400 mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base text-gray-300">
                    <div className="font-medium">Office Hours:</div>
                    <div>Mon - Fri: 9:00 AM - 5:00 PM</div>
                    <div>Sat: 9:00 AM - 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h5 className="font-semibold text-orange-400 mb-2">
                  Admission Open
                </h5>
                <p className="text-sm text-gray-300">
                  Admissions are now open for the academic year{" "}
                  {currentYear + 1}-{currentYear + 2}. Apply now for a bright
                  future!
                </p>
                <a
                  href="/admission-enquiry"
                  className="inline-block mt-2 px-4 py-2 bg-orange-400 text-gray-900 rounded-lg text-sm font-medium hover:bg-orange-500 transition-colors duration-200"
                >
                  Apply Now
                </a>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-orange-400 mb-2">
                  School Timings
                </h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Morning: 8:00 AM - 2:00 PM</div>
                  <div>Assembly: 8:00 AM - 8:30 AM</div>
                  <div>Break: 11:30 AM - 12:00 PM</div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <h5 className="font-semibold text-orange-400 mb-2">
                  Affiliated To
                </h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Central Board of Secondary Education</div>

                  <div>School Code: SSPS2017</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Surya Shekhar Public School. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-xs text-gray-400"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
