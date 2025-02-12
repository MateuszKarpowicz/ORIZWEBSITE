import React from 'react';
import SEO from '../components/SEO';

function Cookies() {
  return (
    <div className="cookies">
      <SEO 
        title="Polityka Cookies"
        description="Informacja o plikach cookies w serwisie ORIZ."
        keywords="cookies, ciasteczka, polityka cookies"
        url="https://oriz.pl/cookies"
      />
      <h1 className="cookies__title">Polityka Cookies</h1>
      <div className="cookies__content">
        <p>
          Nasza strona internetowa nie wykorzystuje plików cookies (ciasteczek) ani innych technologii śledzących.
        </p>
        <p>
          Dbamy o Twoją prywatność i komfort korzystania z naszego serwisu, dlatego zrezygnowaliśmy 
          z gromadzenia jakichkolwiek danych o użytkownikach poprzez pliki cookies.
        </p>
        <p>
          Możesz swobodnie przeglądać naszą stronę bez obaw o śledzenie Twojej aktywności 
          czy zapisywanie informacji w przeglądarce.
        </p>
      </div>
    </div>
  );
}

export default Cookies; 