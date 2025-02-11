import { Link } from "react-router-dom";
import bigBenIcon from "../../Assets/icons/bigben.svg";
import londonEyeIcon from "../../Assets/icons/londoneye.svg";
import statueIcon from "../../Assets/icons/liberty.svg";
import sagradaIcon from "../../Assets/icons/sagrada.svg";
import logo from "../../Assets/images/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const navLinks = [
    { path: "/references", label: "REFERENCJE" },
    { path: "/kontakt", label: "KONTAKT" },
    { path: "/o-nas", label: "O NAS" },
    { 
      path: "https://oferty.oriz.pl", 
      label: "GENERATOR OFERT",
      external: true
    },
  ];

  const usefulLinks = [
    { path: "/polityka-prywatnosci", label: "POLITYKA PRYWATNOŚCI" },
    { path: "/standardy", label: "STANDARDY" },
    { path: "/funding", label: "FINANSOWANIE" },
    { path: "/cookies", label: "COOKIES" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      path: "https://facebook.com/oriz",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      path: "https://instagram.com/oriz",
      label: "Instagram",
    },
    { icon: <FaTiktok />, path: "https://tiktok.com/@oriz", label: "TikTok" },
    {
      icon: <FaLinkedinIn />,
      path: "https://linkedin.com/company/oriz",
      label: "LinkedIn",
    },
    { icon: <FaYoutube />, path: "https://youtube.com/oriz", label: "YouTube" },
  ];

  return (
    <footer className="footer">
      <div className="footer__icons">
        <img src={bigBenIcon} className="footer__icon" alt="Big Ben" />
        <img src={londonEyeIcon} className="footer__icon" alt="London Eye" />
        <img src={statueIcon} className="footer__icon" alt="Statua Wolności" />
        <img src={sagradaIcon} className="footer__icon" alt="Sagrada Familia" />
      </div>

      <div className="footer__content">
        <div className="footer__main-content">
          <div className="footer__branding">
            <img src={logo} alt="Oriz Logo" className="footer__logo" />
            <p className="footer__motto">TURYSTYKA TWORZONA Z SERCEM</p>
            <p className="footer__copyright">Copyright © 2025 | oriz.pl</p>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h3 className="footer__column-title">Menu skrót</h3>
              <nav className="footer__nav">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="footer__nav-link"
                    {...(link.external ? {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {})}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Przydatne Linki</h3>
              <nav className="footer__nav">
                {usefulLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="footer__nav-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Dane firmy</h3>
              <div className="footer__company-info">
                <p>Oriz Izabela Orłowska</p>
                <p>ul. Barbakan 2A/11</p>
                <p>71-028 Szczecin</p>
                <a href="mailto:biuro@oriz.pl">biuro@oriz.pl</a>
              </div>
            </div>

            <div className="footer__social">
              {socialLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
