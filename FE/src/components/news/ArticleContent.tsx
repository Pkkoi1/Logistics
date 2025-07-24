import React from "react";
import type { ArticleSection } from "../../data/articleDetailData";

interface ArticleContentProps {
  sections: ArticleSection[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({ sections }) => {
  const renderSection = (section: ArticleSection) => {
    switch (section.type) {
      case "heading":
        return (
          <h2
            key={section.id}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8"
          >
            {section.content}
          </h2>
        );

      case "text":
        return (
          <p
            key={section.id}
            className="text-gray-700 leading-relaxed mb-6 text-justify"
          >
            {section.content}
          </p>
        );

      case "list":
        return (
          <div key={section.id} className="mb-6">
            {section.content && (
              <p className="text-gray-700 font-medium mb-3">
                {section.content}
              </p>
            )}
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.listItems?.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );

      case "quote":
        return (
          <blockquote
            key={section.id}
            className="border-l-4 border-[#19b7f9] bg-blue-50 p-4 my-6 italic text-gray-700"
          >
            <p className="text-lg">{section.content}</p>
          </blockquote>
        );

      case "image":
        return (
          <div key={section.id} className="my-8">
            <img
              src={section.imageUrl}
              alt={section.imageAlt || section.content}
              className="w-full h-auto rounded-lg shadow-md"
            />
            {section.content && (
              <p className="text-sm text-gray-600 text-center mt-2 italic">
                {section.content}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {sections.map((section) => renderSection(section))}
    </div>
  );
};

export default ArticleContent;
