import React from 'react';
import SEO from '../components/SEO';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę wysyłania formularza
    console.log("Formularz wysłany");
  };

  return (
    <div className="contact">
      <SEO 
        title="Kontakt"
        description="Skontaktuj się z biurem podróży ORIZ. Znajdziesz nas w Szczecinie przy ul. Barbakan 2A/11. Pomożemy zaplanować Twój wymarzony wyjazd!"
        keywords="kontakt ORIZ, biuro podróży Szczecin kontakt, ORIZ Szczecin, telefon biuro podróży"
        url="https://oriz.pl/contact"
      />
      <div className="contact__content">
        <div className="contact__left">
          <h2 className="contact__subtitle">
            Potrzebujesz zaplanować wycieczkę?
            <br />
            Interesują cię punkty programu?
            <br />
            Chcesz poznać wstępną wycenę?
          </h2>

          <p className="contact__description">
            Jeśli tak, serdecznie polecamy skorzystanie z naszego autorskiego
            formularza, który pozwoli nam dokładnie przeanalizować Twoje
            potrzeby i skontaktować się z Tobą tak szybko, jak to tylko możliwe,
            aby wspólnie zaplanować idealną wycieczkę!
          </p>

          <div className="contact__cta">
            <div className="arrow-animation">➜</div>
            <a href="/generator" className="button">
              Generator Ofert
            </a>
          </div>
        </div>

        <div className="contact__right">
          <p className="contact__form-info">
            Jeżeli interesują Cię inne kwestie lub masz dodatkowe pytania,
            napisz do nas bez wahania!
            <br />
            Chętnie udzielimy wszelkich informacji i pomożemy w każdej
            nurtującej sprawie.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Imię"
              className="contact__input"
              required
            />
            <input
              type="text"
              placeholder="Nazwisko"
              className="contact__input"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="contact__input"
              required
            />
            <input
              type="tel"
              placeholder="Nr telefonu"
              className="contact__input"
              required
              pattern="[0-9]{9}"
              title="Wprowadź 9-cyfrowy numer telefonu"
            />
            <textarea
              placeholder="Wiadomość"
              className="contact__textarea"
              required
              minLength="10"
            ></textarea>
            <button type="submit" className="button contact__submit">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>

      <div className="contact__footer">
        <div className="contact__section">
          <h3 className="contact__section-title">Oferty i finanse</h3>
          <p>Piotr Orłowski</p>
          <a href="mailto:piotr@oriz.pl">piotr@oriz.pl</a>
          <a href="tel:+48666666666">+48 666 666 666</a>
        </div>

        <div className="contact__section">
          <h3 className="contact__section-title">Administracja</h3>
          <p>Mateusz Karpowicz</p>
          <a href="mailto:mateusz@oriz.pl">mateusz@oriz.pl</a>
          <a href="tel:+48666666666">+48 666 666 666</a>
        </div>

        <div className="contact__section">
          <h3 className="contact__section-title">
            Social media i oferty lokalne
          </h3>
          <p>Maksym Kaczorowski</p>
          <a href="mailto:maksym@oriz.pl">maksym@oriz.pl</a>
          <a href="tel:+48666666666">+48 666 666 666</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
