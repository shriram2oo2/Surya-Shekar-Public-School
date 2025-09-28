import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Surya Shekhar Public School  Logo" className="w-12 h-12 rounded-full" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Surya Shekhar Public School </h1>
          <p className="text-sm text-gray-500">School Center</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex space-x-10 bg-blue-50 rounded-xl px-6 py-3">
        <InfoItem icon="📞" label="Call" value="+2 342 5446 67" />
        <InfoItem icon="⏰" label="Work Time" value="Mon - Fri 8 AM - 5 PM" />
        <InfoItem icon="📍" label="Address" value="Franklin St, Greenpoint Ave" />
      </div>
    </header>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-2">
    <span className="text-orange-500 text-xl">{icon}</span>
    <div className="text-sm">
      <div className="font-semibold text-gray-700">{label}</div>
      <div className="text-gray-600">{value}</div>
    </div>
  </div>
);

export default Header;


