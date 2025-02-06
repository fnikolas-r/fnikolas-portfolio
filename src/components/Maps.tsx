import React from "react";

const MapFrame = () => {
  return (
    <div>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255338.26935232306!2d117.01071071928479!3d-0.5096838913105688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5d57d33074935%3A0xef64e9b06c7ad3e7!2sSamarinda%20City%2C%20East%20Kalimantan!5e0!3m2!1sen!2sid!4v1738855657232!5m2!1sen!2sid" 
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="filter grayscale invert"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapFrame;