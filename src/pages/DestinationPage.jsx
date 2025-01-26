import { useParams, Navigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import FullCard from '../../components/cards/DestinationCard/FullCard';

function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="destination-page">
      <FullCard destination={destination} />
    </div>
  );
}

export default DestinationPage; 