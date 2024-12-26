import React, { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
  callback?: () => void;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt,
  callback = () => {},
  className,
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
    callback();
  };

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
          <div className="spinner-border animate-spin border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={
          className ||
          "w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 bg-white"
        }
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithLoading;
