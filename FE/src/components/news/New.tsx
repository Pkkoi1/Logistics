import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsItem, { type NewsItemProps } from "./NewsItem";

const New: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems: NewsItemProps[] = [
    {
      id: "1",
      date: "24/12",
      year: "2019",
      image:
        "https://bizweb.dktcdn.net/100/374/039/articles/content7.jpg?v=1577162284030",
      title:
        "Tại sao nói miễn phí vận chuyển là yếu tố cạnh tranh trong thời đại công nghệ?",
      excerpt:
        "Như chúng ta đã biết sự bùng nổ của công nghệ 4.0 như hiện nay vừa là thời cơ cũng vừa là thách thức đối...",
      slug: "mien-phi-van-chuyen-canh-tranh",
    },
    {
      id: "2",
      date: "24/12",
      year: "2019",
      image:
        "https://bizweb.dktcdn.net/100/374/039/articles/content6.jpg?v=1577161304093",
      title: "Đánh giá và lựa chọn nhà vận tải một cách hiệu quả",
      excerpt:
        "Phân phối là một trong những ngành quan trọng ở Indonesia với các hoạt động liên quan đến bán buôn, nhập khẩu, xuất khẩu và...",
      slug: "danh-gia-lua-chon-nha-van-tai",
    },
    {
      id: "3",
      date: "24/12",
      year: "2019",
      image:
        "https://bizweb.dktcdn.net/100/374/039/articles/content5.jpg?v=1577157643163",
      title: "7 kinh nghiệm cần phải biết khi cần vận chuyển hàng hóa",
      excerpt:
        "Kinh nghiệm hay khi cần vận chuyển hàng hóa mà bạn rất muốn biết trước khi thuê dịch vụ chuyển hàng giúp chúng ta. Note lại...",
      slug: "kinh-nghiem-van-chuyen-hang-hoa",
    },
    {
      id: "4",
      date: "15/01",
      year: "2020",
      image:
        "https://bizweb.dktcdn.net/100/374/039/articles/content4.jpg?v=1577157046447",
      title: "Xu hướng logistics toàn cầu năm 2020 và những thách thức",
      excerpt:
        "Năm 2020 đánh dấu sự phát triển mạnh mẽ của ngành logistics toàn cầu với nhiều xu hướng mới và thách thức cần vượt qua...",
      slug: "xu-huong-logistics-toan-cau-2020",
    },
    {
      id: "5",
      date: "03/02",
      year: "2020",
      image:
        "https://bizweb.dktcdn.net/100/374/039/articles/content3.jpg?v=1577157046447",
      title: "Giải pháp vận chuyển tối ưu cho doanh nghiệp thương mại điện tử",
      excerpt:
        "Thương mại điện tử đang phát triển mạnh mẽ đòi hỏi các giải pháp vận chuyển nhanh chóng, tiết kiệm chi phí và đảm bảo trải nghiệm...",
      slug: "giai-phap-van-chuyen-thuong-mai-dien-tu",
    },
    {
      id: "6",
      date: "20/03",
      year: "2020",
      image:
        "https://bizweb.dktcdn.net/100/374/039/articles/content2.jpg?v=1577157046447",
      title: "Logistics xanh - Xu hướng phát triển bền vững trong tương lai",
      excerpt:
        "Logistics xanh đang trở thành xu hướng phát triển bền vững được nhiều doanh nghiệp hướng tới nhằm giảm thiểu tác động đến môi trường...",
      slug: "logistics-xanh-phat-trien-ben-vung",
    },
  ];

  const itemsPerSlide = 3;
  const maxSlides = Math.ceil(newsItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <a
            href="#"
            className="text-xl text-gray-800 mb-4 hover:text-[#19b7f9]"
          >
            TIN TỨC KHUYẾN MÃI
          </a>
          <div className="w-16 h-1 bg-[##19b7f9] mx-auto"></div>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            disabled={currentSlide === maxSlides - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide
                      )
                      .map((item) => (
                        <NewsItem key={item.id} {...item} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[##19b7f9]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
