import { Link } from "react-router-dom";
import { ouvrirGestionCookies } from "../CookieBanner/consentement";
import "./Footer.css";

const GITHUB = "https://github.com/Adonis-26";
const annee = new Date().getFullYear();

const navigation = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "A propos" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

const prestations = [
  "Site vitrine Wix",
  "Intégration HTML / CSS / SCSS",
  "Application React",
  "Optimisation & référencement",
];

function Footer() {
  const remonter = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="shell footer__grille">
        {/* Marque */}
        <div className="footer__bloc footer__bloc--marque">
          <p className="footer__nom">Adonis-YN</p>
          <p className="footer__role">Développeur web</p>
          <p className="footer__baseline">
            Conception de sites modernes, performants et accessibles, de la
            maquette à la mise en ligne.
          </p>
          <a className="footer__repo" href={GITHUB} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
              />
            </svg>
            <span>Repo. GitHub</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="footer__bloc" aria-label="Navigation du pied de page">
          <h2 className="footer__titre">Navigation</h2>
          <ul className="footer__liste">
            {navigation.map((lien) => (
              <li key={lien.to}>
                <Link className="footer__lien" to={lien.to}>
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Prestations */}
        <div className="footer__bloc">
          <h2 className="footer__titre">Prestations</h2>
          <ul className="footer__liste">
            {prestations.map((item) => (
              <li key={item} className="footer__item">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Barre légale */}
      <div className="footer__bas">
        <div className="shell footer__bas-inner">
          <p className="footer__copyright">
            © {annee} Adonis-YN. Tous droits réservés.
          </p>
          <ul className="footer__legal">
            <li>
              <Link className="footer__lien-legal" to="/conditions-generales">
                Conditions générales
              </Link>
            </li>
            <li>
              <Link className="footer__lien-legal" to="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <button
                className="footer__lien-legal"
                type="button"
                onClick={ouvrirGestionCookies}
              >
                Gérer les cookies
              </button>
            </li>
          </ul>
          <button className="footer__haut" type="button" onClick={remonter}>
            <span>Haut de page</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M12 19V5M6 11l6-6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
