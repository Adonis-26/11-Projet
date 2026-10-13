import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  EVENEMENT_OUVERTURE,
  enregistrerConsentement,
  lireConsentement,
} from "./consentement";
import "./CookieBanner.css";

function CookieBanner() {
  // Affiché tant qu'aucun choix n'a été enregistré.
  const [ouvert, setOuvert] = useState(() => lireConsentement() === null);
  const [confirmation, setConfirmation] = useState(null);

  // Le pied de page peut rouvrir le bandeau pour modifier le choix.
  useEffect(() => {
    const onOuvrir = () => {
      setConfirmation(null);
      setOuvert(true);
    };
    window.addEventListener(EVENEMENT_OUVERTURE, onOuvrir);
    return () => window.removeEventListener(EVENEMENT_OUVERTURE, onOuvrir);
  }, []);

  // La confirmation disparaît d'elle-même, puis quitte le DOM.
  useEffect(() => {
    if (!confirmation) return;
    const minuteur = window.setTimeout(() => setConfirmation(null), 4200);
    return () => window.clearTimeout(minuteur);
  }, [confirmation]);

  const repondre = (choix) => {
    enregistrerConsentement(choix);
    setConfirmation(choix);
    setOuvert(false);
  };

  if (!ouvert) {
    // Message temporaire confirmant la prise en compte du choix.
    return confirmation ? (
      <p className="cookies-confirmation" role="status">
        {confirmation === "accepte"
          ? "Mesure d’audience activée. Vous pouvez revenir sur ce choix à tout moment."
          : "Mesure d’audience refusée. Seuls les cookies nécessaires au site sont utilisés."}
      </p>
    ) : null;
  }

  return (
    <section
      className="cookies"
      aria-labelledby="cookies-titre"
      aria-describedby="cookies-texte"
    >
      <div className="cookies__inner">
        <div className="cookies__texte">
          <h2 className="cookies__titre" id="cookies-titre">
            Cookies
          </h2>
          <p id="cookies-texte">
            Ce site utilise uniquement les cookies nécessaires à son
            fonctionnement. Avec votre accord, j’y ajoute une mesure d’audience
            anonyme pour savoir quelles pages sont consultées. Aucun suivi
            publicitaire, aucune revente de données.{" "}
            <Link className="cookies__lien" to="/politique-de-confidentialite">
              En savoir plus
            </Link>
          </p>
        </div>

        <div className="cookies__actions">
          <button
            className="cookies__bouton cookies__bouton--refus"
            type="button"
            onClick={() => repondre("refuse")}
          >
            Refuser
          </button>
          <button
            className="cookies__bouton cookies__bouton--accord"
            type="button"
            onClick={() => repondre("accepte")}
          >
            Accepter
          </button>
        </div>
      </div>
    </section>
  );
}

export default CookieBanner;
