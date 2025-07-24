import React, { useEffect, useState } from "react";

const Statistic: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    branches: 0,
    trucks: 0,
    partners: 0,
    staff: 0,
  });

  const statistics = [
    {
      label: "Tổng chi nhánh/Bưu cục/Điểm giao dịch toàn quốc",
      value: 318,
      key: "branches" as keyof typeof animatedValues,
    },
    {
      label: "Tổng số xe tải vận chuyển",
      value: 290,
      key: "trucks" as keyof typeof animatedValues,
    },
    {
      label: "Tổng số đối tác lớn",
      value: 310,
      key: "partners" as keyof typeof animatedValues,
    },
    {
      label: "Tổng số nhân viên vận chuyển",
      value: 1000,
      key: "staff" as keyof typeof animatedValues,
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Animate numbers
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    statistics.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(
          Math.floor(increment * currentStep),
          stat.value
        );

        setAnimatedValues((prev) => ({
          ...prev,
          [stat.key]: currentValue,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <section
      id="statistic"
      className="py-16 px-4 lg:px-[100px] relative overflow-hidden h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/data_bg.png')",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20"></div>
      </div>

      <div className="mx-auto max-w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-white mb-4">SỐ LIỆU THỐNG KÊ</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Statistics */}
          <div className="space-y-8">
            {statistics.map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">{stat.label}</span>
                  <span className="text-blue-400 font-bold text-lg">
                    {animatedValues[stat.key]}
                  </span>
                </div>
                <div className="w-full bg-slate-700 h-8">
                  <div
                    className="bg-[#19b7f9] h-8 transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible
                        ? `${(animatedValues[stat.key] / 1000) * 100}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Truck Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="truck.webp"
                alt="Xe tải giao hàng với xe nâng"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
