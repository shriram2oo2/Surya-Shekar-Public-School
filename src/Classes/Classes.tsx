export default function FeeStructure() {
  const feeData = [
    {
      class: "Nursery",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 600,
    },
    {
      class: "LKG",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 600,
    },
    {
      class: "UKG",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 600,
    },
    {
      class: "I",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 700,
    },
    {
      class: "II",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 700,
    },
    {
      class: "III",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 700,
    },
    {
      class: "IV",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 800,
    },
    {
      class: "V",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 800,
    },
    {
      class: "VI",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 800,
    },
    {
      class: "VII",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 800,
    },
    {
      class: "VIII",
      admission: 500,
      registration: 500,
      annual: 1500,
      tuition: 800,
    },
  ];

  const formatCurrency = (amount: number) => `₹${amount.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8 py-3">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Fee <span className="text-orange-500">Structure</span>
          </h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Transparent and comprehensive breakdown of our academic fees to help
            you plan your educational investment.
          </p>
          <div className="mt-4 inline-block px-6 py-2 bg-orange-500 text-white rounded-full font-semibold text-base shadow">
            Academic Fees 2025-26
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Surya Shekhar Public School, Rosera
          </h2>
        </div>

        {/* Fee Table (Desktop) */}
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden backdrop-blur-sm hidden md:block">
          <div className="bg-orange-500 text-white p-6 text-center text-2xl font-bold">
            📚 Class-wise Fee Structure
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white border-b-4 border-orange-200">
                  {[
                    "🎓 CLASS",
                    "💰 ADMISSION FEE",
                    "📝 REGISTRATION FEE",
                    "📅 ANNUAL FEE",
                    "📖 TUITION FEE",
                  ].map((text, i) => (
                    <th
                      key={i}
                      className={`px-6 py-5 text-center font-bold text-gray-800 text-lg ${
                        i !== 4 ? "border-r border-gray-200" : ""
                      }`}
                    >
                      {text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, index) => (
                  <tr
                    key={row.class}
                    className={`border-b-2 border-gray-100 hover:bg-orange-50 transition-all duration-300 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-5 text-left font-bold text-gray-800 border-r border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          {row.class}
                        </div>
                        <span>Class {row.class}</span>
                      </div>
                    </td>
                    {[
                      row.admission,
                      row.registration,
                      row.annual,
                      row.tuition,
                    ].map((fee, i) => (
                      <td
                        key={i}
                        className={`px-6 py-5 text-center font-semibold text-gray-700 text-lg ${
                          i < 3 ? "border-r border-gray-200" : ""
                        }`}
                      >
                        <div
                          className={`inline-block px-4 py-2 rounded-lg ${
                            i === 0
                              ? "bg-green-100 text-green-800"
                              : i === 1
                              ? "bg-blue-100 text-blue-800"
                              : i === 2
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800 shadow font-bold"
                          }`}
                        >
                          {formatCurrency(fee)}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {feeData.map((row, index) => (
            <div
              key={row.class}
              className={`p-6 border-b-4 border-gray-100 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {row.class}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Class {row.class}
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <span className="text-sm font-semibold text-gray-700">
                    💰 Admission Fee:
                  </span>
                  <span className="text-lg font-bold text-green-700">
                    {formatCurrency(row.admission)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <span className="text-sm font-semibold text-gray-700">
                    📝 Registration Fee:
                  </span>
                  <span className="text-lg font-bold text-blue-700">
                    {formatCurrency(row.registration)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <span className="text-sm font-semibold text-gray-700">
                    📅 Annual Fee:
                  </span>
                  <span className="text-lg font-bold text-purple-700">
                    {formatCurrency(row.annual)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <span className="text-sm font-semibold text-gray-700">
                    📖 Tuition Fee:
                  </span>
                  <span className="text-lg font-bold text-orange-700">
                    {formatCurrency(row.tuition)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="mt-10 mb-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">What's Included in Your </span>
              <span className="text-orange-500">Fees</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="bg-orange-50 p-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  Academic Fee Components
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    title: "Tuition Fee",
                    desc: "Covers classroom instruction, curriculum materials, and standard activities",
                  },
                  {
                    title: "Admission Fee",
                    desc: "One-time fee for new students joining the school",
                  },
                  {
                    title: "Registration Fee",
                    desc: "Administrative processing and documentation charges",
                  },
                  {
                    title: "Annual Fee",
                    desc: "Contributes to school infrastructure, facility improvements, and annual activities",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-orange-500 text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}:
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-10 mb-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gray-900">Frequently Asked </span>
              <span className="text-orange-500">Questions</span>
            </h2>
          </div>

          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                {
                  q: "When is the fee payment deadline?",
                  a: "Fee payments are due by the 10th of each month for monthly payments, or by April 30th for annual payments. Late fees may apply after the due date.",
                },
                {
                  q: "What payment methods are accepted?",
                  a: 'We accept cash payments at the school office, bank transfers, online payments through our portal, and cheques payable to "Surya Shekhar Public School".',
                },
                {
                  q: "Are there any scholarships available?",
                  a: "Yes, we offer merit-based scholarships for academically excellent students and need-based financial assistance. Please contact the administration office for application details.",
                },
                {
                  q: "Is there a sibling discount?",
                  a: "Yes, we offer a 10% discount on tuition fees for the second child and 15% for the third child from the same family. The discount applies to the lower fee amount.",
                },
                {
                  q: "What is the refund policy?",
                  a: "Admission and registration fees are non-refundable. Annual fees are refundable on a pro-rata basis if withdrawal occurs before the academic year begins. Tuition fees are refundable based on the notice period given.",
                },
              ].map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-orange-50 transition-colors">
                    <span className="font-semibold text-gray-800 text-lg">
                      {faq.q}
                    </span>
                    <span className="text-orange-500 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
