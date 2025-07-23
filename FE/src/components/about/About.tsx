import React from "react";

const About: React.FC = () => {
  return (
    <div className="">
      <section className="bg-[url('map.png')] bg-contain bg-center bg-no-repeat py-16 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              VỀ CHÚNG TÔI
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Giới thiệu chung */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 cursor-pointer">
                  <img src="/icon_1.png" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Giới thiệu chung
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chúng tôi thực hiện dịch vụ vận chuyển hàng hóa trên toàn quốc
                bằng đường bộ, đường hàng không, đường biển với mọi tuyến đường
                theo nhu cầu của khách hàng. Ngoài ra, chúng tôi còn có nhiều
                dịch vụ vận chuyển khác để phục vụ khách hàng.
              </p>
            </div>

            {/* Sứ mệnh */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 cursor-pointer">
                  <img src="/icon_2.png" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sứ mệnh
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chúng tôi mong muốn không chỉ mong đến cho khách hàng một dịch
                vụ chất lượng theo tiêu chuẩn quốc tế với sự trải nghiệm thân
                thiện và nhiệt tình mà còn cung khách hàng của mình xây dựng một
                cuộc sống tốt đẹp hơn cho người Việt.
              </p>
            </div>

            {/* Tầm nhìn */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 cursor-pointer">
                  <img src="/icon_3.png" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tầm nhìn
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nằm trong top 3 về quy mô và mạng lưới chuyển phát tại Việt Nam,
                trở thành công ty số 1 về chất lượng dịch vụ và chỉ số niềm tin
                cho từng đơn hàng. Là nơi làm việc hấp dẫn, cùng đóng góp công
                sức - cùng chia sẻ thành công.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
