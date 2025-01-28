import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import FullCard from '../components/cards/FullCard';

function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return <div>Nie znaleziono kierunku</div>;
  }

  return (
    <div className="destination-page">
      <FullCard destination={destination} />
    </div>
  );
}

export default DestinationPage; 