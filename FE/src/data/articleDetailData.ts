export interface ArticleSection {
  id: string;
  type: "text" | "image" | "list" | "quote" | "heading";
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  listItems?: string[];
}

export interface ArticleDetail {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  sections: ArticleSection[];
  relatedArticles: string[]; // IDs của các bài viết liên quan
}

export const articleDetailData: { [key: string]: ArticleDetail } = {
  "mien-phi-van-chuyen-yeu-to-canh-tranh": {
    id: "mien-phi-van-chuyen-yeu-to-canh-tranh",
    title:
      "Tại sao nói miễn phí vận chuyển là yếu tố cạnh tranh trong thời đại công nghệ?",
    excerpt:
      "Như chúng ta đã biết sự bùng nổ của công nghệ 4.0 mà hiện nay việc vận chuyển là một trong những thực đó. Với sự phát triển của thương mại điện tử, việc cung cấp dịch vụ vận chuyển miễn phí đã trở thành yếu tố quan trọng để thu hút khách hàng.",
    author: "Nguyễn Văn An",
    publishDate: "24/12/2024",
    readTime: "5 phút đọc",
    category: "Vận chuyển",
    tags: [
      "Miễn phí vận chuyển",
      "Thương mại điện tử",
      "Công nghệ 4.0",
      "Cạnh tranh",
    ],
    featuredImage: "/image_service_1.webp",
    featuredImageAlt: "Miễn phí vận chuyển trong thời đại công nghệ",
    sections: [
      {
        id: "intro",
        type: "text",
        content:
          "Như chúng ta đã biết sự bùng nổ của công nghệ 4.0 mà hiện nay việc vận chuyển là một trong những thực đó. Với sự phát triển của thương mại điện tử, việc cung cấp dịch vụ vận chuyển miễn phí đã trở thành yếu tố quan trọng để thu hút khách hàng. Khách hàng có nhiều lựa chọn hơn đồng nghĩa với việc doanh nghiệp của bạn phải đưa ra chiến lược khác biệt để thu hút khách hàng. Miễn phí vận chuyển hiện đang là phương thức đang là một trong những yếu tố cạnh tranh trong thời đại công nghệ. Vậy tại sao lại như vậy? Chúng ta cùng tìm hiểu qua bài viết dưới đây nhé!",
      },
      {
        id: "section1-heading",
        type: "heading",
        content:
          "1. Miễn phí vận chuyển là gì? Tại sao miễn phí vận chuyển lại tạo nên một cơn sốt hiện nay",
      },
      {
        id: "section1-text",
        type: "text",
        content:
          "Vận chuyển hàng hóa được hiểu là việc giao nhận hàng hóa đi chuyển từ nơi này đến nơi khác. Thông thường vận chuyển hàng hóa gắn với các dịch vụ vận chuyển hàng hóa và có sự kỳ kết hợp đồng vận chuyển giữa người gửi hàng và người nhận hàng.",
      },
      {
        id: "section1-image",
        type: "image",
        content: "Dịch vụ vận chuyển miễn phí trong thời đại số",
        imageUrl: "/icon_transport_1.webp",
        imageAlt: "Vận chuyển miễn phí",
      },
      {
        id: "section1-list",
        type: "list",
        content: "Lợi ích của miễn phí vận chuyển:",
        listItems: [
          "Có được lượng khách hàng trung thành",
          "Sản phẩm có chất lượng tốt kết hợp với yếu tố miễn phí vận chuyển sẽ tạo cho doanh nghiệp có được sự yêu mến của khách hàng và tạo được mối quan hệ lâu dài với khách hàng",
          "Đối khi những khách hàng trung thành này sẽ giúp giới thiệu sản phẩm của bạn đến với những người bạn, người đồng nghiệp của mình. Có thể gọi đây là hình thức tiếp thị không tốn kém mà hiệu quả cao",
          "Nếu tin miễn phí vận chuyển được thông báo qua Email thì đơn giản là khách sẽ có thời gian nhận email từ doanh nghiệp để nắm bắt tin tức mới nhất, qua thúc sự quan tâm tìm hiểu",
        ],
      },
      {
        id: "section2-heading",
        type: "heading",
        content: "a. Có được lượng khách hàng trung thành",
      },
      {
        id: "section2-text",
        type: "text",
        content:
          "Sản phẩm có chất lượng tốt kết hợp với yếu tố miễn phí vận chuyển sẽ tạo cho doanh nghiệp có được sự yêu mến của khách hàng và tạo được mối quan hệ lâu dài với khách hàng.",
      },
      {
        id: "section2-image",
        type: "image",
        content: "Khách hàng trung thành - Yếu tố quan trọng của doanh nghiệp",
        imageUrl: "/icon_transport_2.webp",
        imageAlt: "Khách hàng trung thành",
      },
      {
        id: "section2-quote",
        type: "quote",
        content:
          "Miễn phí vận chuyển giúp doanh nghiệp có được lượng khách hàng trung thành.",
      },
      {
        id: "section3-text",
        type: "text",
        content:
          "Đối khi những khách hàng trung thành này sẽ giúp giới thiệu sản phẩm của bạn đến với những người bạn, người đồng nghiệp của mình. Có thể gọi đây là hình thức tiếp thị không tốn kém mà hiệu quả cao.",
      },
      {
        id: "section4-text",
        type: "text",
        content:
          "Vì vậy: Nếu tin miễn phí vận chuyển được thông báo qua Email thì đơn giản là khách sẽ có thời gian nhận email từ doanh nghiệp để nắm bắt tin tức mới nhất, qua thúc sự quan tâm tìm hiểu.",
      },
      {
        id: "section5-text",
        type: "text",
        content:
          "Tuy nhiên, để có lượng khách hàng trung thành này thì doanh nghiệp của bạn phải áp dụng chiến lược miễn phí vận chuyển trong suốt quá trình kinh doanh của mình. Bạn có chắc chắn rằng nếu như không áp dụng miễn phí ship thì khách hàng sẽ vẫn lựa chọn bạn không?",
      },
      {
        id: "section6-text",
        type: "text",
        content:
          "Đó có rất nhiều trường hợp khi để lấy lòng khách hàng mà lựa chọn Freeship để có lượng khách hàng ổn định nhưng cuối mất thời gian sau nếu doanh nghiệp bạn không áp dụng hình thức này nữa thì họ sẽn sàng rời bỏ bạn.",
      },
      {
        id: "section7-heading",
        type: "heading",
        content: "1. Miễn phí vận chuyển giúp tăng doanh thu và lợi nhuận",
      },
      {
        id: "section7-text",
        type: "text",
        content:
          "Một thực tế dễ thấy là khi chi phí vận chuyển của doanh nghiệp bạn sẽ trở nên nhỏ hơn khi số lượng đơn hàng tăng lên và số lượng khách hàng cũ cũng tăng đáng kể.",
      },
      {
        id: "section7-image",
        type: "image",
        content: "Tăng doanh thu thông qua miễn phí vận chuyển",
        imageUrl: "/icon_transport_3.webp",
        imageAlt: "Tăng doanh thu",
      },
      {
        id: "section8-text",
        type: "text",
        content:
          "Đây là điều đương nhiên khi áp dụng miễn phí vận chuyển, nếu như áp dụng cách này mà việc kinh doanh của bạn vẫn giảm chậm trễ chỉ thì cần phải xem lại các khâu vấn hành ngay nhé.",
      },
      {
        id: "conclusion-image",
        type: "image",
        content: "Miễn phí vận chuyển trong ngành logistics",
        imageUrl: "/image_service_2.webp",
        imageAlt: "Dịch vụ vận chuyển miễn phí",
      },
    ],
    relatedArticles: [
      "lua-chon-nha-van-tai-hieu-qua",
      "7-kinh-nghiem-van-chuyen-hang-hoa",
      "toi-uu-chi-phi-van-chuyen",
    ],
  },

  "lua-chon-nha-van-tai-hieu-qua": {
    id: "lua-chon-nha-van-tai-hieu-qua",
    title: "Đánh giá về lựa chọn nhà vận tải một cách hiệu quả",
    excerpt:
      "Phần phối là một trong những ngành quan trọng ở Indonesia với các hoạt động được vận chuyển đến bên buôn, phân khối, xuất khẩu và nhập khẩu. Việc lựa chọn nhà vận tải phù hợp sẽ giúp doanh nghiệp tiết kiệm chi phí và tăng hiệu quả.",
    author: "Trần Thị Bình",
    publishDate: "23/12/2024",
    readTime: "7 phút đọc",
    category: "Logistics",
    tags: ["Nhà vận tải", "Lựa chọn", "Hiệu quả", "Chi phí"],
    featuredImage: "/image_service_2.webp",
    featuredImageAlt: "Lựa chọn nhà vận tải hiệu quả",
    sections: [
      {
        id: "intro",
        type: "text",
        content:
          "Phần phối là một trong những ngành quan trọng ở Indonesia với các hoạt động được vận chuyển đến bên buôn, phân khối, xuất khẩu và nhập khẩu. Việc lựa chọn nhà vận tải phù hợp sẽ giúp doanh nghiệp tiết kiệm chi phí và tăng hiệu quả hoạt động kinh doanh.",
      },
      {
        id: "intro-image",
        type: "image",
        content: "Lựa chọn nhà vận tải phù hợp cho doanh nghiệp",
        imageUrl: "/icon_service_1.webp",
        imageAlt: "Nhà vận tải uy tín",
      },
      {
        id: "criteria-heading",
        type: "heading",
        content: "Tiêu chí lựa chọn nhà vận tải",
      },
      {
        id: "criteria-list",
        type: "list",
        content: "Các tiêu chí quan trọng khi lựa chọn nhà vận tải:",
        listItems: [
          "Uy tín và kinh nghiệm trong ngành",
          "Mạng lưới vận chuyển rộng khắp",
          "Giá cả cạnh tranh và minh bạch",
          "Chất lượng dịch vụ khách hàng",
          "Khả năng theo dõi và báo cáo",
          "Bảo hiểm và bồi thường",
        ],
      },
      {
        id: "criteria-image",
        type: "image",
        content: "Tiêu chí đánh giá nhà vận tải chuyên nghiệp",
        imageUrl: "/icon_service_2.webp",
        imageAlt: "Tiêu chí đánh giá nhà vận tải",
      },
      {
        id: "evaluation-process",
        type: "heading",
        content: "Quy trình đánh giá nhà vận tải",
      },
      {
        id: "process-text",
        type: "text",
        content:
          "Để lựa chọn được nhà vận tải phù hợp, doanh nghiệp cần thực hiện một quy trình đánh giá có hệ thống và khoa học.",
      },
      {
        id: "process-image",
        type: "image",
        content: "Quy trình đánh giá và lựa chọn nhà vận tải",
        imageUrl: "/icon_service_3.webp",
        imageAlt: "Quy trình đánh giá nhà vận tải",
      },
      {
        id: "benefits",
        type: "heading",
        content: "Lợi ích của việc lựa chọn đúng nhà vận tải",
      },
      {
        id: "benefits-text",
        type: "text",
        content:
          "Việc lựa chọn đúng nhà vận tải sẽ mang lại nhiều lợi ích thiết thực cho doanh nghiệp, từ tiết kiệm chi phí đến nâng cao chất lượng dịch vụ.",
      },
    ],
    relatedArticles: [
      "mien-phi-van-chuyen-yeu-to-canh-tranh",
      "7-kinh-nghiem-van-chuyen-hang-hoa",
      "van-tai-da-phuong-thuc",
    ],
  },

  "7-kinh-nghiem-van-chuyen-hang-hoa": {
    id: "7-kinh-nghiem-van-chuyen-hang-hoa",
    title: "7 kinh nghiệm cần phải biết khi cần vận chuyển hàng hóa",
    excerpt:
      "Kinh nghiệm hay khi cần vận chuyển hàng hóa nào giúp tốt nhất trước khi thực hiện việc chuyển hàng giúp chúng ta. Nếu tại thời điểm này bạn đang có nhu cầu vận chuyển hàng hóa thì những kinh nghiệm sau sẽ rất hữu ích.",
    author: "Lê Minh Hải",
    publishDate: "22/12/2024",
    readTime: "6 phút đọc",
    category: "Kinh nghiệm",
    tags: ["Vận chuyển", "Kinh nghiệm", "Hàng hóa", "Tips"],
    featuredImage: "/image_service_3.webp",
    featuredImageAlt: "Kinh nghiệm vận chuyển hàng hóa",
    sections: [
      {
        id: "intro",
        type: "text",
        content:
          "Kinh nghiệm hay khi cần vận chuyển hàng hóa nào giúp tốt nhất trước khi thực hiện việc chuyển hàng giúp chúng ta. Nếu tại thời điểm này bạn đang có nhu cầu vận chuyển hàng hóa thì những kinh nghiệm sau sẽ rất hữu ích.",
      },
      {
        id: "intro-image",
        type: "image",
        content: "7 kinh nghiệm quan trọng trong vận chuyển hàng hóa",
        imageUrl: "/icon_transport_4.webp",
        imageAlt: "Kinh nghiệm vận chuyển hàng hóa",
      },
      {
        id: "experience-1",
        type: "heading",
        content: "1. Chuẩn bị đầy đủ giấy tờ và thông tin",
      },
      {
        id: "exp1-text",
        type: "text",
        content:
          "Việc chuẩn bị đầy đủ giấy tờ và thông tin là bước đầu tiên và quan trọng nhất trong quá trình vận chuyển hàng hóa.",
      },
      {
        id: "exp1-image",
        type: "image",
        content: "Chuẩn bị giấy tờ cho việc vận chuyển hàng hóa",
        imageUrl: "/icon_1.png",
        imageAlt: "Giấy tờ vận chuyển",
      },
      {
        id: "experience-2",
        type: "heading",
        content: "2. Đóng gói hàng hóa an toàn",
      },
      {
        id: "exp2-text",
        type: "text",
        content:
          "Đóng gói hàng hóa đúng cách sẽ đảm bảo hàng hóa được bảo vệ trong suốt quá trình vận chuyển.",
      },
      {
        id: "exp2-image",
        type: "image",
        content: "Đóng gói hàng hóa an toàn và chuyên nghiệp",
        imageUrl: "/icon_2.png",
        imageAlt: "Đóng gói hàng hóa",
      },
      {
        id: "experience-3",
        type: "heading",
        content: "3. Lựa chọn phương thức vận chuyển phù hợp",
      },
      {
        id: "exp3-text",
        type: "text",
        content:
          "Mỗi loại hàng hóa sẽ phù hợp với một phương thức vận chuyển khác nhau tùy vào tính chất và yêu cầu cụ thể.",
      },
      {
        id: "experience-4",
        type: "heading",
        content: "4. Mua bảo hiểm hàng hóa",
      },
      {
        id: "exp4-text",
        type: "text",
        content:
          "Bảo hiểm hàng hóa là một biện pháp bảo vệ quan trọng để giảm thiểu rủi ro tài chính.",
      },
      {
        id: "exp4-image",
        type: "image",
        content: "Bảo hiểm hàng hóa - Bảo vệ tài sản của bạn",
        imageUrl: "/icon_3.png",
        imageAlt: "Bảo hiểm hàng hóa",
      },
      {
        id: "experience-5",
        type: "heading",
        content: "5. Theo dõi hành trình vận chuyển",
      },
      {
        id: "exp5-text",
        type: "text",
        content:
          "Việc theo dõi hành trình giúp bạn nắm bắt tình hình vận chuyển và xử lý kịp thời các vấn đề phát sinh.",
      },
      {
        id: "experience-6",
        type: "heading",
        content: "6. Kiểm tra hàng hóa khi nhận",
      },
      {
        id: "exp6-text",
        type: "text",
        content:
          "Luôn kiểm tra kỹ lưỡng hàng hóa ngay khi nhận để phát hiện và xử lý các vấn đề một cách kịp thời.",
      },
      {
        id: "experience-7",
        type: "heading",
        content: "7. Giữ lại các chứng từ vận chuyển",
      },
      {
        id: "exp7-text",
        type: "text",
        content:
          "Các chứng từ vận chuyển là bằng chứng quan trọng cho việc khiếu nại và giải quyết tranh chấp nếu có.",
      },
      {
        id: "conclusion-image",
        type: "image",
        content: "Kinh nghiệm vận chuyển hàng hóa thành công",
        imageUrl: "/truck.webp",
        imageAlt: "Vận chuyển hàng hóa chuyên nghiệp",
      },
    ],
    relatedArticles: [
      "mien-phi-van-chuyen-yeu-to-canh-tranh",
      "lua-chon-nha-van-tai-hieu-qua",
      "bao-hiem-hang-hoa-van-tai",
    ],
  },

  "dich-vu-chuyen-phat-nhanh-quoc-te": {
    id: "dich-vu-chuyen-phat-nhanh-quoc-te",
    title: "Dịch vụ chuyển phát nhanh quốc tế tốt nhất hiện nay",
    excerpt:
      "Cùng với sự phát triển của thương mại điện tử, các dịch vụ chuyển phát nhanh quốc tế ngày càng được quan tâm. Việc lựa chọn đơn vị uy tín và chất lượng là điều rất quan trọng để đảm bảo hàng hóa được giao an toàn.",
    author: "Phạm Văn Đức",
    publishDate: "21/12/2024",
    readTime: "8 phút đọc",
    category: "Dịch vụ",
    tags: ["Chuyển phát nhanh", "Quốc tế", "Express", "Global shipping"],
    featuredImage: "/image_service_1.webp",
    featuredImageAlt: "Dịch vụ chuyển phát nhanh quốc tế",
    sections: [
      {
        id: "intro",
        type: "text",
        content:
          "Trong thời đại toàn cầu hóa, nhu cầu vận chuyển hàng hóa qua biên giới ngày càng tăng cao. Dịch vụ chuyển phát nhanh quốc tế không chỉ đơn thuần là việc di chuyển hàng hóa mà còn là cầu nối quan trọng trong các hoạt động thương mại, kết nối các doanh nghiệp và cá nhân trên toàn thế giới.",
      },
      {
        id: "intro-image",
        type: "image",
        content: "Mạng lưới chuyển phát nhanh toàn cầu",
        imageUrl: "/map.png",
        imageAlt: "Bản đồ dịch vụ chuyển phát nhanh quốc tế",
      },
      {
        id: "benefits-heading",
        type: "heading",
        content: "Lợi ích của dịch vụ chuyển phát nhanh quốc tế",
      },
      {
        id: "benefits-list",
        type: "list",
        content: "Những ưu điểm nổi bật của dịch vụ chuyển phát nhanh quốc tế:",
        listItems: [
          "Tốc độ giao hàng nhanh chóng (1-5 ngày làm việc)",
          "Theo dõi hành trình realtime 24/7",
          "Bảo hiểm toàn diện cho hàng hóa",
          "Dịch vụ hải quan chuyên nghiệp",
          "Mạng lưới phủ sóng toàn cầu",
          "Hỗ trợ khách hàng đa ngôn ngữ",
        ],
      },
      {
        id: "benefits-image",
        type: "image",
        content: "Lợi ích của dịch vụ express quốc tế",
        imageUrl: "/icon_service_1.webp",
        imageAlt: "Ưu điểm chuyển phát nhanh",
      },
      {
        id: "types-heading",
        type: "heading",
        content: "Các loại hình dịch vụ chuyển phát nhanh quốc tế",
      },
      {
        id: "types-text",
        type: "text",
        content:
          "Hiện nay có nhiều loại hình dịch vụ chuyển phát nhanh quốc tế khác nhau, phù hợp với nhu cầu đa dạng của khách hàng từ cá nhân đến doanh nghiệp lớn.",
      },
      {
        id: "express-quote",
        type: "quote",
        content:
          "Thời gian là tiền bạc - trong thương mại quốc tế, tốc độ giao hàng có thể quyết định thành bại của một thương vụ.",
      },
      {
        id: "services-image",
        type: "image",
        content: "Đa dạng dịch vụ chuyển phát nhanh",
        imageUrl: "/icon_service_2.webp",
        imageAlt: "Các loại dịch vụ express",
      },
      {
        id: "selection-heading",
        type: "heading",
        content: "Cách lựa chọn nhà cung cấp dịch vụ uy tín",
      },
      {
        id: "selection-text",
        type: "text",
        content:
          "Việc lựa chọn nhà cung cấp dịch vụ chuyển phát nhanh quốc tế phù hợp đòi hỏi sự cân nhắc kỹ lưỡng về nhiều yếu tố quan trọng.",
      },
      {
        id: "provider-image",
        type: "image",
        content: "Lựa chọn nhà cung cấp dịch vụ uy tín",
        imageUrl: "/icon_service_3.webp",
        imageAlt: "Nhà cung cấp dịch vụ chuyên nghiệp",
      },
      {
        id: "conclusion",
        type: "text",
        content:
          "Dịch vụ chuyển phát nhanh quốc tế đang ngày càng phát triển và hoàn thiện. Việc lựa chọn đúng nhà cung cấp sẽ giúp bạn tiết kiệm thời gian, chi phí và đảm bảo hàng hóa được giao an toàn đến tay người nhận.",
      },
    ],
    relatedArticles: [
      "mien-phi-van-chuyen-yeu-to-canh-tranh",
      "lua-chon-nha-van-tai-hieu-qua",
      "van-tai-da-phuong-thuc",
    ],
  },
};

// Hàm helper để lấy chi tiết bài viết theo slug
export const getArticleBySlug = (slug: string): ArticleDetail | null => {
  return articleDetailData[slug] || null;
};

// Hàm helper để lấy danh sách bài viết liên quan
export const getRelatedArticles = (
  articleId: string,
  limit: number = 3
): ArticleDetail[] => {
  const article = articleDetailData[articleId];
  if (!article) return [];

  return article.relatedArticles
    .map((id) => articleDetailData[id])
    .filter(Boolean)
    .slice(0, limit);
};

// Hàm helper để lấy bài viết theo category
export const getArticlesByCategory = (category: string): ArticleDetail[] => {
  return Object.values(articleDetailData).filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
};

// Hàm helper để tìm kiếm bài viết theo tag
export const getArticlesByTag = (tag: string): ArticleDetail[] => {
  return Object.values(articleDetailData).filter((article) =>
    article.tags.some((articleTag) =>
      articleTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};
