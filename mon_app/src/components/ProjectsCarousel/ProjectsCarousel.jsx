import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsCarousel.css";

/** Carrousel horizontal des derniers projets (accueil). */
function ProjectsCarousel({ projets }) {
  const pisteRef = useRef(null);
  const [peutReculer, setPeutReculer] = useState(false);
  const [peutAvancer, setPeutAvancer] = useState(true);

  const majFleches = useCallback(() => {
    const piste = pisteRef.current;
    if (!piste) return;
    const max = piste.scrollWidth - piste.clientWidth;
    setPeutReculer(piste.scrollLeft > 8);
    setPeutAvancer(piste.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const piste = pisteRef.current;
    if (!piste) return;
    majFleches();
    piste.addEventListener("scroll", majFleches, { passive: true });
    window.addEventListener("resize", majFleches);
    return () => {
      piste.removeEventListener("scroll", majFleches);
      window.removeEventListener("resize", majFleches);
    };
  }, [majFleches]);

  const defiler = (sens) => {
    const piste = pisteRef.current;
    if (!piste) return;
    const pas = piste.clientWidth * 0.8;
    piste.scrollBy({ left: sens * pas, behavior: "smooth" });
  };

  return (
    <div className="carrousel">
      <ul className="carrousel__piste" ref={pisteRef}>
        {projets.map((projet) => (
          <li className="carrousel__item" key={projet.id}>
            <ProjectCard projet={projet} />
          </li>
        ))}
      </ul>

      <div className="carrousel__commandes">
        <button
          className="carrousel__fleche"
          type="button"
          onClick={() => defiler(-1)}
          disabled={!peutReculer}
        >
          <span className="visually-hidden">Projets précédents</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M20 12H5M11 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button
          className="carrousel__fleche"
          type="button"
          onClick={() => defiler(1)}
          disabled={!peutAvancer}
        >
          <span className="visually-hidden">Projets suivants</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M4 12h15M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
