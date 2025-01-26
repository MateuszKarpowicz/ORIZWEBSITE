import { Link } from 'react-router-dom';

function Footer() {
  const footerLinks = [
    { path: '/standardy', label: 'STANDARDY' },
    { path: '/cookies', label: 'COOKIES' },
    { path: '/krajowy-plan-odbudowy', label: 'KRAJOWY PLAN ODBUDOWY' },
    { path: '/polityka-prywatnosci', label: 'POLITYKA PRYWATNOŚCI' }
  ];

  return (
    <footer className="footer">
      <div className="footer__links">
        {footerLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className="footer__link"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
