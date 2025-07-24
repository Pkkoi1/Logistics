import React from "react";
import PricingHero from "../../../components/pricing/PricingHero";
import PricingTable from "../../../components/pricing/PricingTable";
import PricingInfo from "../../../components/pricing/PricingInfo";

const Pricing: React.FC = () => {
  return (
    <main>
      <PricingHero />

      {/* Pricing Content */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Page Title and Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Bảng giá dịch vụ chuyển xe tải
            </h2>
            <p className="text-gray-600 mb-2">
              1. Dịch vụ chuyển hàng hóa dịch vụ xe tải Truck 7 Tấn - 14M
              (Container 40 feet)
            </p>
            <p className="text-gray-600">
              Để đảm bảo quyền lợi của khách hàng, chúng tôi luôn niêm yết bảng
              giá công khai và cạnh tranh nhất trên thị trường. Chúng tôi cam
              kết không phát sinh thêm chi phí nào ngoài những gì đã thỏa thuận
              từ đầu.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="mb-12">
            <PricingTable />
          </div>

          {/* Additional Information */}
          <PricingInfo />
        </div>
      </section>
    </main>
  );
};

export default Pricing;
