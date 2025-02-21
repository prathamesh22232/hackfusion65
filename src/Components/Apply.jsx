import React from "react";
import { Link } from "react-router-dom"; // Link from React Router for navigation

const Apply = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo or Branding */}
          <div className="text-white text-2xl font-semibold">
            <Link to="/">My Portal</Link>
          </div>

          {/* Navigation Links */}
          <div className="space-x-4">
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/applySecond"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Apply
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="bg-blue-380 p-8 max-w-4xl mx-auto mt-10 shadow-xl rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Apply for a Program</h2>
        
        <p className="text-lg text-gray-600 mb-6">
          Welcome to the application portal! Here you can apply for various programs offered by our organization. 
          Whether you are interested in event organization, sponsorship, or budget approvals, you are in the right place.
        </p>

        <h3 className="text-2xl font-bold text-gray-700 mb-4">How to Apply</h3>
        <p className="text-lg text-gray-600 mb-6">
          To submit your application, please fill out the application form below with your personal details, 
          the type of program you're applying for, and any additional details. After submission, your application will be reviewed.
        </p>

        <h3 className="text-2xl font-bold text-gray-700 mb-4">Program Options</h3>
        <ul className="list-disc pl-5 text-lg text-gray-600 mb-6">
          <li>Budget Approval</li>
          <li>Sponsorship</li>
          <li>Event Organization (Pragyaa)</li>
          <li>Event Organization (Utsav)</li>
          <li>Event Organization (Zenith)</li>
          <li>Departmental Events</li>
        </ul>

        <p className="text-lg text-gray-600">
          Choose the program that best suits your needs, and submit your application. Our team will get back to you shortly with a response. 
          If you need assistance or have any questions, feel free to contact us directly via the contact page.
        </p>
      </div>
    </div>
  );
};

export default Apply;
