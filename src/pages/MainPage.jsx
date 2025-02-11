import { useLocation } from "react-router-dom";
import { destinations } from "../data/destinations";
import MiniCard from "../components/cards/MiniCard";
import FundingPopups from "../components/ui/FundingPopups";
import { useState } from "react";
import SEO from '../components/SEO';

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const currentCategory = location.pathname.slice(1) || "all";

  const filteredDestinations =
    currentCategory === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === currentCategory);

  const scroll = (direction) => {
    if (direction === "right") {
      setCurrentIndex((prev) =>
        prev + 3 >= filteredDestinations.length ? 0 : prev + 3
      );
    } else {
      setCurrentIndex((prev) =>
        prev === 0
          ? Math.floor((filteredDestinations.length - 1) / 3) * 3
          : prev - 3
      );
    }
  };

  const visibleDestinations = filteredDestinations.slice(
    currentIndex,
    currentIndex + 3
  );

  const getSEOData = (category) => {
    switch(category) {
      case 'wycieczki-zagraniczne':
        return {
          title: "Wycieczki Zagraniczne",
          description: "Szeroki wybór wycieczek zagranicznych z biurem ORIZ. Zwiedzaj Europę i świat z nami! Sprawdź aktualne kierunki i promocje.",
          keywords: "wycieczki zagraniczne, wczasy za granicą, wycieczki Europa, wycieczki objazdowe, last minute"
        };
      case 'wycieczki-krajowe':
        return {
          title: "Wycieczki Krajowe",
          description: "Odkryj Polskę z biurem podróży ORIZ. Organizujemy wycieczki krajowe dla grup i osób indywidualnych. Poznaj najpiękniejsze zakątki kraju!",
          keywords: "wycieczki krajowe, wycieczki Polska, zwiedzanie Polski, wycieczki szkolne, wczasy w Polsce"
        };
      case 'obozy-sportowe':
        return {
          title: "Obozy Sportowe",
          description: "Profesjonalne obozy sportowe dla dzieci i młodzieży. Łączymy aktywny wypoczynek z rozwojem sportowym. Sprawdź terminy i lokalizacje!",
          keywords: "obozy sportowe, obozy dla dzieci, obozy młodzieżowe, wakacje sportowe, aktywny wypoczynek"
        };
      case 'obozy-jezykowe':
        return {
          title: "Obozy Językowe",
          description: "Obozy językowe w kraju i za granicą. Nauka języków połączona z wypoczynkiem. Rozwijaj umiejętności językowe w ciekawy sposób!",
          keywords: "obozy językowe, nauka języków, kursy językowe z wyjazdem, obozy językowe za granicą"
        };
      default:
        return {
          title: "Strona Główna",
          description: "ORIZ - profesjonalne biuro podróży w Szczecinie. Oferujemy wycieczki krajowe i zagraniczne, obozy młodzieżowe, wyjazdy grupowe.",
          keywords: "biuro podróży Szczecin, wycieczki, obozy młodzieżowe, wycieczki zagraniczne, wycieczki krajowe"
        };
    }
  };

  const seoData = getSEOData(currentCategory);

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={`https://oriz.pl/${currentCategory}`}
      />
      <div className="main-page">
        <FundingPopups />
        {filteredDestinations.length > 3 && (
          <button
            className="scroll-button scroll-button--left"
            onClick={() => scroll("left")}
            aria-label="Przewiń w lewo"
          >
            ←
          </button>
        )}

        <div className="destinations-grid">
          {visibleDestinations.map((destination) => (
            <MiniCard key={destination.id} destination={destination} />
          ))}
        </div>

        {filteredDestinations.length > 3 && (
          <button
            className="scroll-button scroll-button--right"
            onClick={() => scroll("right")}
            aria-label="Przewiń w prawo"
          >
            →
          </button>
        )}
      </div>
    </>
  );
}

export default MainPage;
