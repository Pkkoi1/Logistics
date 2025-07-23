import React from "react";

const Map: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904149430893!2d105.8133027744812!3d21.03652088751348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2bddedd8ff%3A0xde7c4fb8e272fabc!2zQ8O0bmcgdHkgQVZBIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1753253947554!5m2!1svi!2s"
      width="100%"
      style={{ border: 0, height: "100%" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
