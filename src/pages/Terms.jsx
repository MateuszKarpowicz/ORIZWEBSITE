import React from 'react';
import SEO from '../components/SEO';
import regulaminPdf from '../assets/documents/regulamin.pdf';

function Terms() {
  return (
    <div className="terms">
      <SEO 
        title="Regulamin Świadczenia Usług"
        description="Regulamin świadczenia usług biura podróży ORIZ. Zapoznaj się z zasadami współpracy."
        keywords="regulamin, zasady współpracy, warunki świadczenia usług, ORIZ"
        url="https://oriz.pl/regulamin"
      />
      <h1 className="terms__title">Regulamin Świadczenia Usług</h1>
      <div className="terms__content">
        <a 
          href={regulaminPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="terms__link"
        >
          Otwórz Regulamin (PDF)
        </a>
      </div>
    </div>
  );
}

export default Terms; 