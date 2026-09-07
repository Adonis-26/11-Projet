import React, { useState } from 'react';
import Modal from 'react-modal';
import './Projets.css'
import qwenta from '../../assets/qwenta.webp';
import argent from '../../assets/argent.webp';
import events from '../../assets/724events.webp';
import nina from '../../assets/Nina.webp';
import kasa from '../../assets//kasa.webp';
import sophie from '../../assets/sophie.webp';
import ohmyfood from '../../assets/ohmyfood.webp';
import booki from '../../assets/bookii.webp';
import riding from '../../assets/riding.webp';
Modal.setAppElement('#root'); 

const projets = [
  {
    id: 'QWENTA',
    nom: 'QWENTA',
    desc: 'Planifier le développement du site d\'un client',
    meta: 'node Kanban · Figma · Suivi de projet',
    image: qwenta,
  },
  {
    id: 'ARGENT',
    nom: 'ARGENT BANK',
    desc: 'Implémentation d\'une application bancaire',
    meta: 'vite · React Redux· MongoDB ·  API REST Swagger',
     image: argent,
  },
  {
    id: '724events',
    nom: '724evets',
    desc: "Débugger le site d'une agence d'événementiel",
    meta: 'JavaScript · SCSS · React developer Tools' ,
     image: events,
  },
  {
    id: 'NINA',
    nom: 'NINA CARDUCCI',
    desc: 'Optimisation et référencement',
    meta: 'JavaScript · Lighthouse · Wave · 2024',
     image: nina,
  },
  {
    id: 'KASA',
    nom: 'KASA',
    desc: "Créaton de site de location immobilière",
    meta: 'React · Vite · CSS · JSON · Figma · Git & GitHub',
     image: kasa,
  },
  {
    id: 'ARCHITECTE',
    nom: 'ARCHITECTE INTERIEUR',
    desc: 'Refonte de Portefolio de Sophie Bluel',
    meta: 'HTML · JavaScript · CSS · API · Swagger · Git & GitHub',
     image: sophie,
  },
  {
    id: 'OHMYFOOD',
    nom: 'OHMYFOOD',
    desc: 'Création de site de Restaurant rapide',
    meta: 'HTML · SCSS · Figma · Git & GitHub',
     image: ohmyfood,
  },
   {
    id: 'BOOKI',
    nom: 'BOOKI',
    desc: 'Création de site d\'une Agence de voyage',
    meta: 'HTML · SCSS · Figma · Git & GitHub',
     image: booki,
  },
   {
    id: 'RIDING',
    nom: 'RIDING CITIES',
    desc: 'Modifications à la demande du client',
    meta: 'HTML · CSS',
     image: riding,
  },
];

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    width: '100%',
    borderRadius: '8px',
    padding: '2rem',
  },
};

function Projet({ projet, onOpen }) {
  return (
    <article className="projet">
      <button
        className="projet_media"
        type="button"
        aria-label={`Ouvrir ${projet.nom}`}
        onClick={() => onOpen(projet)}
      >
         <img src={projet.image} alt={`Capture du projet ${projet.nom}`} className="projet_img" />
      </button>
      <div className="projet_body">
        <h3 className="projet_name">{projet.nom}</h3>
        <p className="projet_desc">{projet.desc}</p>
        <p className="projet_meta">{projet.meta}</p>
      </div>
    </article>
  );
}

export default function ProjetsGrid() {
  const [selectedProjet, setSelectedProjet] = useState(null);

  const handleOpen = (projet) => setSelectedProjet(projet);
  const handleClose = () => setSelectedProjet(null);

  return (
     <div className="container">
      <div className="bloc_title">
        <h2 id="projet" >Projets</h2>
           <p className="subtitle">Parcours et certifications, du découpage de PSD au <br />front moderne.</p>
          <div className="projets_grid">
            {projets.map((projet) => (
              <Projet key={projet.id} projet={projet} onOpen={handleOpen} />
            ))}

            <Modal
              isOpen={selectedProjet !== null}
              onRequestClose={handleClose}
              style={customStyles}
              contentLabel={selectedProjet ? `Détail ${selectedProjet.nom}` : 'Détail projet'}
            >
              {selectedProjet && (
                <>
                  <h3 className="modal_title">{selectedProjet.nom}</h3>
                  <button className="modal_close" type="button" aria-label="Fermer" onClick={handleClose}>
                    x
                  </button>
                  <div className="modal_media">
                     <img
                        src={selectedProjet.image}
                        alt={`Capture du projet ${selectedProjet.nom}`}
                        className="modal_img"
                      />
                  </div>
                  <p className="modal_description">{selectedProjet.desc}</p>
                  <p className="modal_meta">{selectedProjet.meta}</p>
                </>
              )}
            </Modal>
          </div>
        </div>
    </div>
  );
}