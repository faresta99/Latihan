import React, { useState, useEffect, useRef } from "react";

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleScroll = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load to check visibility
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible
          ? "opacity-100 animate__animated animate__zoomIn"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
