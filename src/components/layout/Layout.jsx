import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/index.css';
import JsonLd from '../JsonLd';

function Layout() {
  return (
    <>
      <JsonLd />
      <div className="layout">
        <Navbar />
        <main className="layout__content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;