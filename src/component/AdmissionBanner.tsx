import { FaRegClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdmissionBanner() {
  const message = (
    <>
      Online registration for the academic year 2025–26. click here to register{" "}
      <Link
        to="/admission-enquiry"
        className="underline hover:text-blue-300 transition"
      >
        CLICK HERE
      </Link>
    </>
  );

  return (
    <div className="flex w-full h-10">
      {/* Left Label */}
      <div className="bg-[#1f2937] text-white px-4 flex items-center text-sm font-semibold">
        For Admissions
      </div>

      {/* Scrolling Marquee */}
      <div className="bg-[#1f2937] text-gray-100 overflow-hidden flex-1 relative">
        <div className="absolute flex whitespace-nowrap animate-slide h-full items-center">
          <div className="flex items-center gap-2 text-sm font-medium px-4">
            <FaRegClipboard />
            {message}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="flex items-center gap-2 text-sm font-medium px-4">
            <FaRegClipboard />
            {message}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
