import React from 'react';
import SEO from '../components/SEO';

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
        {/* Treść polityki prywatności */}
      </div>
    </div>
  );
}

export default PrivacyPolicy; 