import { useState, useEffect, useRef } from "react";

function ImageCarousel({ images, onClose }) {
  console.log("Liczba zdjęć:", images.length);
  console.log("Ścieżki do zdjęć:", images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimalna odległość przesunięcia palcem do zmiany zdjęcia
  const minSwipeDistance = 50;

  const nextImage = () => {
    setIsImageLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIsImageLoading(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Obsługa klawiszy
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Obsługa gestów dotykowych
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Preload następnego obrazu
  const preloadNextImage = (index) => {
    const nextImage = new Image();
    nextImage.src = images[(index + 1) % images.length];
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
    preloadNextImage(currentIndex);
  };

  // Dodajemy/usuwamy klasę dla body przy montowaniu/odmontowywaniu komponentu
  useEffect(() => {
    document.body.classList.add("carousel-open");

    return () => {
      document.body.classList.remove("carousel-open");
    };
  }, []);

  return (
    <div
      className="carousel-overlay"
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button className="carousel-close" onClick={onClose}>
        ×
      </button>

      <div className="carousel-main">
        <button
          className="carousel-nav carousel-prev"
          onClick={prevImage}
          aria-label="Poprzednie zdjęcie"
        >
          ←
        </button>

        {isImageLoading && <div className="carousel-loader">Ładowanie...</div>}

        <img
          src={images[currentIndex]}
          alt={`Zdjęcie ${currentIndex + 1}`}
          className={`carousel-image ${isImageLoading ? "loading" : "loaded"}`}
          onLoad={handleImageLoad}
        />

        <button
          className="carousel-nav carousel-next"
          onClick={nextImage}
          aria-label="Następne zdjęcie"
        >
          →
        </button>
      </div>

      <div className="carousel-thumbnails">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-thumbnail ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => {
              setIsImageLoading(true);
              setCurrentIndex(index);
            }}
          >
            <img src={img} alt={`Miniatura ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
