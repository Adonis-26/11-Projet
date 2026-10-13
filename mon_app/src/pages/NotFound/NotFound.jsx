import ArrowLink from "../../components/ArrowLink/ArrowLink";
import "./NotFound.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function NotFound() {
  useDocumentTitle(
    "Page introuvable",
    "La page demandée n’existe pas ou a été déplacée."
  );

  return (
    <section className="page-404">
      <div className="shell">
        <p className="page-404__code">404</p>
        <h1>Page introuvable</h1>
        <p className="page-404__texte">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <ArrowLink to="/">Retour à l’accueil</ArrowLink>
      </div>
    </section>
  );
}

export default NotFound;
