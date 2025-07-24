import React, { useState } from "react";
import NewsItem from "../../../components/news/NewsItem";
import NewsHero from "../../../components/news/NewsHero";
import BackToTop from "../../../components/common/BackToTop";
import { newsData } from "../../../data/newsData";

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <NewsHero />

      {/* News Grid Section */}
      <div className="py-16 bg-gray-50 mx-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentNews.map((news) => (
              <NewsItem
                key={news.id}
                id={news.id}
                date={news.date}
                year={news.year}
                image={news.image}
                title={news.title}
                excerpt={news.excerpt}
                slug={news.slug}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                ← Trước
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 text-sm rounded transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                Sau →
              </button>
            </nav>
          </div>

          {/* Pagination Info */}
          <div className="text-center mt-4 text-sm text-gray-600">
            Hiển thị {startIndex + 1}-{Math.min(endIndex, newsData.length)}{" "}
            trong tổng số {newsData.length} tin tức
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default News;
