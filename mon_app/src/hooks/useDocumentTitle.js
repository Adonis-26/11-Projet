import { useEffect } from "react";

const SUFFIXE = "Portfolio Adonis-YN";

/** Met à jour le titre de l'onglet et la méta description de la page courante. */
function useDocumentTitle(titre, description) {
  useEffect(() => {
    document.title = `${titre} | ${SUFFIXE}`;

    if (!description) return;
    const balise = document.querySelector('meta[name="description"]');
    if (balise) balise.setAttribute("content", description);
  }, [titre, description]);
}

export default useDocumentTitle;
