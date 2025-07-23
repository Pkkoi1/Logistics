import React from "react";

interface ServiceIconProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({
  src,
  alt,
  className = "w-6 h-6",
  containerClassName = "w-24 h-24 bg-white shadow-md ",
}) => {
  return (
    <div
      className={`${containerClassName} transform rotate-45 flex items-center justify-center`}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} transform -rotate-45`}
      />
    </div>
  );
};

export default ServiceIcon;
