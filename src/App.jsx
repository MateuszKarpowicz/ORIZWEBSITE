import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import About from './pages/About';
import References from './pages/References';
import ProposeTrip from './pages/ProposeTrip';
import DestinationPage from './pages/DestinationPage';
import FundingPage from './pages/FundingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Standards from './pages/Standards';
import Cookies from './pages/Cookies';
import { CategoryProvider } from './context/CategoryContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <CategoryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="references" element={<References />} />
              <Route path="about" element={<About />} />
              <Route path="cooperation" element={<Contact />} />
              <Route path="wycieczki-zagraniczne" element={<MainPage />} />
              <Route path="wycieczki-krajowe" element={<MainPage />} />
              <Route path="obozy-sportowe" element={<MainPage />} />
              <Route path="obozy-jezykowe" element={<MainPage />} />
              <Route path="zaproponuj-wycieczke" element={<ProposeTrip />} />
              <Route path="destination/:slug" element={<DestinationPage />} />
              <Route path="funding" element={<FundingPage />} />
              <Route path="polityka-prywatnosci" element={<PrivacyPolicy />} />
              <Route path="standardy" element={<Standards />} />
              <Route path="cookies" element={<Cookies />} />
            </Route>
          </Routes>
        </Router>
      </CategoryProvider>
    </HelmetProvider>
  );
}

export default App;
