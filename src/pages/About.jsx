import React from 'react';
import { Link } from 'react-router-dom';
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
      <h1 className="about__title">TURYSTYKA TWORZONA Z SERCEM</h1>
      <div className="about__content">
        <p>
          ORIZ to nie tylko biuro podróży - to zespół pasjonatów, dla których najważniejsze jest 
          tworzenie wyjątkowych wspomnień i edukacyjnych przygód.
        </p>

        <p>
          Nasze programy są koronkowe, przemyślane i autorskie. W procesie tworzenia wycieczek staramy się 
          zadbać o każdy szczegół, co nie znaczy, że brakuje nam elastyczności. Jesteśmy otwarci na dialog 
          i potrzeby naszych klientów. Wycieczki są precyzyjnie skonstruowane ale poprzez zachowanie modułowego 
          podejścia jesteśmy w stanie je modyfikować pod potrzeby i zainteresowania każdej grupy.
        </p>

        <p>
          Szczególną uwagę przykładamy do jakości naszej kadry. Prowadzimy własny program szkoleniowy 
          dla pilotów wycieczek, a do współpracy zapraszamy tylko najlepszych kandydatów, mających wizje 
          turystyki i podejście do młodzieży zgodne z naszym.
        </p>

        <p>
          Bezpieczeństwo i komfort uczestników to nasz priorytet, dlatego współpracujemy wyłącznie 
          ze sprawdzonymi partnerami i dbamy o każdy szczegół organizacji.
        </p>

        <p>
          Na rynku wycieczek szkolnych jesteśmy na tyle długo, że wolimy, żeby komplementowali nas inni, 
          więc zachęcamy do zaglądnięcia na podstronę <Link to="/references" className="about__link">REFERENCJE</Link>.
        </p>
      </div>
    </div>
  );
}

export default About; 