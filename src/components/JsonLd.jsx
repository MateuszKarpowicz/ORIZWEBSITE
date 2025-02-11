import { Helmet } from 'react-helmet-async';

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "ORIZ",
    "image": "https://oriz.pl/logo.png",
    "description": "Biuro podróży ORIZ - organizacja wycieczek krajowych i zagranicznych",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Barbakan 2A/11",
      "addressLocality": "Szczecin",
      "postalCode": "71-028",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "SZEROKOSC_GEOGRAFICZNA",
      "longitude": "DLUGOSC_GEOGRAFICZNA"
    },
    "url": "https://oriz.pl",
    "telephone": "+48XXXXXXXXX",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}

export default JsonLd; 