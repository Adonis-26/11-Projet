import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const liens = [
  { to: "/", label: "Accueil", end: true },
  { to: "/a-propos", label: "A propos" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
];

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [defile, setDefile] = useState(() => window.scrollY > 40);
  const { pathname } = useLocation();

  const fermerMenu = () => setMenuOuvert(false);

  // Sur l'accueil, l'en-tête est transparent tant qu'on n'a pas défilé.
  const transparent = pathname === "/" && !defile && !menuOuvert;

  useEffect(() => {
    const onScroll = () => setDefile(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOuvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOuvert]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOuvert(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header${transparent ? " header--transparent" : ""}`}>
      <div className="header__inner">
        <Link className="header__logo" to="/">
          <span className="header__logo-nom">ADONIS-YN</span>
          <span className="header__logo-role">Développeur web</span>
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          <ul className="header__liste">
            {liens.map((lien) => (
              <li key={lien.to}>
                <NavLink
                  to={lien.to}
                  end={lien.end}
                  className={({ isActive }) =>
                    `header__lien${isActive ? " header__lien--actif" : ""}`
                  }
                >
                  {lien.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="header__cta" to="/contact">
          Contact
        </Link>

        <button
          className={`header__burger${menuOuvert ? " header__burger--ouvert" : ""}`}
          type="button"
          aria-expanded={menuOuvert}
          aria-controls="menu-mobile"
          onClick={() => setMenuOuvert((v) => !v)}
        >
          <span className="visually-hidden">
            {menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <span className="header__burger-icone" aria-hidden="true">
            <span className="header__burger-barre" />
            <span className="header__burger-barre" />
            <span className="header__burger-barre" />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`menu-mobile${menuOuvert ? " menu-mobile--ouvert" : ""}`}
        hidden={!menuOuvert}
      >
        <nav aria-label="Navigation mobile">
          <ul className="menu-mobile__liste">
            {liens.map((lien) => (
              <li key={lien.to}>
                <NavLink
                  to={lien.to}
                  end={lien.end}
                  className="menu-mobile__lien"
                  onClick={fermerMenu}
                >
                  {lien.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact" className="menu-mobile__lien" onClick={fermerMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
