import React from "react";
import ServiceIcon from "./ServiceIcon";

const Service: React.FC = () => {
  return (
    <section id="service" className="py-16 bg-gray-50">
      <div className="max-w-screen">
        <div className="bg-whitep-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">DỊCH VỤ</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="space-y-0">
            {/* Road Transport */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">
              <div className="bg-[#f2f7f8] p-8 lg:pl-[100px] lg:pr-[100px] flex flex-col justify-center">
                <div className="flex items-center">
                  <div className="relative left-[109.4%] top-[110%]">
                    <ServiceIcon
                      src="/icon_service_1.webp"
                      alt="Truck Icon"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Vận chuyển hàng hóa đường bộ
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dịch vụ vận chuyển hàng hóa đường bộ tại mọi nơi trên lãnh thổ
                  Việt Nam với đội xe đông đa dạng từ xe tải nhỏ, xe tải lớn đến
                  xe container, phục vụ mọi nhu cầu vận chuyển của khách hàng
                  với chất lượng tốt nhất.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Trang bị đầy đủ thiết bị bảo quản hàng hóa, đội ngũ tài xế
                  chuyên nghiệp với kinh nghiệm lâu năm trong lĩnh vực vận
                  chuyển hàng hóa đường bộ, cam kết giao hàng đúng hẹn và đảm
                  bảo chất lượng hàng hóa tốt.
                </p>
              </div>
              <div className="bg-gray-100 flex items-center justify-center">
                <img
                  src="image_service_1.webp"
                  alt="Vận chuyển đường bộ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Air Transport */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">
              <div className="bg-blue-500 flex items-center justify-center order-2 lg:order-1">
                <img
                  src="image_service_2.webp"
                  alt="Vận chuyển đường hàng không"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#19b7f9] p-8 lg:px-[100px] flex flex-col justify-center text-white order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="relative right-[26.4%] top-[125%]">
                    <ServiceIcon
                      src="/icon_service_2.webp"
                      alt="Plane Icon"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Vận chuyển hàng hóa đường không
                  </h3>
                </div>
                <p className="leading-relaxed mb-4">
                  Dịch vụ vận chuyển hàng hóa bằng đường hàng không với tốc độ
                  nhanh chóng và an toàn cao. Phù hợp với những lô hàng cần vận
                  chuyển gấp hoặc hàng hóa có giá trị cao, đặc biệt là các mặt
                  hàng xuất nhập khẩu.
                </p>
                <p className="leading-relaxed">
                  Vận chuyển hàng hóa bằng máy bay đảm bảo tính an toàn cao,
                  thời gian vận chuyển nhanh, phù hợp với những lô hàng có giá
                  trị cao hoặc cần giao hàng khẩn cấp. Chúng tôi cam kết mang
                  đến cho khách hàng dịch vụ chất lượng cao nhất với giá cả phù
                  hợp.
                </p>
              </div>
            </div>

            {/* Sea Transport */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">
              <div className="bg-[#f2f7f8] p-8 lg:pl-[100px] lg:pr-[100px] flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="relative left-[109.4%] top-[110%]">
                    <ServiceIcon
                      src="/icon_service_3.webp"
                      alt="Ship Icon"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Vận chuyển hàng hóa đường biển
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vận chuyển hàng hóa bằng tàu biển với chi phí thấp, phù hợp
                  với những lô hàng có khối lượng lớn hoặc không yêu cầu thời
                  gian giao hàng gấp. Cam kết chất lượng cao và đảm bảo hàng hóa
                  được bảo quản tốt nhất.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ngoài ra chúng tôi có thể thực hiện vận chuyển quốc tế, đảm
                  bảo tính an toàn tuyệt đối và thời gian giao hàng chính xác.
                  Đội ngũ nhân viên chuyên nghiệp sẽ hỗ trợ khách hàng trong
                  suốt quá trình vận chuyển hàng hóa bằng đường biển một cách
                  tốt nhất.
                </p>
              </div>
              <div className="bg-gray-100 flex items-center justify-center">
                <img
                  src="image_service_3.webp"
                  alt="Vận chuyển đường biển"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
