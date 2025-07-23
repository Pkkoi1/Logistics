import React from "react";

const Reason: React.FC = () => {
  const features = [
    {
      number: "01",
      title: "Chủ động kiểm soát",
      description:
        "Hệ thống Tracking và quản lý Online cho phép khách hàng có thể chủ động kiểm soát hành trình của đơn hàng",
    },
    {
      number: "02",
      title: "Đội ngũ chuyên nghiệp",
      description:
        "Với nhiều chuyên viên lâu năm cùng với đội ngũ lãnh đạo Logistics lâu năm tuyệt đối",
    },
    {
      number: "03",
      title: "Mạng lưới giao thông rộng khắp",
      description:
        "Chúng tôi vận chuyển hàng hóa tới 63 tỉnh/thành phố toàn quốc cùng 220 quốc gia và lãnh thổ",
    },
    {
      number: "04",
      title: "Đa dạng dịch vụ vận chuyển",
      description:
        "Chúng tôi mang tới nhiều sự lựa chọn chuyển phát phù hợp với từng yêu cầu đặc thù mỗi có nhận/tổ chức",
    },
  ];

  return (
    <section
      className="pt-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('choose_bg.png')",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-center">
            <img
              src="man.webp"
              alt="Nhân viên giao hàng chuyên nghiệp"
              className="w-[50%]"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                TẠI SAO NÊN CHỌN CHÚNG TÔI
              </h2>
              <div className="w-16 h-[2px] bg-[#19b7f9] mx-auto"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#19b7f9] -mt-1 text-white text-lg flex items-center justify-center transform rotate-45">
                      <span className="transform -rotate-45">
                        {feature.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
