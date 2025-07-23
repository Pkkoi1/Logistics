import React, { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-4xl w-full shadow-lg">
      {/* Company Info Box */}
      <div className="bg-[#19b7f9] text-white p-6">
        <h3 className="text-md font-bold mb-6">Công ty cổ phần Logistics</h3>

        <div className="space-y-4 text-sm">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="">Địa chỉ: Tầng 6 Ladeco, 266 Đội Cấn, Hà Nội</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="">Hotline: 1900 6750</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="">Email: awesome160916@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="">
                Giờ làm việc: 8h00 – 22h00 từ thứ 2 đến Chủ nhật
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Gửi thông tin phản hồi cho chúng tôi
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19b7f9]"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19b7f9]"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Nội dung"
              value={formData.message}
              onChange={handleChange}
              required
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#19b7f9]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#19b7f9] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
