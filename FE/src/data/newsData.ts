export interface NewsItem {
  id: string;
  date: string;
  year: string;
  image: string;
  title: string;
  excerpt: string;
  slug: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    date: "24",
    year: "T12",
    image: "/image_service_1.webp",
    title:
      "Tại sao nói miễn phí vận chuyển là yếu tố cạnh tranh trong thời đại công nghệ?",
    excerpt:
      "Như chúng ta đã biết sự bùng nổ của công nghệ 4.0 mà hiện nay việc vận chuyển là một trong những thực đó. Với sự phát triển của thương mại điện tử, việc cung cấp dịch vụ vận chuyển miễn phí đã trở thành yếu tố quan trọng để thu hút khách hàng.",
    slug: "mien-phi-van-chuyen-yeu-to-canh-tranh",
  },
  {
    id: "2",
    date: "23",
    year: "T12",
    image: "/image_service_2.webp",
    title: "Đánh giá về lựa chọn nhà vận tải một cách hiệu quả",
    excerpt:
      "Phần phối là một trong những ngành quan trọng ở Indonesia với các hoạt động được vận chuyển đến bên buôn, phân khối, xuất khẩu và nhập khẩu. Việc lựa chọn nhà vận tải phù hợp sẽ giúp doanh nghiệp tiết kiệm chi phí và tăng hiệu quả.",
    slug: "lua-chon-nha-van-tai-hieu-qua",
  },
  {
    id: "3",
    date: "22",
    year: "T12",
    image: "/image_service_3.webp",
    title: "7 kinh nghiệm cần phải biết khi cần vận chuyển hàng hóa",
    excerpt:
      "Kinh nghiệm hay khi cần vận chuyển hàng hóa nào giúp tốt nhất trước khi thực hiện việc chuyển hàng giúp chúng ta. Nếu tại thời điểm này bạn đang có nhu cầu vận chuyển hàng hóa thì những kinh nghiệm sau sẽ rất hữu ích.",
    slug: "7-kinh-nghiem-van-chuyen-hang-hoa",
  },
  {
    id: "4",
    date: "21",
    year: "T12",
    image: "/image_service_1.webp",
    title: "Dịch vụ chuyển phát nhanh quốc tế tốt nhất hiện nay",
    excerpt:
      "Cùng với sự phát triển của thương mại điện tử, các dịch vụ chuyển phát nhanh quốc tế ngày càng được quan tâm. Việc lựa chọn đơn vị uy tín và chất lượng là điều rất quan trọng để đảm bảo hàng hóa được giao an toàn.",
    slug: "dich-vu-chuyen-phat-nhanh-quoc-te",
  },
  {
    id: "5",
    date: "20",
    year: "T12",
    image: "/image_service_2.webp",
    title: "Vận tải đa phương thức là gì? Ưu điểm và nhược điểm",
    excerpt:
      "Vận tải đa phương thức là gì? Vận tải đa phương thức là vận tải hàng hóa bằng nhiều phương thức vận tải khác nhau trong cùng một hành trình. Đây là xu hướng phát triển mạnh trong ngành logistics hiện đại.",
    slug: "van-tai-da-phuong-thuc",
  },
  {
    id: "6",
    date: "19",
    year: "T12",
    image: "/image_service_3.webp",
    title: "Khái quát về vận tải đường biển và những điều cần biết",
    excerpt:
      "Một số khái quát chi tiết về ngành vận tài đường biển. Tìm hiểu về ngành vận tải đường biển, các loại hình dịch vụ và những lưu ý quan trọng khi sử dụng phương thức vận chuyển này.",
    slug: "van-tai-duong-bien",
  },
  {
    id: "7",
    date: "18",
    year: "T12",
    image: "/image_service_1.webp",
    title: "Xu hướng phát triển của ngành logistics Việt Nam",
    excerpt:
      "Ngành logistics Việt Nam đang có những bước phát triển mạnh mẽ. Với sự đầu tư vào công nghệ và cơ sở hạ tầng, ngành này hứa hẹn sẽ có nhiều cơ hội tăng trưởng trong tương lai gần.",
    slug: "xu-huong-phat-trien-logistics-viet-nam",
  },
  {
    id: "8",
    date: "17",
    year: "T12",
    image: "/image_service_2.webp",
    title: "Cách tối ưu hóa chi phí vận chuyển cho doanh nghiệp",
    excerpt:
      "Việc tối ưu hóa chi phí vận chuyển là mối quan tâm hàng đầu của các doanh nghiệp. Bài viết sẽ chia sẻ những phương pháp hiệu quả để giảm thiểu chi phí mà vẫn đảm bảo chất lượng dịch vụ.",
    slug: "toi-uu-chi-phi-van-chuyen",
  },
  {
    id: "9",
    date: "16",
    year: "T12",
    image: "/image_service_3.webp",
    title: "Quy trình xuất nhập khẩu hàng hóa tại Việt Nam",
    excerpt:
      "Quy trình xuất nhập khẩu hàng hóa có nhiều bước phức tạp. Hiểu rõ các thủ tục và quy định sẽ giúp doanh nghiệp thực hiện các giao dịch thương mại quốc tế một cách thuận lợi và đúng pháp luật.",
    slug: "quy-trinh-xuat-nhap-khau",
  },
  {
    id: "10",
    date: "15",
    year: "T12",
    image: "/image_service_1.webp",
    title: "Công nghệ IoT trong ngành vận tải và logistics",
    excerpt:
      "Công nghệ IoT (Internet of Things) đang cách mạng hóa ngành vận tải và logistics. Từ việc theo dõi hàng hóa đến tối ưu hóa tuyến đường, IoT mang lại nhiều lợi ích thiết thực cho các doanh nghiệp.",
    slug: "cong-nghe-iot-van-tai-logistics",
  },
  {
    id: "11",
    date: "14",
    year: "T12",
    image: "/image_service_2.webp",
    title: "Bảo hiểm hàng hóa trong vận tải - Những điều cần biết",
    excerpt:
      "Bảo hiểm hàng hóa là một phần quan trọng trong quá trình vận chuyển. Việc hiểu rõ các loại bảo hiểm và cách thức bồi thường sẽ giúp bảo vệ lợi ích của khách hàng khi có rủi ro xảy ra.",
    slug: "bao-hiem-hang-hoa-van-tai",
  },
  {
    id: "12",
    date: "13",
    year: "T12",
    image: "/image_service_3.webp",
    title: "Kho bãi thông minh - Tương lai của ngành logistics",
    excerpt:
      "Kho bãi thông minh với hệ thống tự động hóa và AI đang trở thành xu hướng mới. Công nghệ này giúp tăng hiệu quả hoạt động, giảm sai sót và tiết kiệm chi phí vận hành đáng kể.",
    slug: "kho-bai-thong-minh",
  },
];
