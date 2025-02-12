import React from 'react';
import SEO from '../components/SEO';

function Contact() {
  return (
    <div className="contact">
      <SEO 
        title="Kontakt"
        description="Skontaktuj się z biurem podróży ORIZ. Znajdziesz nas w Szczecinie przy ul. Barbakan 2A/11. Pomożemy zaplanować Twój wymarzony wyjazd!"
        keywords="kontakt ORIZ, biuro podróży Szczecin kontakt, ORIZ Szczecin, telefon biuro podróży"
        url="https://oriz.pl/contact"
      />
      <div className="contact__content">
        <div className="contact__footer">
          <div className="contact__section">
            <h3 className="contact__section-title">Oferty & Finanse</h3>
            <p>Piotr Orłowski</p>
            <a href="mailto:piotr@oriz.pl">biuro@oriz.pl</a>
            <a href="tel:+48692838922">+48 692 838 922</a>
          </div>

          <div className="contact__section">
            <h3 className="contact__section-title">Współpraca & Rozwój</h3>
            <p>Mateusz Karpowicz</p>
            <a href="mailto:mateusz@oriz.pl">mateusz@oriz.pl</a>
            <a href="tel:+48570978003">+48 570 978 003</a>
          </div>

          <div className="contact__section">
            <h3 className="contact__section-title">
              Socialmedia & Oferty Krajowe
            </h3>
            <p>Maksym Kaczorowski</p>
            <a href="mailto:maksym@oriz.pl">maksym@oriz.pl</a>
            <a href="tel:+48666501425">+48 666 501 425</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
