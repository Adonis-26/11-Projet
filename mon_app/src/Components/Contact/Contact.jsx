import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: brancher l'appel API / envoi du formulaire
    console.log(formData);

    setIsModalOpen(true);
    setFormData(initialFormData);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
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

        <div className="contact-form_actions">
          <button className="btn-envoyer" type="submit">
            Envoyer
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
    </>
  );
}

export default Contact;