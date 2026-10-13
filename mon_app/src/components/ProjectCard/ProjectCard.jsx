import "./ProjectCard.css";

/** Carte projet : visuel, titre, description et technologies. */
function ProjectCard({ projet }) {
  const { titre, description, image, alt, stack, lien } = projet;

  return (
    <article className="carte-projet">
      <a className="carte-projet__lien" href={lien} target="_blank" rel="noreferrer">
        <div className="carte-projet__media">
          <img src={image} alt={alt} loading="lazy" />
          <span className="carte-projet__stack">{stack}</span>
        </div>
        <h3 className="carte-projet__titre">{titre}</h3>
        <p className="carte-projet__description">{description}</p>
      </a>
    </article>
  );
}

export default ProjectCard;
