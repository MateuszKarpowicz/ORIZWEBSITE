import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProposeTrip from './pages/ProposeTrip';
import DestinationPage from './pages/DestinationPage';
import { CategoryProvider } from './context/CategoryContext';

function App() {
  return (
    <CategoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="cooperation" element={<Contact />} />
            <Route path="wycieczki-zagraniczne" element={<MainPage />} />
            <Route path="wycieczki-krajowe" element={<MainPage />} />
            <Route path="obozy-sportowe" element={<MainPage />} />
            <Route path="obozy-jezykowe" element={<MainPage />} />
            <Route path="zaproponuj-wycieczke" element={<ProposeTrip />} />
            <Route path="destination/:slug" element={<DestinationPage />} />
          </Route>
        </Routes>
      </Router>
    </CategoryProvider>
  );
}

export default App;
