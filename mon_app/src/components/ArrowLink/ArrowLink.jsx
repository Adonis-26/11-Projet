import { Link } from "react-router-dom";
import "./ArrowLink.css";

/** Bouton « carré vert + flèche » suivi d'un libellé monospace. */
function ArrowLink({ to, href, children, variant = "dark" }) {
  const contenu = (
    <>
      <span className="arrow-link__square" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M4 12h15M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </svg>
      </span>
      <span className="arrow-link__label">{children}</span>
    </>
  );

  const classe = `arrow-link arrow-link--${variant}`;

  if (href) {
    return (
      <a className={classe} href={href} target="_blank" rel="noreferrer">
        {contenu}
      </a>
    );
  }

  return (
    <Link className={classe} to={to}>
      {contenu}
    </Link>
  );
}

export default ArrowLink;
