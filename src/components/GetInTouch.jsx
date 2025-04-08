import React from "react";
import { motion } from "framer-motion";
import { Copy, Github, Mail, Linkedin } from "lucide-react";

const GetInTouch = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const icons = {
    GitHub: <Github size={24} className="text-black" />,
    Email: <Mail size={24} className="text-black" />,
    LinkedIn: <Linkedin size={24} className="text-black" />,
  };

  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex flex-col items-center justify-center p-10 relative">
      <div className="w-full max-w-4xl text-center">
        {/* Text Section */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6">
          Thank you for visiting!
        </h1>
        <p className="text-gray-300 leading-relaxed mb-10">
          I truly appreciate your time and interest. If you’d like to
          collaborate, have any questions, or just want to connect, feel free
          to reach out. I’m always open to new opportunities, discussions, and
          learning experiences. Let's create something amazing together!
        </p>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {[
            {
              name: "GitHub",
              url: "https://github.com/shivansh185",
              color: "bg-blue-600",
            },
            {
              name: "Email",
              url: "mailto:shivansh81689@gmail.com",
              color: "bg-green-500",
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/shivansh-srivastava-723968305/",
              color: "bg-blue-500",
            },
          ].map((item) => (
            <div key={item.name} className="relative flex items-center">
              <a
                href={item.url}
                className={`${item.color} px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition shadow-lg flex items-center space-x-3`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icons[item.name]}
                <span className="font-medium text-black">{item.name}</span>
              </a>
              <button
                className="ml-3 p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-lg flex items-center"
                onClick={() => handleCopy(item.url)}
              >
                <Copy size={20} className="text-black" />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
