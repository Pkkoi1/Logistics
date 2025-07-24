import React from "react";
import { Calendar, Clock, User, Tag } from "lucide-react";

interface ArticleHeaderProps {
  title: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  author,
  publishDate,
  readTime,
  category,
  tags,
  featuredImage,
  featuredImageAlt,
}) => {
  return (
    <div className="mb-8">
      {/* Featured Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img
          src={featuredImage}
          alt={featuredImageAlt}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Article Meta */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span className="px-2 py-1 bg-[#19b7f9] text-white rounded-full text-xs">
              {category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
