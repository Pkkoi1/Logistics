import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "../../../data/articleDetailData";
import ArticleHeader from "../../../components/news/ArticleHeader";
import ArticleContent from "../../../components/news/ArticleContent";
import RelatedArticles from "../../../components/news/RelatedArticles";
import NewsDetailHero from "../../../components/news/NewsDetailHero";
import BackToTop from "../../../components/common/BackToTop";

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/news" replace />;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Bài viết không tồn tại
          </h1>
          <p className="text-gray-600 mb-6">
            Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center px-4 py-2 bg-[#19b7f9] text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Quay lại trang tin tức
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.id, 3);

  return (
    <div className="bg-white min-h-screen">
      <NewsDetailHero title={article.title} />

      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <ArticleHeader
            title={article.title}
            author={article.author}
            publishDate={article.publishDate}
            readTime={article.readTime}
            category={article.category}
            tags={article.tags}
            featuredImage={article.featuredImage}
            featuredImageAlt={article.featuredImageAlt}
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              {article.excerpt}
            </p>

            <ArticleContent sections={article.sections} />
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>

      <BackToTop />
    </div>
  );
};

export default NewsDetail;
