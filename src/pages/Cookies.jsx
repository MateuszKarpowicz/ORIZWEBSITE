import React from 'react';
import SEO from '../components/SEO';

function Cookies() {
  return (
    <div className="cookies">
      <SEO 
        title="Polityka Cookies"
        description="Polityka cookies biura podróży ORIZ. Informacje o plikach cookie używanych na naszej stronie."
        keywords="cookies, ciasteczka, polityka cookies"
        url="https://oriz.pl/cookies"
      />
      <h1 className="cookies__title">Polityka Cookies</h1>
      <div className="cookies__content">
        {/* Treść polityki cookies */}
      </div>
    </div>
  );
}

export default Cookies; 