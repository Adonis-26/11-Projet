import PageBanner from "../../components/PageBanner/PageBanner";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CtaBand from "../../components/CtaBand/CtaBand";
import projets from "../../data/projets";
import "./Projects.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Projects() {
  useDocumentTitle(
    "Projets",
    "Sélection de projets web : Qwenta, Argent Bank, Kasa, Nina Carducci, Ohmyfood, Booki et plus."
  );

  return (
    <>
      <PageBanner titre="Projets" sousTitre="Derniers projets" />

      <section className="section">
        <div className="shell">
          <ul className="projets-grille">
            {projets.map((projet) => (
              <li key={projet.id}>
                <ProjectCard projet={projet} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Projects;
