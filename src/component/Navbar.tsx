import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdPhone, MdCampaign } from "react-icons/md";
import logo from "../assets/logo/newlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Academics",
      submenu: [
        { name: "Fee Structure", path: "/classes" },
        { name: "School Uniform", path: "/schooluniform" },
        { name: "Salient Features", path: "/silentfeature" },
        { name: "Transportation", path: "/transportion" },
      ],
    },
    {
      name: "Admissions",
      submenu: [{ name: "Apply Now", path: "/admission-enquiry" }],
    },
    { name: "Careers", path: "/teachers" },
    // { name: "Campus Tour", path: "/campustour" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallary" },
    { name: "Contact", path: "/contacts" },
  ];

  const handleDropdownToggle = (idx: number) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-[#111827] shadow z-50 relative w-full">
      {/* Top Bar */}
      <div className="bg-[#1f2937] text-white text-xs sm:text-sm py-1 px-3 sm:px-4 flex items-center justify-between">
        <div className="flex-1 text-center flex items-center justify-center gap-2 overflow-x-auto">
          <MdCampaign className="w-4 h-6 flex-shrink-0" />
          <span className="whitespace-nowrap">
            Admissions open for 2025–26 academic year!
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 whitespace-nowrap">
          <MdPhone className="w-4 h-4" />
          <span>+91-8757444683</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-wrap items-center px-3 sm:px-4 md:px-8 py-2 md:py-3 gap-3 sm:gap-4">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-[#111827] rounded">
            <img
              src={logo || "/placeholder.svg"}
              alt="School Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            Surya Shekhar Public School
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center gap-4 xl:gap-6 items-center">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative">
              {item.submenu ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={closeDropdown}
                >
                  <button className="flex items-center gap-1 text-white hover:text-blue-300 font-medium py-2 transition-colors duration-200">
                    <span>{item.name}</span>
                    <FaChevronDown className="text-xs mt-[2px]" />
                  </button>

                  {activeDropdown === idx && (
                    <div className="absolute left-0 top-full w-44 sm:w-52 bg-[#111827] border border-gray-700 rounded shadow-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          className="block px-4 py-3 text-sm text-white hover:bg-blue-900 first:rounded-t last:rounded-b transition-colors duration-200"
                          onClick={closeDropdown}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="text-white hover:text-blue-300 font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Admission Enquiry Button (Desktop) */}
        <div className="hidden lg:flex justify-end">
          <Link
            to="/admission-enquiry"
            className="bg-white text-[#111827] hover:bg-gray-200 px-5 py-2 rounded font-semibold text-sm sm:text-base transition-colors duration-200"
          >
            Admission Enquiry
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 hover:text-blue-300 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111827] w-full px-3 sm:px-4 pb-4 border-t border-gray-700 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item, idx) => (
            <div key={idx} className="py-1.5 sm:py-2">
              <div className="flex justify-between items-center">
                {item.submenu ? (
                  <>
                    <span
                      className="text-white font-medium cursor-pointer hover:text-blue-300 transition-colors duration-200"
                      onClick={() => handleDropdownToggle(idx)}
                    >
                      {item.name}
                    </span>
                    <button
                      onClick={() => handleDropdownToggle(idx)}
                      className="text-white p-1 hover:text-blue-300 transition-colors duration-200"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <FaChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white font-medium hover:text-blue-300 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>

              {item.submenu && activeDropdown === idx && (
                <div className="ml-3 mt-1.5 space-y-1 animate-in slide-in-from-top-1 duration-200">
                  {item.submenu.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.path}
                      className="block py-2 text-sm text-white hover:bg-blue-900 rounded px-2 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/admission-enquiry"
            className="block text-center bg-white text-[#111827] hover:bg-gray-200 mt-3 py-2 rounded font-semibold transition-colors duration-200"
            onClick={closeMenu}
          >
            Admission Enquiry
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
