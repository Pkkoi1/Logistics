import React, { useState, useEffect } from "react";

const UserHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: "Về chúng tôi", href: "#" },
    { label: "Dịch vụ", href: "#" },
    { label: "Vận chuyển", href: "#" },
    { label: "Thông kê", href: "#" },
    { label: "Tin tức", href: "#" },
    { label: "Liên hệ", href: "#" },
    { label: "Báo giá", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-300 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
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
