const MapFrame = ({name,location}:{name:string, location:string}) => {
  return (
    <div>
      <iframe
        title={name}
        src={location}
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