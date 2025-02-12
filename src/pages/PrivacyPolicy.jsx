import React from 'react';
import SEO from '../components/SEO';
import politykaPoprawnosci from '../assets/documents/polityka-poprawnosci.pdf';

function PrivacyPolicy() {
  return (
    <div className="policy">
      <SEO 
        title="Polityka Prywatności"
        description="Polityka prywatności biura podróży ORIZ. Dowiedz się jak chronimy Twoje dane osobowe."
        keywords="polityka prywatności, RODO, ochrona danych osobowych, ORIZ"
        url="https://oriz.pl/polityka-prywatnosci"
      />
      <h1 className="policy__title">Polityka Prywatności</h1>
      <div className="policy__content">
        <a 
          href={politykaPoprawnosci}
          target="_blank"
          rel="noopener noreferrer"
          className="policy__link"
        >
          Otwórz Politykę Prywatności (PDF)
        </a>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 