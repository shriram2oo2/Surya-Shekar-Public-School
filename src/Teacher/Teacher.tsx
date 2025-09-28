import {
  UserIcon as UserTie,
  School,
  Mail,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import admin from "../assets/admin.png";
import team from "../assets/images/35.jpg";
import classss from "../assets/admission/classphot.jpg";

const CareerPage = () => {
  return (
    <div className="px-6 md:px-16 py-16 bg-white text-gray-800 mt-6 py-3">
      {/* Hero Section with Background Image */}
      <div className="relative mb-16">
        <div className="absolute inset-0 rounded-2xl overflow-hidden"></div>
        <div className="relative text-center max-w-3xl mx-auto py-3">
          <h2 className="text-4xl font-bold mb-4">
            Join Our <span className="text-orange-500">Dynamic Team</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We're always on the lookout for educators and staff who are
            passionate about making a difference. Express your interest and
            we'll reach out when suitable openings arise.
          </p>
        </div>
      </div>

      {/* Career Opportunities Grid */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8 mb-12">
        <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition max-w-sm w-full mb-8 md:mb-0">
          <div className="relative mb-4 h-45 rounded-lg overflow-hidden">
            <img
              src={classss}
              alt="Teacher engaging with students in a modern classroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <UserTie size={36} className="text-orange-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Educators</h4>
            <p className="text-sm text-gray-600">
              Inspire students and shape young minds across various subjects.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition max-w-sm w-full">
          <div className="relative mb-4 h-45 rounded-lg overflow-hidden">
            <img
              src={admin}
              alt="Professional school administration office environment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <School size={36} className="text-orange-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Admin & Operations</h4>
            <p className="text-sm text-gray-600">
              Help run the school smoothly and support our educational goals.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Join Our Team?
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-orange-500" size={24} />
                <span className="text-gray-700">
                  Collaborative work environment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-orange-500" size={24} />
                <span className="text-gray-700">
                  Professional development opportunities
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-orange-500" size={24} />
                <span className="text-gray-700">
                  Competitive benefits package
                </span>
              </div>
              <div className="flex items-center gap-3">
                <School className="text-orange-500" size={24} />
                <span className="text-gray-700">
                  State-of-the-art facilities
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            {/* <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Happy diverse group of teachers and staff collaborating"
              className="w-full h-full object-cover"
            /> */}
            <img
              src={team}
              alt="Happy diverse group of teachers and staff collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-2xl p-8">
        <div className="relative mb-6 h-50 rounded-xl overflow-hidden max-w-2xl mx-auto">
          <img
            src={classss}
            alt="Impressive school building exterior with modern architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-700 text-md mb-6 max-w-2xl mx-auto">
          Fill out the interest form below to apply — our team will get in touch
          when there's a match. Join us in creating an inspiring educational
          environment where every student can thrive.
        </p>
        <a
          href="https://forms.gle/LZyQDDvC5We1pfbL8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full shadow-md transition inline-flex items-center gap-2"
        >
          <Mail size={20} />
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareerPage;
