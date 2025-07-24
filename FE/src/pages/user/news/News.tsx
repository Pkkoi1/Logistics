import React from "react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readMoreLink: string;
}

const News: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Tại sao nói miễn phí vận chuyển lô yếu tố cạnh tranh trong thời đại công nghệ?",
      excerpt: "Như chúng ta đã biết sự bùng nổ của công nghệ 4.0 mà hiện nay việc vận chuyển là một trong những thực đó...",
      image: "/image_service_1.webp",
      date: "24/12 2019",
      readMoreLink: "#"
    },
    {
      id: 2,
      title: "Đánh giá về lựa chọn nhà vận tải một cách hiệu quả",
      excerpt: "Phần phổi là một trong những ngành quan trọng ở Indonesia với các hoạt động được vận chuyển đến bên buôn, phân khối, xuất khẩu và...",
      image: "/image_service_2.webp",
      date: "24/12 2019",
      readMoreLink: "#"
    },
    {
      id: 3,
      title: "7 kinh nghiệm cần phải biết khi cần vận chuyển hàng hóa",
      excerpt: "Kinh nghiệm hay khi cần vận chuyển hàng hóa nào giúp tốt nhất trước khi thực hiện việc chuyển hàng giúp chúng ta. Nếu tại...",
      image: "/image_service_3.webp",
      date: "24/12 2019",
      readMoreLink: "#"
    },
    {
      id: 4,
      title: "Dùng nó dịch vụ chuyển phát nhanh quốc tế",
      excerpt: "Cung việc sự phát triển của thương mại điện tử, các...",
      image: "/image_service_1.webp",
      date: "24/12 2019",
      readMoreLink: "#"
    },
    {
      id: 5,
      title: "Vận tải đa phương thức là gì",
      excerpt: "Vận tải đa phương thức là gì? Vận tải đa phương thức là vận tải hàng hóa bằng nhiều phương thức...",
      image: "/image_service_2.webp",
      date: "24/12 2019",
      readMoreLink: "#"
    },
    {
      id: 6,
      title: "Khái quát về vận tải đường biển",
      excerpt: "Một số khái quát chi tiết về cận đường chuyển vận tài đường biển Tìm hiểu về cận đường vận tải...",
      image: "/image_service_3.webp",
      date: "24/12 2019",
      readMoreLink: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/bg_cover.jpg')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin tức</h1>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span>Trang chủ</span>
              <span>/</span>
              <span className="text-blue-400">Tin tức</span>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Date Badge */}
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold">
                    <div className="text-center">
                      <div className="text-lg font-bold">{news.date.split(' ')[0].split('/')[0]}</div>
                      <div className="text-xs">{news.date.split(' ')[0].split('/')[1]}</div>
                      <div className="text-xs">{news.date.split(' ')[1]}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <a
                    href={news.readMoreLink}
                    className="text-blue-500 hover:text-blue-700 text-sm font-semibold inline-flex items-center"
                  >
                    Xem thêm →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
                ← Trước
              </button>
              <button className="px-3 py-2 text-sm bg-blue-500 text-white rounded">
                1
              </button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
                2
              </button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
                3
              </button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
                Sau →
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
