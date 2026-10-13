import "./SectionLabel.css";

/** Petit intitulé monospace précédé d'un triangle, utilisé en tête de section. */
function SectionLabel({ children, variant = "dark", as: Tag = "p" }) {
  return (
    <Tag className={`section-label section-label--${variant}`}>
      <span className="section-label__marker" aria-hidden="true" />
      <span className="section-label__text">{children}</span>
    </Tag>
  );
}

export default SectionLabel;
