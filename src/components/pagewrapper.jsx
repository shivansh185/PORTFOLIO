import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Fade-in effect when the component mounts
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="opacity-0">
      {children}
    </div>
  );
};

export default PageWrapper;
