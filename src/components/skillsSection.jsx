import { motion } from "framer-motion";

const skills = [
  { title: "HTML", description: "The foundation of web development.", icon: "🌐", experience: "5+ years of experience in semantic HTML." },
  { title: "CSS", description: "Styling for beautiful websites.", icon: "🎨", experience: "5+ years of experience in CSS." },
  { title: "JavaScript", description: "The language of interactivity.", icon: "⚡", experience: "3+ years of experience in JS, Proficient in ES6+, async programming, and frameworks." },
  { title: "React", description: "Building dynamic UI components.", icon: "⚛️", experience: "3+ years experience in building SPAs with React." },
  { title: "Next.js", description: "Optimized framework for React.", icon: "🚀", experience: "2+ years experience, in SSR, ISR, and API routes." },
  { title: "Node.js", description: "Backend JavaScript runtime.", icon: "🟢", experience: "3+ years experience in Building scalable APIs and real-time apps." },
  { title: "Express.js", description: "Minimalist web framework.", icon: "⚙️", experience: "3+ years experience in Developing multiple REST APIs with authentication." },
  { title: "MongoDB", description: "NoSQL database for scalability.", icon: "🍃", experience: "3+ years experience and Expert in designing NoSQL schemas." },
  { title: "PostgreSQL", description: "Advanced SQL database.", icon: "🐘", experience: "2 years of experience in Working with relational queries and optimizations." },
  { title: "SQL", description: "Structured data management.", icon: "💾", experience: "Experience in relational databases and data normalization." },
  { title: "Java", description: "Object-oriented programming.", icon: "☕", experience: "Strong OOP concepts, multithreading, and design patterns." },
  { title: "Python", description: "Powerful and versatile language.", icon: "🐍", experience: "Used for AI/ML, automation, and scripting." },
  { title: "Docker", description: "Containerization platform for deployment.", icon: "🐳", experience: "Used for building, shipping, and running containerized applications." },
];

const techs = [
  { title: "Socket.IO", description: "Real-time bidirectional event-based communication.", icon: "📡", experience: "2+ years of experience in real-time apps like chats and notifications." },
  { title: "WebRTC", description: "Peer-to-peer video, voice, and data communication.", icon: "🎥", experience: "Built custom video calling apps with real-time signaling." },
  { title: "Monaco Editor", description: "Code editor that powers VS Code, for browser-based IDEs.", icon: "📝", experience: "Integrated Monaco in cloud-based IDEs with language support and syntax highlighting." },
  { title: "GSAP", description: "Powerful JavaScript animation library.", icon: "🎬", experience: "Used for high-performance timeline-based UI animations." },
  { title: "Three.js", description: "3D JavaScript library for WebGL.", icon: "🌌", experience: "Built interactive 3D models and animations on the web." },
  { title: "shadcn/ui", description: "Beautifully designed UI components built with Radix UI.", icon: "🧩", experience: "Integrated accessible, themeable components in React apps." },
  { title: "FFmpeg", description: "Cross-platform solution to record, convert, and stream audio and video.", icon: "🎞️", experience: "Used for real-time video streaming, recording, and RTMP server builds." },
];

const SkillsSection = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-[#0a0f24] text-white py-20 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>

      {/* Skills Timeline (Experience Section) */}
      <div className="w-full max-w-5xl mt-12">
        <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">Experience Timeline</h3>

        <div className="relative border-l-4 border-gray-600 pl-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 bg-gray-900 p-4 rounded-xl shadow-md relative"
            >
              <div className="absolute -left-4 top-5 w-4 h-4 bg-blue-400 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-blue-300">{skill.title}</h3>
              <p className="text-gray-300 mt-1">{skill.description}</p>
              <p className="text-gray-400 mt-2 italic">{skill.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Scroll Cards */}
      <motion.div
        className="flex space-x-6 overflow-x-auto scrollbar-hide w-full px-10 py-4 mt-10"
        whileTap={{ cursor: "grabbing" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-72 min-w-[300px] h-72 bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{skill.title}</h3>
            <p className="text-gray-400 text-center mt-2">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Frameworks & Technologies Section */}
      <div className="w-full max-w-5xl mt-20">
        <h3 className="text-3xl font-semibold text-center text-green-400 mb-6"> Technologies</h3>

        <div className="relative border-l-4 border-gray-600 pl-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 bg-gray-900 p-4 rounded-xl shadow-md relative"
            >
              <div className="absolute -left-4 top-5 w-4 h-4 bg-green-400 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-green-300">{tech.title}</h3>
              <p className="text-gray-300 mt-1">{tech.description}</p>
              <p className="text-gray-400 mt-2 italic">{tech.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frameworks Scroll Cards */}
      <motion.div
        className="flex space-x-6 overflow-x-auto scrollbar-hide w-full px-10 py-4 mt-10"
        whileTap={{ cursor: "grabbing" }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="w-72 min-w-[300px] h-72 bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl">{tech.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{tech.title}</h3>
            <p className="text-gray-400 text-center mt-2">{tech.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
