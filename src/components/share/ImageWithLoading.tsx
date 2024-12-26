import React, { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  callback: () => void;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt,
  callback,
}) => {
  const [loading, setLoading] = useState(true);

  // Handle image loading completion
  const handleImageLoad = () => {
    setLoading(false);
    callback();
  };

  return (
    <div className="relative w-full h-52">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
          {/* You can replace this with any loading animation */}
          <div className="spinner-border animate-spin border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 bg-white"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithLoading;
