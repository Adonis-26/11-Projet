import PageBanner from "../../components/PageBanner/PageBanner";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import CtaBand from "../../components/CtaBand/CtaBand";
import portrait from "../../assets/images/profile.jpg";
import siteModerne from "../../assets/images/site-moderne.webp";
import "./About.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function About() {
  useDocumentTitle(
    "À propos",
    "Développeur web issu de 10 ans d’expérience en informatique, formé chez OpenClassrooms."
  );

  return (
    <>
      <PageBanner titre="A propos" sousTitre="Je m'appelle Adonis YN" />

      <section className="section apropos-intro">
        <div className="shell apropos-intro__grille">
          <div className="apropos-intro__visuel">
            <img
              src={portrait}
              alt="Portrait d'Adonis YN, de dos, se détachant sur un disque vert"
            />
          </div>
          <p className="apropos-intro__texte">
            Fort de 10 ans d’expérience dans le domaine de l’informatique, je me
            reconvertis aujourd’hui dans le développement web. Ayant suivi la
            formation Intégrateur Web chez OpenClassrooms, je mets à profit mon
            expertise technique, ma rigueur et mon expérience pour concevoir des
            interfaces modernes, responsives et accessibles. Mon objectif : créer
            des expériences web à la fois fonctionnelles, soignées et adaptées aux
            besoins des utilisateurs.
          </p>
        </div>
      </section>

      <section className="section apropos-savoir-faire">
        <div className="shell apropos-savoir-faire__grille">
          <div className="apropos-savoir-faire__intro">
            <h2 className="apropos-savoir-faire__titre">Site moderne</h2>
            <div className="apropos-savoir-faire__visuel">
              <img
                src={siteModerne}
                alt="Composition de cartes d'interface web — profils, cartes, statistiques — illustrant un design moderne"
                loading="lazy"
              />
            </div>
          </div>
          <div className="apropos-savoir-faire__colonne">
            <SectionLabel as="h3">Notre savoir faire</SectionLabel>
            <p>
              Nous sommes spécialisé dans la création de sites modernes,
              performants et pensés pour offrir une expérience fluide aux
              utilisateurs. Chaque projet est l’occasion de transformer une idée en
              une solution digitale claire, fonctionnelle et adaptée aux besoins de
              son activité.
            </p>
            <p>
              De la conception à la mise en ligne, j’accorde une attention
              particulière au design, aux performances, à l’ergonomie et aux détails
              qui font la différence. Mon objectif est de créer des sites qui ne se
              contentent pas d’être esthétiques, mais qui reflètent véritablement
              l’identité d’une marque et contribuent à son développement en ligne.
            </p>
            <p>
              Chaque projet est conçu avec une approche personnalisée, en
              privilégiant un code propre, des technologies adaptées et une
              expérience cohérente sur tous les supports.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default About;
