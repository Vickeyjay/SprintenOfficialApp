import { useState, useEffect } from "react";
import "./carousel.css";

const images = [
  "/images/carouselOne/slider.png",
  "/images/carouselOne/slider.png",
  "/images/carouselOne/slider.png",
  "/images/carouselOne/slider.png",
];


const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // change every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // pause 4s per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
