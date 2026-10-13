import "./Galerie.css";


export default function Galerie({ images, duree = 30 }) {
  const piste = [...images, ...images];

  return (
    <section className="galerie" aria-label="Galerie de projets">
      <h2>projects recents</h2>
      <div
        className="galerie_piste"
        style={{ animationDuration: `${duree}s` }}
      >
        {piste.map((img, index) => (
          <div
            className="galerie_item"
            key={index}
            aria-hidden={index >= images.length}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}