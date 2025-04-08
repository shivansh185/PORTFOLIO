import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaReact, FaDatabase, FaNetworkWired } from "react-icons/fa";

const services = [
  {
    title: "Web Design",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    description: "Creating visually appealing and user-friendly web interfaces with modern design principles.",
  },
  {
    title: "Frontend Development",
    icon: <FaReact className="text-green-400 text-3xl" />,
    description: "Building responsive and dynamic web applications using React, Tailwind CSS, and other frontend technologies.",
  },
  {
    title: "Backend Development",
    icon: <FaDatabase className="text-purple-400 text-3xl" />,
    description: "Developing robust backend systems with Django, Node.js, and integrating APIs for seamless functionality.",
  },
  {
    title: "Database Setup",
    icon: <FaDatabase className="text-yellow-400 text-3xl" />,
    description: "Designing and optimizing databases using PostgreSQL, MySQL, and MongoDB for high performance.",
  },
  {
    title: "API Design",
    icon: <FaNetworkWired className="text-red-400 text-3xl" />,
    description: "Creating RESTful and GraphQL APIs for seamless communication between frontend and backend.",
  },
  {
    title: "Real-time Technologies",
    icon: <FaNetworkWired className="text-cyan-400 text-3xl" />,
    description: "Implementing WebRTC, Socket.io, and real-time data streaming solutions for interactive applications.",
  },
];

export default function Services() {
  return (
    <div className="w-screen min-h-screen bg-[#0a0f24] text-white flex flex-col items-center justify-center p-8">
      <motion.h1 
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h1>

      <div className="w-full flex flex-wrap justify-center items-center gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-[#161b33] text-center p-6 rounded-2xl shadow-lg w-full h-full max-w-sm max-h-60"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
            <p className="text-sm mt-2 text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
