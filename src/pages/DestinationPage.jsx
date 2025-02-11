import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import FullCard from '../components/cards/FullCard';
import SEO from '../components/SEO';

function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return <div>Nie znaleziono kierunku</div>;
  }

  return (
    <div className="destination-page">
      <SEO 
        title={destination.title}
        description={`Wycieczka ${destination.title} z biurem podróży ORIZ. ${destination.description.slice(0, 160)}...`}
        keywords={`${destination.title}, wycieczka ${destination.category}`}
        url={`https://oriz.pl/destination/${destination.slug}`}
        image={destination.mainImage}
      />
      <FullCard destination={destination} />
    </div>
  );
}

export default DestinationPage; 