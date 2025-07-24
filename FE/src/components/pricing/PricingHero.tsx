import React from "react";
import { Link } from "react-router-dom";

const PricingHero: React.FC = () => {
  return (
    <section className="relative h-96 bg-slate-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('bg_cover.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-slate-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Bảng giá dịch vụ chuyển xe tải
        </h1>

        {/* Breadcrumb */}
        <nav className="text-sm md:text-base">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-blue-300 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-blue-300">Bảng giá dịch vụ chuyển xe tải</li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PricingHero;
