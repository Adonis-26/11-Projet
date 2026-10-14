import PageBanner from "../../components/PageBanner/PageBanner";
import ServiceAccordion from "../../components/ServiceAccordion/ServiceAccordion";
import CtaBand from "../../components/CtaBand/CtaBand";
import services from "../../data/services";
import illustration from "../../assets/images/services.jpg";
import "./Services.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Services() {
  useDocumentTitle(
    "Services",
    "Création de sites vitrines, de sites sur mesure et d’applications web, de la conception à la mise en ligne."
  );

  return (
    <>
      <PageBanner titre="Services" sousTitre="Nos services" />

      <section className="section services-contenu">
        <div className="shell">
          <div className="services-contenu__visuel">
            <img
              src={illustration}
              alt="Maquette d'interface dessinée sur une tablette graphique"
            />
          </div>

          <h2 className="services-contenu__titre">
            Des solutions diversifiées adaptées à vos besoins
          </h2>

          <p className="services-contenu__intro">
            Chaque projet commence par un échange : comprendre votre activité,
            vos objectifs et le budget dont vous disposez. Je vous oriente
            ensuite vers la formule la plus juste, sans vous vendre plus que
            nécessaire. Dans tous les cas, vous obtenez un site rapide, lisible
            sur tous les écrans et accessible au plus grand nombre.
          </p>

          <ServiceAccordion services={services} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Services;
