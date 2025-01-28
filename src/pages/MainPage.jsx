import { useLocation } from 'react-router-dom';
import { destinations } from '../data/destinations';
import MiniCard from '../components/cards/MiniCard';
import { useState } from 'react';

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  
  const currentCategory = location.pathname.slice(1) || 'all';
  
  const filteredDestinations = currentCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === currentCategory);

  const scroll = (direction) => {
    if (direction === 'right') {
      setCurrentIndex(prev => 
        prev + 3 >= filteredDestinations.length ? 0 : prev + 3
      );
    } else {
      setCurrentIndex(prev => 
        prev === 0 ? Math.floor((filteredDestinations.length - 1) / 3) * 3 : prev - 3
      );
    }
  };

  const visibleDestinations = filteredDestinations.slice(currentIndex, currentIndex + 3);

  return (
    <div className="main-page">
      {filteredDestinations.length > 3 && (
        <button 
          className="scroll-button scroll-button--left"
          onClick={() => scroll('left')}
          aria-label="Przewiń w lewo"
        >
          ←
        </button>
      )}

      <div className="destinations-grid">
        {visibleDestinations.map(destination => (
          <MiniCard 
            key={destination.id} 
            destination={destination} 
          />
        ))}
      </div>

      {filteredDestinations.length > 3 && (
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

export default MainPage;
