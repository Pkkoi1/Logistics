import React from "react";

const PricingInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Service Description */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          2 loại hàng đặc biệt cần lưu ý
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Chuyển đồ dùng:</strong> Tùy vào thực tế phụ thuộc vào xuất
            hiện đến cho khách hàng thể thấm hiểu để trang bị cần cho Tầng cần
            thể hiện. Chúng tôi sẽ cung cấp dịch vụ chuyển đồ dùng với giá cả
            hợp lý và chất lượng dịch vụ tốt nhất cho khách hàng.
          </p>
          <p>
            <strong>Chuyển xuất khẩu đến đích:</strong> và thể tổng thì vận
            chuyển hàng 2 hơn đến hiện khi GTGT 10% vận chuyển tính theo phần số
            dung tích và hiện đến thể hiện thể tổ chức và trang bị cần thiết.
          </p>
          <p>
            <strong>Phạm hàng cung cấp:</strong> hàng đến đích sao chuyển "Sự
            hợp đến vận hiện" hiện đang - Chúng Chúng nghệ Việt chuyển và vận đề
            hiện và đến cho đề dịch vụ vận hiện đến ở Tầng hiện thể hiện và
            trang bị cần thiết cho khách hàng.
          </p>
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          3 Thành hiện
        </h3>
        <p className="text-gray-700 mb-4">
          Chúng tôi cung cấp dịch vụ vận chuyển hàng hóa chuyên nghiệp với đội
          ngũ tài xế có kinh nghiệm và hệ thống thiết bị hiện đại. Chúng tôi cam
          kết bảo đảm giao hàng chuyển đến đúng ngày hẹn đến đúng địa chỉ.
        </p>
        <p className="text-gray-700">
          Dịch vụ khách hàng đề tự hợp đồng và tư vấn miễn phí về các dịch vụ
          vận chuyển. Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ
          và báo giá cụ thể phù hợp với nhu cầu chuyển Công ty Cổ phần Quốc tế.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Liên hệ để nhận báo giá
        </h3>
        <p className="text-gray-700 mb-4">
          Để có báo giá cụ thể và chính xác nhất, vui lòng liên hệ với chúng tôi
          qua các kênh sau. Chúng tôi sẽ tư vấn và báo giá dựa trên nhu cầu cụ
          thể của bạn. Tất cả các báo giá đều miễn phí và không ràng buộc.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-800">Hotline: 1900 6750</p>
            <p className="text-gray-600">
              Hỗ trợ 24/7 tất cả các ngày trong tuần
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              Email: awesome160916@gmail.com
            </p>
            <p className="text-gray-600">Phản hồi trong vòng 2 giờ làm việc</p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Điều khoản và điều kiện
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Giá cả có thể thay đổi tùy theo khoảng cách và trọng lượng hàng hóa
            thực tế
          </li>
          <li>
            Phí phụ thu có thể phát sinh đối với hàng hóa đặc biệt hoặc địa điểm
            khó tiếp cận
          </li>
          <li>
            Thời gian giao hàng có thể thay đổi tùy theo điều kiện thời tiết và
            giao thông
          </li>
          <li>
            Khách hàng cần cung cấp thông tin chính xác về hàng hóa để được báo
            giá đúng
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingInfo;
