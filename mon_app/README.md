# Portfolio Adonis-YN — React

## Technologies

- React 19
- React Router 7
- Vite 8
- CSS natif (un fichier par composant / par page)
- EmailJS pour le formulaire de contact

## Installation

```bash
npm install
```

## Lancer le projet en développement

```bash
npm run dev
```

## Build de production

```bash
npm run build
```

## Variables d'environnement

Le formulaire de contact utilise EmailJS. Renseigner dans `.env` :

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Structure

```
src/
├── assets/images/        visuels récupérés du site d'origine
├── components/           un dossier par composant, avec son CSS
│   ├── ArrowLink/        bouton « carré vert + flèche »
│   ├── ContactForm/      formulaire EmailJS
│   ├── CtaBand/          bandeau « Obtenez un devis… »
│   ├── Footer/           pied de page
│   ├── Header/           en-tête + menu mobile
│   ├── PageBanner/       bandeau vert des pages intérieures
│   ├── ProjectCard/      carte projet
│   ├── ProjectsCarousel/ carrousel de l'accueil
│   ├── ScrollToTop/      remise en haut au changement de route
│   ├── SectionLabel/     intitulé monospace « ▶ TEXTE »
│   └── ServiceAccordion/ accordéon des prestations
├── data/                 contenus (projets, services)
├── hooks/                useDocumentTitle
├── pages/                un dossier par page, avec son CSS
│   ├── About/  Contact/  Home/  NotFound/
│   └── Privacy/  Projects/  Services/  Terms/
└── styles/               variables.css (design system), legal.css
```

## Routes

| Chemin                            | Page                        |
| --------------------------------- | --------------------------- |
| `/`                               | Accueil                     |
| `/a-propos`                       | À propos                    |
| `/services`                       | Services                    |
| `/projets`                        | Projets                     |
| `/contact`                        | Contact                     |
| `/conditions-generales`           | Conditions générales        |
| `/politique-de-confidentialite`   | Politique de confidentialité|
| `*`                               | 404                         |

## Design system

Défini dans `src/styles/variables.css` :

- vert de marque `#2f5a4a`
- titres : Helvetica / Helvetica Neue, interlettrage négatif
- libellés et boutons : Azeret Mono (Google Fonts)

## Déploiement

`vercel.json` et `public/_redirects` renvoient toutes les URL vers
`index.html` : les routes fonctionnent en accès direct sur Vercel comme
sur Netlify.

## Ancien site

La version précédente du portfolio est conservée dans
`_backup_ancien_site/` (composants et page). Ce dossier peut être
supprimé une fois la nouvelle version validée.
