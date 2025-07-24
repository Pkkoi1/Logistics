import React, { useState, useEffect, useMemo } from "react";

const UserHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigationItems = useMemo(
    () => [
      { label: "Về chúng tôi", href: "#about", id: "about" },
      { label: "Dịch vụ", href: "#service", id: "service" },
      { label: "Vận chuyển", href: "#transport", id: "transport" },
      { label: "Thông kê", href: "#statistic", id: "statistic" },
      { label: "Tin tức", href: "#news", id: "news" },
      { label: "Liên hệ", href: "#contact", id: "contact" },
      { label: "Báo giá", href: "#quote", id: "quote" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Check which section is currently in view
      const sections = navigationItems.map((item) => item.id);
      let currentSection = "";

      // Find the section that is most visible in the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const headerHeight = 80;
          // Check if section is in the top part of the viewport
          if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section on page load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`py-4 fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="logo.webp" alt="Logo" className="w-full" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-300 ${
                    activeSection === item.id
                      ? isScrolled
                        ? "text-blue-500"
                        : "text-blue-300"
                      : isScrolled
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default UserHeader;
