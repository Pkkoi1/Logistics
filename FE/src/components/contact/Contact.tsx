import React from "react";
import ContactForm from "./ContactForm";
import Map from "../map/Map";

const Contact: React.FC = () => {
  return (
    <section className="">
      <div
        className="mx-auto max-w-full"
        style={{ backgroundImage: "url('sky.jpg')" }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">LIÊN HỆ</h2>
          <div className="w-16 h-1 bg-[#19b7f9] mx-auto"></div>
        </div>

        <div className="flex flex-col h-screen gap-6">
          <div className="flex-1 h-full flex items-center justify-center relative top-0">
            <ContactForm />
          </div>
          <div className="flex-1 h-screen -mt-[20%]">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
