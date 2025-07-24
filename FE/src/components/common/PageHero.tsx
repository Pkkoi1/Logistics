import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  breadcrumbItems,
  backgroundImage = "/bg_cover.jpg",
}) => {
  return (
    <section className="relative h-96 bg-slate-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="text-sm md:text-base">
          <ol className="flex items-center space-x-2">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <li className="text-gray-300">/</li>}
                <li>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-blue-300">{item.label}</span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHero;
