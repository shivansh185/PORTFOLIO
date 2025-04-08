import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const textRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative flex items-center justify-end w-screen min-h-screen bg-[#0a0f24] overflow-hidden p-10">
      <div className="relative text-right px-4 max-w-7xl w-full z-10">
        <h1
          ref={textRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-4"
        >
          Shivansh Srivastava
        </h1>
        <p className="text-sm text-blue-300 mb-2">FULLSTACK DEVELOPER</p>
        
        <p ref={descRef} className="text-lg text-gray-400 mb-8 opacity-0">
          I am a passionate and driven developer with a strong foundation in building scalable and high-performance backend solutions.
          <br />I am always eager to push the boundaries of innovation, creating impactful technology solutions that drive positive
          <br />change and enhance user experiences.
        </p>
        <p className="text-sm text-gray-400 mb-4">OPEN FOR INTERNSHIP OPPORTUNITIES</p>

        {/* Download Resume Button */}
        <a
  href="/Shivansh Resume.pdf"
  download="Shivansh_Resume.pdf"
  className="px-6 py-3 bg-white text-black font-semibold rounded-lg border border-gray-400 shadow-md hover:bg-gray-300 transition-all"
>
  Download Resume
</a>
      </div>
    </div>
  );
};

export default HeroSection;
