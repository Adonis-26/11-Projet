import SectionLabel from "../SectionLabel/SectionLabel";
import "./PageBanner.css";

/** Bandeau vert en tête des pages intérieures. */
function PageBanner({ titre, sousTitre }) {
  return (
    <section className="page-banner">
      <div className="shell page-banner__inner">
        <h1 className="page-banner__titre">{titre}</h1>
        {sousTitre && (
          <SectionLabel variant="light" as="p">
            {sousTitre}
          </SectionLabel>
        )}
      </div>
    </section>
  );
}

export default PageBanner;
