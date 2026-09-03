import './Formation.css';

const FORMATIONS = [
  {year:'2026',title:'Diplôme d\'Intégrateur web',org:'OpenClassRoom — à distance'},
  {year:'2024',title:'Certificat JavaScript',org:'OpenClassRoom — à distance'},
  {year:'2024',title:'Certificat Figma',org:'OpenClassRoom — à distance'},
  {year:'2023',title:'Certificat Git et GitHub ',org:'OpenClassRoom — à distance'},
  {year:'2014',title:'Technicien Supérieur en Support Informatique', org: 'Centre de formation CEFIAC — Sarcelles'},
  
];

export default function Formation() {
  return (
    
      <div className="formation-timeline">
        {FORMATIONS.map(({ year, title, org }) => (
          <div key={year} className="formation-item">
            <div className="formation-item-line"></div>
            <div className="formation-year">{year}</div>
            <div className="formation-content">
              <span className="formation-dot"></span>
              <h3 className="formation-heading">{title}</h3>
              <p className="formation-org">{org}</p>
            </div>
          </div>
        ))}

        <div className="formation-item formation-item--current">
          <div className="formation-item-line formation-item-line--short"></div>
          <div className="formation-year">2012</div>
          <div className="formation-content">
            <span className="formation-dot formation-dot"></span>
            <h3 className="formation-heading">Diplôme du Baccalauréat S.T.I Electronique</h3>
            <p className="formation-org">Lycée de la Tourelle, à Sarcelles.</p>
          </div>
        </div>
      </div>
  );
}