import founding1 from '../Assets/images/funding/founding1.png';
import founding2 from '../Assets/images/funding/founding2.png';
import '../styles/pages/funding-page.css';
import SEO from '../components/SEO';

function FundingPage() {
  return (
    <div className="funding-page">
      <SEO 
        title="Finansowanie"
        description="ORIZ realizuje projekty dofinansowane z funduszy UE. Rozwijamy się, aby zapewnić naszym klientom jeszcze lepsze usługi turystyczne."
        keywords="finansowanie UE, fundusze europejskie, rozwój firmy, ORIZ dofinansowania"
        url="https://oriz.pl/funding"
      />
      <section className="funding-section">
        <h2 className="funding-section__title">Rozszerzenie działalności - wycieczki grywalizacyjne</h2>
        <div className="funding-section__content">
          <p>
            Biuro Turystyczne Oriz Izabela Orłowska realizuje projekt "Rozszerzenie działalności biura podróży ORIZ Izabela Orłowska poprzez wprowadzenie nowej usługi - wycieczek grywalizacyjnych. Region 1, województwo zachodniopomorskie." w ramach programu: Krajowy Plan Odbudowy i Zwiększania Odporności, działanie A1.2.1.
          </p>
          <p>
            Przedmiotem niniejszego przedsięwzięcia jest rozszerzenie oferty Wnioskodawcy poprzez dodanie do niej nowej usługi – wycieczek „grywalizacyjnych" za pomocą internetowej platformy oraz aplikacji mobilnych.
          </p>
          <div className="funding-section__values">
            <p>Wartość projektu: <strong>705 361,58 PLN</strong></p>
            <p>Wkład Funduszy Europejskich: <strong>516 118,23 PLN</strong></p>
          </div>
          <div className="funding-section__hashtags">
            <span>#FunduszeUE</span>
            <span>#NextGenerationEU</span>
          </div>
        </div>
        <img src={founding1} alt="Logo funduszu 1" className="funding-section__logo" />
      </section>

      <section className="funding-section">
        <h2 className="funding-section__title">System bezobsługowej realizacji zapytań ofertowych</h2>
        <div className="funding-section__content">
          <p>
            Realizujemy projekt pod tytułem „Internetowy system bezobsługowej realizacji zapytań ofertowych, którego celem jest ograniczenie kontaktów bezpośrednich pomiędzy klientami a pracownikami biura podróży ORIZ lzabela Orłowska".
          </p>
          <p>
            Efektem projektu będzie cyfryzacja części procesów, która pozwoli zaoszczędzić czas pracy pracowników co umożliwi obsłużenie większej liczby klientów.
          </p>
          <div className="funding-section__values">
            <p>Wartość projektu: <strong>289 900,00 PLN</strong></p>
            <p>Wkład Funduszy Europejskich: <strong>246 415,00 PLN</strong></p>
          </div>
          <p className="funding-section__footer">
            Sfinansowano w ramach reakcji Unii Europejskiej na pandemię COVID-19.
          </p>
        </div>
        <img src={founding2} alt="Logo funduszu 2" className="funding-section__logo" />
      </section>
    </div>
  );
}

export default FundingPage; 