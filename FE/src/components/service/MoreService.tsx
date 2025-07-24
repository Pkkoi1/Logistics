import React from "react";

const MoreService: React.FC = () => {
  const services = [
    {
      icon: "icon_transport_1.webp",
      title: "Vận chuyển Thương mại điện Tử",
      description:
        "Là dịch vụ kết hợp giao hàng thu tiền cho khách bán hàng qua mạng, các công ty, cửa hàng chuyên bán trên các kênh Thương Mại Điện Tử",
    },
    {
      icon: "icon_transport_2.webp",
      title: "Dịch vụ Chuyển phát nhanh",
      description:
        "Là dịch vụ nhận gửi hàng hóa, thư từ bưu kiện, bằng đường hàng không, đường bộ với hình thức là nhận tận nơi và phát tận nơi",
    },
    {
      icon: "icon_transport_3.webp",
      title: "Vận chuyển Nguyên chuyến xe",
      description:
        "Là dịch vụ khách hàng thuê nguyên xe ô tô được niêm phong. Dịch vụ đem đến sự linh hoạt và tiện lợi cho khách hàng",
    },
    {
      icon: "icon_transport_4.webp",
      title: "Chuyển phát Nhanh đường bộ",
      description:
        "Là dịch vụ gửi hàng hóa bằng đường bộ bao gồm hàng rời hoặc nguyên xe bao gồm xe 1 tấn, 2 tấn, 5 tấn, 8 tấn, 15 tấn...",
    },
  ];

  return (
    <section id="transport" className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            NGOÀI RA CHÚNG TÔI CUNG CẤP NHIỀU LOẠI HÌNH VẬN CHUYỂN KHÁC
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="relative z-10 flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreService;
