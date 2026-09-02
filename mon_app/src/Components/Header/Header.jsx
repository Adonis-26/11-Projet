import { useState } from 'react';
import './Header.css';

const NAV = [
  {label:'Accueil', href:'#accueil'},
  {label:'Projets', href:'#travaux'},
  {label:'Compétences', href:'#methode'},
  {label:'Cv', href:'#apropos'},
  {label:'Formation', href:'#formation'},
  {label:'Contact', href:'#contact'},
];

export default function Header({ brand = 'Intégrateur Web', items = NAV }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="party-header">
      <div className="party-header_brand">{brand}</div>

      <button
        className={`burger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`party-header_nav ${open ? 'is-open' : ''}`}>
        {items.map(({ label, href }) => (
            <a key={href}
            className="navlink"
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}