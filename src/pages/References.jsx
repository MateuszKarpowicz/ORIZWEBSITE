import { useState } from 'react';
import ReferenceCard from '../components/cards/ReferenceCard';
import { references } from '../data/references';
import SEO from '../components/SEO';

function References() {
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
    <div className="references-page">
      <SEO 
        title="Referencje"
        description="Zobacz opinie naszych klientów o biurze podróży ORIZ. Poznaj doświadczenia osób, które nam zaufały i skorzystały z naszych usług."
        keywords="opinie ORIZ, referencje biuro podróży, opinie klientów, zadowoleni klienci"
        url="https://oriz.pl/references"
      />
      <div className="references__container">
        {references.length > 3 && (
          <button 
            className="scroll-button scroll-button--left"
            onClick={() => scroll('left')}
            aria-label="Przewiń w lewo"
          >
            ←
          </button>
        )}

        <div className="references-grid">
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
    </div>
  );
}

export default References; 