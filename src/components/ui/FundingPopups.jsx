import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import founding1 from '../../Assets/images/funding/founding1.png';
import founding2 from '../../Assets/images/funding/founding2.png';

function FundingPopups() {
  const location = useLocation();
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const allowedPaths = ['/', '/wycieczki-zagraniczne', '/wycieczki-krajowe'];

  const startHideTimer = useCallback((setVisibleFn, isHovered) => {
    if (!isHovered) {
      return setTimeout(() => {
        setVisibleFn(false);
      }, 4000);
    }
    return null;
  }, []);

  useEffect(() => {
    // Pokazujemy popupy tylko na dozwolonych ścieżkach i tylko raz
    if (allowedPaths.includes(location.pathname) && !hasShown) {
      setIsVisible1(true);
      setIsVisible2(true);
      setContainerVisible(true);
      setHasShown(true);
    }
  }, [location.pathname, hasShown]);

  useEffect(() => {
    let timer1 = startHideTimer(setIsVisible1, isHovered1);
    let timer2 = startHideTimer(setIsVisible2, isHovered2);
    
    // Timer dla kontenera tylko jeśli oba popupy są niewidoczne
    let containerTimer = setTimeout(() => {
      if (!isVisible1 && !isVisible2) {
        setContainerVisible(false);
      }
    }, 5000);

    return () => {
      if (timer1) clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
      clearTimeout(containerTimer);
    };
  }, [isHovered1, isHovered2, isVisible1, isVisible2, startHideTimer]);

  const handleClick = () => {
    window.location.href = '/funding';
  };

  // Nie renderujemy nic jeśli nie jesteśmy na dozwolonej ścieżce lub już pokazaliśmy popupy
  if (!containerVisible || !allowedPaths.includes(location.pathname)) return null;

  return (
    <div className="funding-popups">
      <div 
        className={`funding-popup funding-popup--first ${isVisible1 ? 'visible' : 'hidden'}`}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => {
          setIsHovered1(false);
          startHideTimer(setIsVisible1, false);
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className="funding-popup__content">
          <p className="funding-popup__text">
            Biuro Turystyczne Oriz Izabela Orłowska realizuje projekt "Rozszerzenie działalności biura podróży ORIZ Izabela Orłowska poprzez wprowadzenie nowej usługi - wycieczek grywalizacyjnych. Region 1, województwo zachodniopomorskie." w ramach programu: Krajowy Plan Odbudowy i Zwiększania Odporności, działanie A1.2.1.
          </p>
          <p className="funding-popup__text">
            Przedmiotem niniejszego przedsięwzięcia jest rozszerzenie oferty Wnioskodawcy poprzez dodanie do niej nowej usługi – wycieczek „grywalizacyjnych" za pomocą internetowej platformy oraz aplikacji mobilnych.
          </p>
          <div className="funding-popup__values">
            <p>Wartość projektu: <strong>705 361,58 PLN</strong></p>
            <p>Wkład Funduszy Europejskich: <strong>516 118,23 PLN</strong></p>
          </div>
          <div className="funding-popup__hashtags">
            <span>#FunduszeUE</span>
            <span>#NextGenerationEU</span>
          </div>
        </div>
        <div className="funding-popup__logo-container">
          <img 
            src={founding1}
            alt="Logo funduszu 1" 
            className="funding-popup__logo"
          />
        </div>
      </div>

      <div 
        className={`funding-popup funding-popup--second ${isVisible2 ? 'visible' : 'hidden'}`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => {
          setIsHovered2(false);
          startHideTimer(setIsVisible2, false);
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className="funding-popup__content">
          <p className="funding-popup__text">
            Realizujemy projekt pod tytułem „Internetowy system bezobsługowej realizacji zapytań ofertowych, którego celem jest ograniczenie kontaktów bezpośrednich pomiędzy klientami a pracownikami biura podróży ORIZ lzabela Orłowska".
          </p>
          <p className="funding-popup__text">
            Efektem projektu będzie cyfryzacja części procesów, która pozwoli zaoszczędzić czas pracy pracowników co umożliwi obsłużenie większej liczby klientów.
          </p>
          <div className="funding-popup__values">
            <p>Wartość projektu: <strong>289 900,00 PLN</strong></p>
            <p>Wkład Funduszy Europejskich: <strong>246 415,00 PLN</strong></p>
          </div>
          <p className="funding-popup__footer">
            Sfinansowano w ramach reakcji Unii Europejskiej na pandemię COVID-19.
          </p>
        </div>
        <div className="funding-popup__logo-container">
          <img 
            src={founding2}
            alt="Logo funduszu 2" 
            className="funding-popup__logo"
          />
        </div>
      </div>
    </div>
  );
}

export default FundingPopups; 