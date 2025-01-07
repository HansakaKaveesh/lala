import React from "react";

const AdvertisementVideo = () => {
  return (
    <div className="relative w-full h-96 bg-gray-800 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/Lala Studio STORY (Waste to Wonder with Upcycled pants).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Optional for better text readability) */}
    

      {/* Content on top of the video */}
      
    </div>
  );
};

export default AdvertisementVideo;
