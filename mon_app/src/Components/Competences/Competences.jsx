import './Competences.css'

const skills = [
  'HTML',
  'SEO',
  'CSS',
  'SCSS',
  'Figma',
  'VSCode',
  'node.js',
  'swagger',
  'MongoDB',
  'JavaScript',
  'Git & GitHub',
  'React & Redux',
  'Les appels API',
  'Le responsive design',
];

function Competences() {
  return (
    <div className="container">
        <div className="bloc_title">
          <h2 id='competences'>Compétences</h2>
          <p className="subtitle">Trois étapes, de la lecture de la maquette à la <br />recette sur appareils réels.</p>
        </div>
      <div className="skills">
      <ul className="skills_list">
        {skills.map((skill, index) => (
          <li className="skill" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Competences