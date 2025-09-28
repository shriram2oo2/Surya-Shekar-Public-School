import InfrastructureSection from "../component/Infra";
import OurTeachers from "./OurTeachers";
import founder from "../assets/principal/amit kumar ji.jpg";
import logo from "../assets/logo/newlogo.png";
import OurMember from "./OurMember";

import foundermain2 from "../assets/principal/founder.jpg";

const AboutUsPage = () => {
  return (
    <>
      <div className="px-6 md:px-20 py-10 bg-gradient-to-br from-gray-50 to-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Our Founder Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-orange-500">Founder</span>
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Founder & Visionary Leader
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={foundermain2 || "/placeholder.svg"}
                    alt="Principal"
                    className="w-full h-[450px] object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="lg:order-1 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      Late Mr. B N Sinha Suman
                    </h4>
                    <p className="text-orange-500 font-semibold mb-6 text-lg">
                      Founder & Academic Leader
                    </p>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        <span className="font-semibold text-orange-500">
                          Director B.N. SINHA "Suman"
                        </span>
                        , Advocate at Patna High Court, has been an activist
                        since his childhood, always committed to social causes,
                        equality, and justice. He has always participated in
                        student struggles against injustice and disparity. As a
                        student at Patna University, he was part of the Steering
                        Committee of Bihar Students Leaders Conference organized
                        by Patna University in 1977, responsible for igniting
                        the J.P. Movement.
                      </p>

                      <p>
                        An acknowledged and competent criminal lawyer at the
                        Patna High Court, he has served the people of Rosera as
                        a dedicated social worker. This school is his tribute to
                        his late father, Shri Surya Shekhar Pd. Sinha, and a
                        commitment to serve the people and the nation.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        "Academic Leadership",
                        "Curriculum Innovation",
                        "Student-Centric",
                      ].map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-200 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-orange-500">Principal</span>
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Leading with passion, inspiring excellence in education
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={founder || "/placeholder.svg"}
                    alt="Principal"
                    className="w-full h-[450px] object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="lg:order-1 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      Mr. Amit Kumar Singh
                    </h4>
                    <p className="text-orange-500 font-semibold mb-6 text-lg">
                      Principal & Academic Leader
                    </p>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Mr. Amit Kumar Singh, the visionary Principal of Surya
                        Shekhar Public School, At Surya Shekhar Public School,
                        we believe that education is not merely the acquisition
                        of knowledge but the journey of becoming a good human
                        being. Our students are encouraged to embody the values
                        of kindness, affection, benevolence, and hard work. They
                        are inspired to embrace challenges with resilience and
                        courage, understanding that true growth comes from
                        continuous learning and self-improvement
                      </p>

                      <p>
                        Surya Shekhar Public School is an abode of wisdom,
                        truth, and courage where learning is a meaningful
                        journey rooted in ethical values, mutual respect, and a
                        spirit of teamwork. Here, we nurture not only
                        intellectual development but also the moral and
                        emotional strength essential for building a brighter,
                        more compassionate future.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        "Academic Leadership",
                        "Curriculum Innovation",
                        "Student-Centric",
                      ].map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-200 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-orange-500">Core Values</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  desc: "We uphold the highest standards of honesty and ethics in all that we do, fostering trust within our community.",
                  gradient: "from-red-400 to-pink-400",
                  bgGradient: "from-red-50 to-pink-50",
                },
                {
                  title: "Innovation",
                  desc: "We embrace change and encourage creativity in both teaching and learning methodologies.",
                  gradient: "from-blue-400 to-cyan-400",
                  bgGradient: "from-blue-50 to-cyan-50",
                },
                {
                  title: "Empathy",
                  desc: "We nurture compassion and respect, ensuring every child feels valued and heard.",
                  gradient: "from-green-400 to-emerald-400",
                  bgGradient: "from-green-50 to-emerald-50",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`p-8 bg-gradient-to-br ${value.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/50 group`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-bold mb-4 text-xl text-gray-800">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-4xl md:text-5xl font-bold mb-8">
                    Our <span className="text-orange-500">Vision</span>
                  </h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      At Surya Shekhar Public School, our vision is to empower
                      students to become compassionate, innovative, and
                      responsible global citizens. We aim to instill strong
                      values, critical thinking skills, and a lifelong love for
                      learning.
                    </p>

                    <p>
                      We envision a dynamic educational environment where
                      academic excellence goes hand in hand with emotional
                      intelligence, social responsibility, and environmental
                      consciousness.
                    </p>

                    <p>
                      We are committed to inclusivity and holistic development,
                      ensuring that each student not only achieves academic
                      success but also grows as a caring and confident human
                      being.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  {/* Background gradient blur */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  {/* Image Container with #111827 background */}
                  <div className="relative bg-[#111827] rounded-2xl p-4 shadow-xl">
                    <img
                      src={logo || "/placeholder.svg"}
                      alt="Vision"
                      className="w-full h-80 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <InfrastructureSection />
      <OurMember />
      <OurTeachers />
    </>
  );
};

export default AboutUsPage;
