import './Competences.css'

const competences = [
  {
   step:'01 — Lecture',
   title:'On regarde la maquette ensemble',
   desc:"Je note les points de rupture manquants, les états d'erreur oubliés, les cas de texte long. Avant d'écrire une ligne.",
  },
  {
   step:'02 — Intégration',
   title:'Du mobile vers le grand écran',
   desc:'Une seule feuille de style, des unités fluides, aucun point de rupture inventé pour cacher un problème de contenu.',
  },
  {
   step:'03 — Recette',
   title:'Testé sur de vrais appareils',
   desc:"Safari iOS, Chrome Android, un lecteur d'écran, et le clavier seul. Rapport de recette livré avec le code.",
  },
];

const skills = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'React & Redux',
  'Les appels API',
  'VSCode',
  'Le responsive design',
  'Git & GitHub',
];

function Competences() {
  return (
    <div className="competences_grid">
      {competences.map((item, index) => (
        <div className="competence" key={index}>
          <div className="competence_step">{item.step}</div>
          <h3 className="competence_title">{item.title}</h3>
          <p className="competence_desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <div className="skills_label">Skills</div>
      <ul className="skills_list">
        {skills.map((skill, index) => (
          <li className="skill" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Competences />
      <Skills />
    </>
  );
}