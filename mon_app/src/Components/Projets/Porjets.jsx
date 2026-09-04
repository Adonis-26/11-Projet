import React, { useState } from 'react';
import Modal from 'react-modal';
import './Projets.css'
Modal.setAppElement('#root'); 

const projets = [
  {
    id: 'maison-verdier',
    nom: 'Maison Verdier',
    desc: 'Site vitrine pour une maison de champ.',
    meta: 'WordPress · ACF · Sass · 2026',
  },
  {
    id: 'atelier-solane',
    nom: 'Atelier Solane',
    desc: 'Boutique de céramique, thème Shopify.',
    meta: 'Shopify · Liquid · Tailwind · 2025',
  },
  {
    id: 'festival-bruit-blanc',
    nom: 'Festival Bruit Blanc',
    desc: 'Landing événementielle.',
    meta: 'Astro · CSS Grid · GSAP · 2025',
  },
  {
    id: 'cabinet-lumen',
    nom: 'Cabinet Lumen',
    desc: "Refonte du site d'un cabinet d'avocats.",
    meta: 'Next.js · CSS Modules · 2024',
  },
  {
    id: 'fabrique-du-pain',
    nom: 'La Fabrique du Pain',
    desc: 'Commande en ligne pour trois\u00A0',
    meta: 'Vue · Vite · Tailwind · 2024',
  },
  {
    id: 'studio-kairos',
    nom: 'Studio Kaïros',
    desc: "Portfolio d'un photographe, images.",
    meta: 'Eleventy · Sharp · Sass · 2023',
  },
  {
    id: 'cooperative-grand-champ',
    nom: 'Coopérative Grand Champ',
    desc: 'Vitrine et carte des points de vente.',
    meta: 'Astro · Leaflet · Sass · 2023',
  },
  {
    id: 'theatre-du-quai-nord',
    nom: 'Théâtre du Quai Nord',
    desc: 'Billetterie et programmation de saison.',
    meta: 'Nuxt · SCSS · 2023',
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
        <span className="projet_placeholder">capture desktop</span>
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
            <h2 className="modal_title">{selectedProjet.nom}</h2>
            <button className="modal_close" type="button" aria-label="Fermer" onClick={handleClose}>
              x
            </button>
            <div className="modal_media">
              <span className="projet_placeholder">capture desktop</span>
            </div>
            <p className="modal_description">{selectedProjet.desc}</p>
            <p className="modal_meta">{selectedProjet.meta}</p>
          </>
        )}
      </Modal>
    </div>
  );
}