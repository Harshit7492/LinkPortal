import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon for a checkmark

const Features = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Features of This LinkPortal
      </h1>
      <ul className="max-w-3xl w-full bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        {[
          "Next.js Integration",
          "Tailwind CSS for Styling",
          "Google Analytics for Insights",
          "Page Loader Animation",
          "Dynamic Head Component",
          "Responsive Navbar Design",
          "Custom 404 Page",
          "Notification Toasts",
          "Footer for Additional Links"
        ].map((feature, index) => (
          <li
            key={index}
            className="flex items-center mb-4 text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer"
          >
            {/* <FaCheckCircle className="text-indigo-500 mr-3" /> Icon for checkmark */}
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
