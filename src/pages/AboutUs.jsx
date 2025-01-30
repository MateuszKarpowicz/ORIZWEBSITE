import { useState } from 'react';
import ReferenceCard from '../components/cards/ReferenceCard';
import { references } from '../data/references';

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (direction === 'right') {
      setCurrentIndex(prev => 
        prev + 3 >= references.length ? 0 : prev + 3
      );
    } else {
      setCurrentIndex(prev => 
        prev === 0 ? Math.floor((references.length - 1) / 3) * 3 : prev - 3
      );
    }
  };

  const visibleReferences = references.slice(currentIndex, currentIndex + 3);

  return (
    <div className="main-page">
      {references.length > 3 && (
        <button 
          className="scroll-button scroll-button--left"
          onClick={() => scroll('left')}
          aria-label="Przewiń w lewo"
        >
          ←
        </button>
      )}

      <div className="destinations-grid">
        {visibleReferences.map(reference => (
          <ReferenceCard 
            key={reference.id} 
            reference={reference} 
          />
        ))}
      </div>

      {references.length > 3 && (
        <button 
          className="scroll-button scroll-button--right"
          onClick={() => scroll('right')}
          aria-label="Przewiń w prawo"
        >
          →
        </button>
      )}
    </div>
  );
}

export default AboutUs; 