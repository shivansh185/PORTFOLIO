import { motion } from "framer-motion";

const projects = [
  {
    title: "Buffer-Clouds",
    description:
      "The Cloud-Based IDE is an online code editor that enables developers to write, compile, and execute code from any device with internet access. It supports multiple programming languages.",
    githubLink: "https://github.com/shivansh185/Buffer-Clouds",
    icon: "☁️",
  },
  {
    title: "Chat Application",
    description:
      "This is a real-time chat application built using Node.js, Express, and EJS. The application allows users to communicate seamlessly through instant messaging, supporting both group chats and private messages.",
    githubLink: "https://github.com/shivansh185/Chat-Application",
    icon: "💬",
  },
  {
    title: "SkillViesta",
    description:
      "Skill Viesta is a dynamic and interactive platform built with Next.js, designed to showcase, recognize, and enhance individual talents and skills. The application demonstrates a clean and modular structure of a modern Next.js project.",
    githubLink: "https://github.com/shivansh185/SkillViesta",
    icon: "🚀",
  },
  {
    title: "Blog Application",
    description:
      "This blog application is built using Node.js, Express, EJS, and MongoDB. It allows users to create, read, view, and comment on the blog posts. The app has a user-friendly interface for viewing all posts and a detailed view for individual posts.",
    githubLink: "https://github.com/shivansh185/Blog-Application",
    icon: "📝",
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
            <p className="text-gray-500 italic mb-4">Last Updated: {project.updated}</p>

            {/* GitHub Link */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
             <span className=" text-black"> View on GitHub</span>
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
