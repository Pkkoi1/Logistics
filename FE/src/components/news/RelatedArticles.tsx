import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ArticleDetail } from "../../data/articleDetailData";

interface RelatedArticlesProps {
  articles: ArticleDetail[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (articles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Bài viết liên quan
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#19b7f9] text-white px-2 py-1 rounded text-xs">
                {article.category}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#19b7f9] transition-colors">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{article.publishDate}</span>
                <span>{article.readTime}</span>
              </div>
              <Link
                to={`/news/${article.id}`}
                className="inline-flex items-center text-[#19b7f9] text-sm font-medium mt-3 hover:text-blue-700 transition-colors"
              >
                Đọc thêm <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
