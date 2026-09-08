import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const initialFormData = {
  nom: '',
  prenom: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setIsModalOpen(true);
        setFormData(initialFormData);
      })
      .catch((err) => {
        console.error(err);
        setError("Une erreur est survenue, veuillez réessayer.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <div className="container" >
      <div className="bloc_title">
        <h2 id='contact'>Contact</h2>
      </div>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="contact-form_col">
          <div className="field">
            <label className="field_label" htmlFor="c-nom">
              Nom
            </label>
            <input
              className="field_input"
              id="c-nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label className="field_label" htmlFor="c-prenom">
              Prénom
            </label>
            <input
              className="field_input"
              id="c-prenom"
              name="prenom"
              type="text"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label className="field_label" htmlFor="c-mail">
              Adresse mail
            </label>
            <input
              className="field_input"
              id="c-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="field_label" htmlFor="c-message">
            Message
          </label>
          <textarea
            className="field_input field_input--area"
            id="c-message"
            name="message"
            rows="9"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="field_error">{error}</p>}

        <div className="contact-form_actions">
          <button className="btn-envoyer" type="submit" disabled={isSending}>
            {isSending ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal">
           
            <p className="modal_desc">
              Merci, votre message a bien été envoyé. Je reviens vers vous rapidement.
            </p>
            <button className="modal_close" type="button" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Contact;