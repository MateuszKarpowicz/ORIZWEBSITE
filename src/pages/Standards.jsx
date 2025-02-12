import React from 'react';
import SEO from '../components/SEO';
import standardyPdf from '../assets/documents/standardy.pdf';
import standardyDzieciPdf from '../assets/documents/standardy-dla-dzieci.pdf';

function Standards() {
  return (
    <div className="standards">
      <SEO 
        title="Standardy"
        description="Standardy obsługi i bezpieczeństwa w biurze podróży ORIZ."
        keywords="standardy obsługi, bezpieczeństwo wycieczek, jakość usług"
        url="https://oriz.pl/standardy"
      />
      <h1 className="standards__title">Standardy</h1>
      <div className="standards__content">
        <div className="standards__links">
          <a 
            href={standardyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="standards__link"
          >
            Otwórz Standardy (PDF)
          </a>
          
          <a 
            href={standardyDzieciPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="standards__link standards__link--secondary"
          >
            Otwórz Standardy - Wersja dla Dzieci (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Standards; 