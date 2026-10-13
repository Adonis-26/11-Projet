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
    "Sites vitrines Wix, intégration HTML / CSS / SCSS / JS, applications React et sites dynamiques."
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

          <ServiceAccordion services={services} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Services;
