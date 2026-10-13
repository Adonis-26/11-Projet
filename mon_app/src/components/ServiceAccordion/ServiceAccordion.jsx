import { useState } from "react";
import "./ServiceAccordion.css";

/** Accordéon des prestations proposées. */
function ServiceAccordion({ services }) {
  const [ouvert, setOuvert] = useState(null);

  const basculer = (id) => setOuvert((actuel) => (actuel === id ? null : id));

  return (
    <ul className="accordeon">
      {services.map((service) => {
        const estOuvert = ouvert === service.id;
        return (
          <li className="accordeon__item" key={service.id}>
            <h3 className="accordeon__entete">
              <button
                className="accordeon__bouton"
                type="button"
                aria-expanded={estOuvert}
                aria-controls={`panneau-${service.id}`}
                id={`entete-${service.id}`}
                onClick={() => basculer(service.id)}
              >
                <span className="accordeon__titre">{service.titre}</span>
                <span
                  className={`accordeon__chevron${
                    estOuvert ? " accordeon__chevron--ouvert" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={`accordeon__panneau${
                estOuvert ? " accordeon__panneau--ouvert" : ""
              }`}
              id={`panneau-${service.id}`}
              role="region"
              aria-labelledby={`entete-${service.id}`}
            >
              <div className="accordeon__contenu">
                <p>{service.contenu}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ServiceAccordion;
