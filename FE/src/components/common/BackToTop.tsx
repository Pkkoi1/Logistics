import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#19b7f9] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50 group"
      aria-label="Lên đầu trang"
    >
      <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default BackToTop;
