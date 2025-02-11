import React from 'react';
import SEO from '../components/SEO';

function About() {
  return (
    <div className="about">
      <SEO 
        title="O nas"
        description="ORIZ to doświadczone biuro podróży ze Szczecina. Od lat organizujemy niezapomniane wycieczki i dbamy o zadowolenie naszych klientów."
        keywords="ORIZ biuro podróży, o nas, doświadczenie, historia firmy, biuro podróży Szczecin"
        url="https://oriz.pl/about"
      />
      <h1 className="about__title">O nas</h1>
      <div className="about__content">
        <p>
          Biuro podróży ORIZ to firma z wieloletnim doświadczeniem w organizacji wycieczek szkolnych i młodzieżowych. 
          Nasza pasja do podróżowania i edukacji pozwala nam tworzyć wyjątkowe programy, które łączą naukę z przygodą.
        </p>
        <p>
          Specjalizujemy się w wycieczkach zagranicznych, obozach językowych i sportowych, zawsze stawiając na najwyższą 
          jakość usług i bezpieczeństwo uczestników.
        </p>
        <p>
          Współpracujemy z najlepszymi przewodnikami i organizatorami, aby zapewnić naszym klientom niezapomniane 
          wrażenia i profesjonalną obsługę na każdym etapie podróży.
        </p>
        <p>
          Nasze programy są starannie dopracowane i dostosowane do potrzeb różnych grup wiekowych, 
          z naciskiem na aspekty edukacyjne i rozwojowe.
        </p>
        <p>
          ORIZ to nie tylko biuro podróży - to zespół pasjonatów, dla których najważniejsze jest 
          zadowolenie klientów i tworzenie wyjątkowych wspomnień.
        </p>
      </div>
    </div>
  );
}

export default About; 