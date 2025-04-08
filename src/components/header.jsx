import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 w-full fixed top-0 left-0 z-50 shadow-lg">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <div className="flex w-full justify-evenly">
          {[
            { name: "Skills", path: "/skills" },
            { name: "Services", path: "/services" },
            { name: "Projects", path: "/portfolio" },
            { name: "About", path: "/about" },
            { name: "Get In Touch", path: "/getintouch" }, // Make sure the blog route exists
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="w-32 text-center text-white text-sm py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Get in Touch Button */}
        <div className="ml-4">
  <Link
    to="/"  // Update the route to match the "Get in Touch" page route
    className="w-40 text-lg font-semibold py-3 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 text-center block"
  >
    Home
  </Link>
</div>
      </nav>
    </div>
  );
};

export default Header;
