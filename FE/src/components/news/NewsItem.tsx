import { ArrowRight } from "lucide-react";
import React from "react";

export interface NewsItemProps {
  id: string;
  date: string;
  year: string;
  image: string;
  title: string;
  excerpt: string;
  slug: string;
}
const NewsItem: React.FC<NewsItemProps> = ({
  date,
  year,
  image,
  title,
  excerpt,
  slug,
}: NewsItemProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Image with date badge */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-[#19b7f9] text-white p-2 transform rotate-0 flex flex-col items-center justify-center w-16 h-16">
          <span className="text-sm font-bold">{date}</span>
          <span className="text-xs">{year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-[#19b7f9]">
          <a href={`/news/${slug}`}>{title}</a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{excerpt}</p>
        <a
          href={`/news/${slug}`}
          className="text-[##19b7f9] font-medium inline-flex items-center hover:text-[#19b7f9] transition-colors"
        >
          Xem thêm <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
