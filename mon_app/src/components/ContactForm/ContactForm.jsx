import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MOTIF_NOM, nettoyerMessage, nettoyerNom } from "./validation";
import "./ContactForm.css";

const donneesInitiales = {
  prenom: "",
  nom: "",
  email: "",
  message: "",
};

function ContactForm() {
  const [donnees, setDonnees] = useState(donneesInitiales);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [statut, setStatut] = useState(null); // "succes" | "erreur"
  const [messageFiltre, setMessageFiltre] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prénom et nom : lettres, espaces, apostrophes et traits d'union uniquement.
    if (name === "prenom" || name === "nom") {
      setDonnees((prev) => ({ ...prev, [name]: nettoyerNom(value) }));
      return;
    }

    // Message : on retire tout contenu exécutable avant de l'enregistrer.
    if (name === "message") {
      const { valeur, filtre } = nettoyerMessage(value);
      setMessageFiltre(filtre);
      setDonnees((prev) => ({ ...prev, message: valeur.slice(0, 500) }));
      return;
    }

    setDonnees((prev) => ({ ...prev, [name]: value }));
  };

  // Les espaces de bord sont retirés une fois la saisie terminée, pour ne
  // pas gêner la frappe des prénoms composés.
  const handleBlurNom = (e) => {
    const { name, value } = e.target;
    setDonnees((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoiEnCours(true);
    setStatut(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setDonnees(donneesInitiales);
        setMessageFiltre(false);
        setStatut("succes");
      })
      .catch((err) => {
        console.error(err);
        setStatut("erreur");
      })
      .finally(() => setEnvoiEnCours(false));
  };

  return (
    <form className="formulaire" ref={formRef} onSubmit={handleSubmit}>
      <div className="formulaire__champ">
        <label className="formulaire__label" htmlFor="prenom">
          Prenom <span aria-hidden="true">*</span>
        </label>
        <input
          className="formulaire__input"
          id="prenom"
          name="prenom"
          type="text"
          autoComplete="given-name"
          placeholder="Saisissez votre prénom"
          value={donnees.prenom}
          onChange={handleChange}
          onBlur={handleBlurNom}
          minLength={2}
          maxLength={50}
          pattern={MOTIF_NOM}
          title="Lettres uniquement (les traits d'union et apostrophes sont acceptés)"
          required
        />
      </div>

      <div className="formulaire__champ">
        <label className="formulaire__label" htmlFor="nom">
          Nom <span aria-hidden="true">*</span>
        </label>
        <input
          className="formulaire__input"
          id="nom"
          name="nom"
          type="text"
          autoComplete="family-name"
          placeholder="Saisissez votre nom de famille"
          value={donnees.nom}
          onChange={handleChange}
          onBlur={handleBlurNom}
          minLength={2}
          maxLength={50}
          pattern={MOTIF_NOM}
          title="Lettres uniquement (les traits d'union et apostrophes sont acceptés)"
          required
        />
      </div>

      <div className="formulaire__champ">
        <label className="formulaire__label" htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          className="formulaire__input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Saisissez votre e-mail"
          value={donnees.email}
          onChange={handleChange}
          maxLength={120}
          title="Veuillez saisir une adresse e-mail valide (exemple : nom@domaine.com)"
          required
        />
      </div>

      <div className="formulaire__champ">
        <label className="formulaire__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="formulaire__input formulaire__input--zone"
          id="message"
          name="message"
          rows="5"
          placeholder="Ecrivez votre message"
          value={donnees.message}
          onChange={handleChange}
          maxLength={500}
          aria-describedby="message-aide"
        />
        <div className="formulaire__sous-champ">
          {messageFiltre ? (
            <p className="formulaire__alerte" id="message-aide" role="status">
              Le code et les balises ne sont pas acceptés : ce contenu a été retiré.
            </p>
          ) : (
            <span />
          )}
          <p className="formulaire__compteur">{donnees.message.length} / 500</p>
        </div>
      </div>

      {statut === "succes" && (
        <p className="formulaire__message formulaire__message--succes" role="status">
          Merci, votre message a bien été envoyé. Je vous réponds rapidement.
        </p>
      )}
      {statut === "erreur" && (
        <p className="formulaire__message formulaire__message--erreur" role="alert">
          Une erreur est survenue, veuillez réessayer.
        </p>
      )}

      <button className="formulaire__envoi" type="submit" disabled={envoiEnCours}>
        {envoiEnCours ? "Envoi..." : "Envoyez"}
      </button>
    </form>
  );
}

export default ContactForm;
