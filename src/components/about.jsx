import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="h-screen w-screen bg-[#0a0f24] flex flex-col items-center justify-center text-white p-6 sm:p-10">
      
      {/* Title Animation */}
      <motion.h1 
        className="text-4xl sm:text-5xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
      </motion.h1>

      {/* About Card Animation */}
      <motion.div 
        className="w-full max-w-4xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg text-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {[
          "👋 Hi, I'm Shivansh, a passionate Full Stack Developer and AI enthusiast dedicated to building innovative and scalable web applications.",
          "I specialize in the MERN stack and have extensive experience with React, Next.js, Tailwind CSS, Prisma, and Clerk Authentication.",
          "🚀 I thrive on solving complex problems, whether it's optimizing performance, enhancing user experiences, or integrating cutting-edge AI technologies into web applications.",
          "💡 Beyond development, I’m deeply interested in music and enjoy exploring its connection with technology. I also participate in hackathons,  like Smart India Hackathon (SIH) , FOSS Hack and Hackbyte(IIIT Jabalpur).",
          "📩 I'm always open to collaborating on exciting projects! Let’s build something amazing together. Check out my work and feel free to reach out!"
        ].map((text, index) => (
          <motion.p
            key={index}
            className="mb-5 text-base sm:text-lg leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
