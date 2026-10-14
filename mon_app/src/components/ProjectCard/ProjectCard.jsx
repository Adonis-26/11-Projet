import "./ProjectCard.css";

/**
 * Carte projet : visuel, titre, description et technologies.
 *
 * variant « liste » (page Projets) : sur mobile, le visuel passe à gauche
 * et le texte à droite. variant « carte » (carrousel) : toujours empilé.
 */
function ProjectCard({ projet, variant = "carte" }) {
  const { titre, description, image, alt, stack, lien } = projet;

  return (
    <article className={`carte-projet carte-projet--${variant}`}>
      <a className="carte-projet__lien" href={lien} target="_blank" rel="noreferrer">
        <div className="carte-projet__media">
          <img src={image} alt={alt} loading="lazy" />
          <span className="carte-projet__stack">{stack}</span>
        </div>
        <div className="carte-projet__corps">
          <h3 className="carte-projet__titre">{titre}</h3>
          <p className="carte-projet__description">{description}</p>
        </div>
      </a>
    </article>
  );
}

export default ProjectCard;
