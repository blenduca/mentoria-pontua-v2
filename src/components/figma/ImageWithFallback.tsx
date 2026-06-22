import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  fallbackSrc = "https://images.unsplash.com/photo-1760278041881-e64e501d009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      onError={handleError}
      className={`bg-stone-200 ${className}`}
      {...props} 
    />
  );
};
