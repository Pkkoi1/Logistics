import React from "react";

const PricingTable: React.FC = () => {
  const pricingData = [
    {
      route: "T1",
      weight: "6-15 Tấn",
      dimensions: "L: 2.0M x 1.2M x 1.8M đến 7.6M x 2.4M x 2.4M",
      price: "500-799",
    },
    {
      route: "T1",
      weight: "6-15 Tấn",
      dimensions: "L: 2.0M x 1.2M x 1.8M đến 7.6M x 2.4M x 2.4M",
      price: "500-799",
    },
    {
      route: "T1",
      weight: "6-15 Tấn",
      dimensions: "L: 2.0M x 1.2M x 1.8M đến 7.6M x 2.4M x 2.4M",
      price: "500-799",
    },
    {
      route: "T1",
      weight: "6-15 Tấn",
      dimensions: "L: 2.0M x 1.2M x 1.8M đến 7.6M x 2.4M x 2.4M",
      price: "500-799",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#19b7f9] text-white">
              <th className="px-6 py-4 text-left font-semibold">Hành trình</th>
              <th className="px-6 py-4 text-left font-semibold">
                Trọng tải hàng hóa
              </th>
              <th className="px-6 py-4 text-left font-semibold">
                Kích thước <p>dài(m) x rộng(m) x cao(m)</p>
              </th>
              <th className="px-6 py-4 text-left font-semibold">
                Giá cả dự kiến
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item.route}
                </td>
                <td className="px-6 py-4 text-gray-700">{item.weight}</td>
                <td className="px-6 py-4 text-gray-700">{item.dimensions}</td>
                <td className="px-6 py-4 font-semibold text-[#19b7f9]">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
