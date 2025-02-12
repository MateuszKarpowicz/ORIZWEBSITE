import React, { useParams } from 'react';
import { destinations } from '../data/destinations';

function Gallery() {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);
  
  return (
    <div className="gallery">
      <h1>{destination.title} - Galeria</h1>
      <div className="gallery__grid">
        {destination.gallery.map((image, index) => (
          <div key={index} className="gallery__item">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery; 