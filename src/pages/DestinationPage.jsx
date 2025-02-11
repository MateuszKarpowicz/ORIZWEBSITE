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
        title={destination.name}
        description={`Wycieczka ${destination.name} z biurem podróży ORIZ. ${destination.shortDescription}`}
        keywords={`${destination.name}, wycieczka ${destination.category}, ${destination.tags.join(', ')}`}
        url={`https://oriz.pl/destination/${destination.slug}`}
        image={destination.image}
      />
      <FullCard destination={destination} />
    </div>
  );
}

export default DestinationPage; 