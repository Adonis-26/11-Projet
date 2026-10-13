import { useState } from "react";
import "./Apropos.css";

function TexteDepliable({ children, className = "" }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      <p className={`${className} ${ouvert ? "" : "texte-court"}`}>
        {children}
      </p>
      <button
        type="button"
        className="texte-depliable__btn"
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
      >
        {ouvert ? "Lire moins" : "Lire plus"}
      </button>
    </>
  );
}

function Presentation() {
  return (
    <div className="container">
      <div className="bloc_title">
        <div className="bloc_presentation">
          <img
            className="presentation_image"
            src="/profile.webp"
            alt="Photo de profil"
            fetchPriority="high"
          />
          <article>
            <h2 id="presentation">A propos</h2>
            <TexteDepliable className="text_presentation">
              Fort de 10 ans d’expérience dans le domaine de l’informatique,
              je me reconvertis aujourd’hui dans le développement web. Ayant
              suivi la formation Intégrateur Web chez OpenClassrooms, je mets à
              profit mon expertise technique, ma rigueur et mon expérience pour
              concevoir des interfaces modernes, responsives et accessibles.
              Mon objectif : créer des expériences web à la fois fonctionnelles,
              soignées et adaptées aux besoins des utilisateurs.</TexteDepliable>
            <a id="contact_presentation" href="#contact">
              Contact
            </a>
            <a className="cv_download" href="/adonis-YN-DEV.pdf" download>
              Télécharger le CV
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Presentation;