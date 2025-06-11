import { motion } from "framer-motion";

const projects = [
  {
    title: "RTMP Live Streaming Server",
    description:
      "This project is a real-time RTMP live streaming server built using Node.js with Express for the backend, FFmpeg for video encoding and streaming, and Socket.IO for real-time binary data transfer from client to server." ,
    githubLink: "https://github.com/shivansh185/-RTMP-Server",
    icon: "📺",
  },
  {
    title: "Google Docs Clone",
    description:
      "A real-time collaborative text editor that replicates the core functionality of Google Docs. Built using React, Node.js, Socket.IO, and MongoDB, this project allows multiple users to work together on the same document simultaneously, with changes reflected in real-time.",
    githubLink: "https://github.com/shivansh185/GoogleDocs-Clone",
    icon: "📄",
  },
   {
    title: "Cloud-Based IDE",
    description:
      "The Cloud-Based IDE(Buffer Clouds) is an online code editor that enables developers to write, compile, and execute code from any device with internet access. It supports multiple programming languages.",
    githubLink: "https://github.com/shivansh185/Buffer-Clouds",
    icon: "☁️",
  },
  {
    title: "Collaborative Google Drive Clone",
    description:
      "A fully functional Google Drive-inspired cloud storage application built with React and Firebase. This project allows users to securely upload, manage, and organize their files and folders — all in real-time, with a user-friendly interface and responsive design.",
    githubLink: "https://github.com/shivansh185/Google-Drive_Clone",
    icon: "📁",
  },
];

const ProjectsSection = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-[#0a0f24] text-white py-20 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

      {/* Projects List */}
      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8"
          >
            <div className="text-6xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* GitHub Link */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <span className="text-black">View on GitHub</span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* GitHub Profile Link */}
      <div className="mt-8">
        <a
          href="https://github.com/shivansh185"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
        >
          For more, visit my GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
