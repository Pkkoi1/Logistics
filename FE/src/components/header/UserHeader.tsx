import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [borderStyle, setBorderStyle] = useState({ left: 0, width: 0 });
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = useMemo(
    () => [
      { label: "Về chúng tôi", href: "/#about", id: "about" },
      { label: "Dịch vụ", href: "/#service", id: "service" },
      { label: "Vận chuyển", href: "/#transport", id: "transport" },
      { label: "Thông kê", href: "/#statistic", id: "statistic" },
      { label: "Tin tức", href: "/news", id: "news" },
      { label: "Liên hệ", href: "/#contact", id: "contact" },
      { label: "Báo giá", href: "/#quote", id: "quote" },
    ],
    []
  );

  useEffect(() => {
    const updateBorderPosition = () => {
      if (navRef.current && activeSection) {
        const activeIndex = navigationItems.findIndex(
          (item) => item.id === activeSection
        );
        if (activeIndex !== -1) {
          const navItems = navRef.current.children;
          const activeItem = navItems[activeIndex] as HTMLElement;
          if (activeItem) {
            const navRect = navRef.current.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();

            setBorderStyle({
              left: itemRect.left - navRect.left,
              width: itemRect.width,
            });
          }
        }
      }
    };

    updateBorderPosition();
    window.addEventListener("resize", updateBorderPosition);

    return () => window.removeEventListener("resize", updateBorderPosition);
  }, [activeSection, navigationItems]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Only detect sections on home page
      if (location.pathname !== "/") {
        return;
      }

      // Skip auto-detection if we're currently scrolling to a section via click
      if (isScrollingToSection) {
        return;
      }

      // Check which section is currently in view
      const sections = navigationItems.map((item) => item.id);
      let currentSection = "";
      let closestSection = "";
      let minDistance = Infinity;

      // Find the section that is closest to the top of the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const headerHeight = 80;

          // Calculate distance from top of viewport (accounting for header)
          const distanceFromTop = Math.abs(rect.top - headerHeight);

          // If section is visible and closer than previous sections
          if (rect.bottom > headerHeight && rect.top < window.innerHeight) {
            if (distanceFromTop < minDistance) {
              minDistance = distanceFromTop;
              closestSection = section;
            }
          }

          // Special case: if section covers the header area
          if (rect.top <= headerHeight && rect.bottom >= headerHeight + 100) {
            currentSection = section;
          }
        }
      }

      // Use the section that covers header area, or fall back to closest section
      const targetSection = currentSection || closestSection;

      if (targetSection && targetSection !== activeSection) {
        setActiveSection(targetSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section on page load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems, activeSection, isScrollingToSection, location.pathname]);

  // Set active section based on current page
  useEffect(() => {
    if (location.pathname === "/news") {
      setActiveSection("news");
    } else if (location.pathname === "/") {
      // On home page, let scroll detection handle it
      // Do nothing here, scroll detection will update activeSection
    }
  }, [location.pathname]);

  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      // Wait a bit longer for the page to fully render
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          setActiveSection(sectionId);
          const headerHeight = 80;
          const targetPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 300); // Increased timeout for better reliability

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const handleNavigation = (item: (typeof navigationItems)[0]) => {
    // If we're not on home page, navigate to home with hash
    if (location.pathname !== "/") {
      navigate(`/#${item.id}`);
    } else {
      // Already on home page, just scroll
      scrollToSection(item.id);
    }
  };

  const scrollToSection = (sectionId: string) => {
    // Immediately update active section when clicked
    setActiveSection(sectionId);
    setIsScrollingToSection(true);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Reset the flag after scroll animation completes
      setTimeout(() => {
        setIsScrollingToSection(false);
      }, 1000); // Adjust timeout based on scroll animation duration
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
        <nav className="hidden md:flex relative">
          {/* Animated border */}
          <div
            className={`absolute -top-7 h-1 transition-all duration-300 ease-in-out ${
              activeSection ? "bg-[#19b7f9]" : "bg-transparent"
            }`}
            style={{
              left: `${borderStyle.left}px`,
              width: `${borderStyle.width}px`,
            }}
          />
          <ul ref={navRef} className="flex items-center space-x-8 pt-1">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-colors hover:text-blue-300 ${
                    activeSection === item.id
                      ? isScrolled
                        ? "text-[#19b7f9]"
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
