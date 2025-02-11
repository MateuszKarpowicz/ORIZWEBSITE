import React from 'react';
import SEO from '../components/SEO';

function ProposeTrip() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj później dodamy obsługę wysyłania formularza
    console.log('Formularz wysłany');
  };

  return (
    <div className="propose-trip">
      <SEO 
        title="Zaproponuj Wycieczkę"
        description="Masz pomysł na wycieczkę? Zaproponuj własną trasę lub cel podróży. ORIZ pomoże zorganizować wymarzony wyjazd według Twoich preferencji."
        keywords="własna wycieczka, organizacja wycieczek, wycieczka na zamówienie, indywidualna organizacja wyjazdu"
        url="https://oriz.pl/zaproponuj-wycieczke"
      />
      <h1 className="propose-trip__title">ZAPROPONUJ WYCIECZKĘ</h1>
      
      <form className="propose-trip__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">KIERUNEK</label>
          <input 
            type="text" 
            id="destination" 
            name="destination" 
            placeholder="Np. Paryż, Rzym, Alpy..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">CZAS TRWANIA</label>
          <select 
            id="duration" 
            name="duration"
            required
          >
            <option value="">Wybierz...</option>
            <option value="weekend">Weekend (2-3 dni)</option>
            <option value="short">Krótki wyjazd (4-5 dni)</option>
            <option value="week">Tydzień (6-8 dni)</option>
            <option value="long">Dłuższy pobyt (powyżej 8 dni)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">DLACZEGO TAM i CO NAJCHĘTNIEJ BYŚCIE ZOBACZYLI?</label>
          <textarea 
            id="description" 
            name="description" 
            placeholder="Opisz swoje oczekiwania..."
            rows="4"
            required
          />
        </div>

        <button type="submit" className="propose-trip__submit">
          WYŚLIJ PROPOZYCJĘ
        </button>
      </form>
    </div>
  );
}

export default ProposeTrip; 