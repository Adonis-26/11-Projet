import { Link } from "react-router-dom";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import ArrowLink from "../../components/ArrowLink/ArrowLink";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";
import CtaBand from "../../components/CtaBand/CtaBand";
import CvSection from "../../components/CvSection/CvSection";
import projets from "../../data/projets";
import profil from "../../assets/images/profile.jpg";
import "./Home.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle(
    "Accueil",
    "Portfolio d’Adonis-YN, développeur web : création de sites vitrines, intégration et applications React."
  );

  return (
    <>
      {/* ---------- Héros ---------- */}
      <section className="heros">
        <div className="heros__voile" aria-hidden="true" />
        <div className="shell heros__contenu">
          <h1 className="heros__titre">Adonis YN</h1>
          <p className="heros__role">Developpeur web</p>
          <Link className="heros__bouton" to="/projets">
            Projets
          </Link>
        </div>
      </section>

      {/* ---------- A propos ---------- */}
      <section className="section accueil-apropos">
        <div className="shell accueil-apropos__grille">
          <div className="accueil-apropos__visuel">
            <img src={profil} alt="Portrait stylisé d'Adonis YN" />
          </div>
          <div className="accueil-apropos__texte">
            <h2 className="accueil-apropos__titre">A propos</h2>
            <p>
              Fort de 10 ans d’expérience dans le domaine de l’informatique, je me
              reconvertis aujourd’hui dans le développement web. Ayant suivi la
              formation Intégrateur Web chez OpenClassrooms, je mets à profit mon
              expertise technique, ma rigueur et mon expérience pour concevoir des
              interfaces modernes, responsives et accessibles.
            </p>
            <ArrowLink to="/a-propos">Lire plus</ArrowLink>
          </div>
        </div>
      </section>

      {/* ---------- Derniers projets ---------- */}
      <section className="section accueil-projets">
        <div className="shell">
          <h2 className="accueil-projets__titre">Projets</h2>
          <SectionLabel>Derniers projets</SectionLabel>
          <ProjectsCarousel projets={projets} />
        </div>
      </section>

      {/* ---------- Parcours et CV ---------- */}
      <CvSection />

      <CtaBand />
    </>
  );
}

export default Home;
