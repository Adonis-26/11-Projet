import { Link } from "react-router-dom";
import "./CtaBand.css";

/** Bandeau d'appel à l'action présent en bas de chaque page. */
function CtaBand({ texte = "Obtenez un devis pour votre prochain projet" }) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__inner">
        <p className="cta-band__texte">{texte}</p>
        <Link className="cta-band__bouton" to="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
}

export default CtaBand;
