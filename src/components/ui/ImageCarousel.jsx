import { useState } from 'react';

function ImageCarousel({ images, onClose }) {
  console.log('Liczba zdjęć:', images.length);
  console.log('Ścieżki do zdjęć:', images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-overlay">
      <button className="carousel-close" onClick={onClose}>×</button>
      
      {/* Główne zdjęcie */}
      <div className="carousel-main">
        <button className="carousel-nav carousel-prev" onClick={prevImage}>←</button>
        <img 
          src={images[currentIndex]} 
          alt={`Zdjęcie ${currentIndex + 1}`} 
          className="carousel-image"
        />
        <button className="carousel-nav carousel-next" onClick={nextImage}>→</button>
      </div>

      {/* Pasek miniaturek */}
      <div className="carousel-thumbnails">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`carousel-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img} alt={`Miniatura ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel; 