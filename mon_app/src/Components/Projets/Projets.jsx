import { useState } from 'react';
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
    desc: 'Planifier & développer un site client',
    meta: 'node Kanban · Figma · Suivi de projet',
    image: qwenta,
    lien: 'https://www.notion.so/3bce09efdbee8024812fd4f126b2f015?v=3bce09efdbee80539316000c1dd320d6&source=copy_link',
    repo: 'https://www.notion.so/3bce09efdbee8024812fd4f126b2f015?v=3bce09efdbee80539316000c1dd320d6&source=copy_link',
  },
  {
    id: '724events',
    nom: '724EVENTS',
    desc: 'Débugger: Site d\'une agence d\'événementiel',
    meta: 'JavaScript · SCSS · React developer Tools',
    image: events,
    lien: 'https://09-projet-yn.vercel.app/',
    repo: 'https://github.com/Adonis-26/09-Projet-Bis',
  },
  {
    id: 'NINA',
    nom: 'NINA CARDUCCI',
    desc: 'Optimisation et référencement',
    meta: 'JavaScript · Lighthouse · Wave · 2024',
    image: nina,
    lien: 'https://08-projet-yn.vercel.app/',
    repo: 'https://github.com/Adonis-26/08-Projet',
  },
  {
    id: 'OHMYFOOD',
    nom: 'OHMYFOOD',
    desc: 'Création: Site de Restaurant rapide',
    meta: 'HTML · SCSS · Figma · Git & GitHub',
    image: ohmyfood,
    lien: 'https://04-projet-yn.vercel.app/',
    repo: 'https://github.com/Adonis-26/04-Projet',
  },
  {
    id: 'BOOKI',
    nom: 'BOOKI',
    desc: 'Création: Site Agence de voyage',
    meta: 'HTML · SCSS · Figma · Git & GitHub',
    image: booki,
    lien: 'https://03-projet-yn.vercel.app/',
    repo: 'https://github.com/Adonis-26/03-Projet',
  },
  {
    id: 'RIDING',
    nom: 'RIDING CITIES',
    desc: 'Refonte du site',
    meta: 'HTML · CSS',
    image: riding,
    lien: '',
    repo: '',
  },
  {
    id: 'ARCHITECTE',
    nom: 'ARCHITECTE INTERIEUR',
    desc: 'Refonte: Portefolio Sophie Bluel',
    meta: 'HTML · JavaScript · CSS · API · Swagger · Git & GitHub',
    image: sophie,
    lien: '',
    repo: 'https://github.com/Adonis-26/06-Projet',
  },
  {
    id: 'KASA',
    nom: 'KASA',
    desc: "Création: Site de location immobilière",
    meta: 'React · Vite · CSS · JSON · Figma · Git & GitHub',
    image: kasa,
    lien: '',
    repo: 'https://github.com/Adonis-26/07-Projet',
  },
  {
    id: 'ARGENT',
    nom: 'ARGENT BANK',
    desc: 'Implémentater l\'application bancaire',
    meta: 'vite · React Redux· MongoDB ·  API REST Swagger',
    image: argent,
    lien: '',
    repo: 'https://github.com/Adonis-26/10-Projet',
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
        <h2 id="projet">Projets</h2>
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
                  <a href={selectedProjet.lien} target="_blank" rel="noopener noreferrer">
                    <img
                      src={selectedProjet.image}
                      alt={`Capture du projet ${selectedProjet.nom}`}
                      className="modal_img"
                    />
                  </a>
                </div>
                <p className="modal_description">{selectedProjet.desc}</p>
                <p className="modal_meta">{selectedProjet.meta}</p>
                
                 <a href={selectedProjet.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal_repo_btn">
                    
                </a>
              </>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}