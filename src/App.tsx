import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
// import Values from "./component/Values";
import WelcomeSection from "./component/WelcomeSection";
import CampusTour from "./component/CampusTour";
import Gallery from "./component/Gallary";
import Footer from "./component/Footer";

import CurriculumSection from "./component/Curriculum";
import CoreAreas from "./component/CoreArea";
import WhySuryaShekhar from "./component/Why";
import Facilities from "./component/Facilities";

import ScrollToTopButton from "./component/ScrollToTopButton";
import Admission from "./component/Admission";
import AdmissionBanner from "./component/AdmissionBanner";
import CampusTourHello from "./component/Hellocampus";
import AllImagesSection from "./Allimages/Allimages";
import OurAim from "./component/Ouraim";
import SchoolUniformSection from "./Extracomp/Schoolunifrom";
import SalientFeatures from "../src/Extracomp/Silent";
import Transportation from "./Extracomp/Transport";
import Testimonal from "../src/component/Testimonal";

// Pages
import AboutUsPage from "./About/About";
import ContactPage from "./Contact/ContactPage";
import BlogSection from "./Blog/Blog";
import FeeStructure from "./Classes/Classes";
import CareerPage from "./Teacher/Teacher";

// testimonl
import TestimonialPage from "./Testimonal/TestimonialPage";
import AdminPanel from "./Testimonal/AdminPanel";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <AdmissionBanner />
              <Banner />

              <WelcomeSection />
              <OurAim />
              <CurriculumSection />
              <WhySuryaShekhar />
              {/* <CoreAreas /> */}
              <Facilities />
              <CampusTour />
              <AllImagesSection />
              <Testimonal/>
              <TestimonialPage/>
            </>
          }
        />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/classes" element={<FeeStructure />} />
        <Route path="/schooluniform" element={<SchoolUniformSection />} />
        <Route path="silentfeature" element={<SalientFeatures />} />
        <Route path="transportion" element={<Transportation />} />
        <Route path="/teachers" element={<CareerPage />} />
        <Route path="/gallary" element={<Gallery />} />
        <Route path="/admission-enquiry" element={<Admission />} />
        <Route path="/admission-enquiry" element={<AdmissionBanner />} />
        <Route path="/campustour" element={<CampusTourHello />} />
        <Route path="/admin" element={<AdminPanel />} />

        {/* core area route
         */}

        <Route path="/core-areas" element={<CoreAreas />} />
        <Route path="/core-areas/:slug" element={<CoreAreas />} />
      </Routes>

      {/* 👇 Footer shown on ALL pages */}
      <Footer />
      <ScrollToTopButton />

      {/* whatapp support log */}
      <a
        href="https://wa.me/8809889083" // ← Replace with your WhatsApp number
        className="fixed left-4 bottom-4 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12 hover:scale-110 transition-transform bg-green-500 p-2 rounded-full shadow-lg"
        />
      </a>
    </>
  );
}

export default App;
