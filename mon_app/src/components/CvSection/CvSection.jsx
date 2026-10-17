import { useEffect, useRef, useState } from "react";
import SectionLabel from "../SectionLabel/SectionLabel";
import "./CvSection.css";

const CV = "/adonis-YN-DEV.pdf";

const reperes = [
  { chiffre: "10", legende: "ans dans l’informatique" },
  { chiffre: "9", legende: "projets réalisés" },
  { chiffre: "2024", legende: "formation OpenClassrooms" },
];

function CvSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Apparition progressive de la section lorsqu'elle entre dans l'écran.
  useEffect(() => {
    const cible = sectionRef.current;
    if (!cible) return;

    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setVisible(true);
          observateur.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observateur.observe(cible);
    return () => observateur.disconnect();
  }, []);

  return (
    <section
      className={`cv-section${visible ? " cv-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="shell cv-section__grille">
        <div className="cv-section__texte">
          <SectionLabel variant="green">Mon parcours</SectionLabel>
          <h2 className="cv-section__titre">
            Dix ans d’informatique, aujourd’hui au service du web
          </h2>
          <p>
            Support, administration de parcs, dépannage : j’ai passé une
            décennie à résoudre des problèmes techniques et à travailler avec
            des utilisateurs. Cette expérience guide aujourd’hui ma façon de
            concevoir des interfaces - claires, rapides, et pensées pour les
            personnes qui s’en servent.
          </p>
          <p>
            Mon CV détaille ce parcours, les technologies que je maîtrise et les
            projets sur lesquels je me suis formé.
          </p>

          <a className="cv-bouton" href={CV} download>
            <span className="cv-bouton__label">Télécharger mon CV</span>
            <span className="cv-bouton__icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d="M12 3v12M7 11l5 5 5-5M4 20h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </a>
          <p className="cv-section__format">PDF · 1 page</p>
        </div>

        <ul className="cv-section__reperes">
          {reperes.map((repere, index) => (
            <li
              className="cv-repere"
              key={repere.legende}
              style={{ "--delai": `${index * 120}ms` }}
            >
              <span className="cv-repere__chiffre">{repere.chiffre}</span>
              <span className="cv-repere__legende">{repere.legende}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CvSection;
