/* =========================================================
   Gestion du consentement aux cookies
   =========================================================
   Le choix est conservé dans le navigateur de la personne.
   Les accès au stockage sont protégés : en navigation privée
   ou si le stockage est bloqué, la lecture et l'écriture
   peuvent lever une exception.
   ========================================================= */

const CLE = "adonis-yn:consentement-cookies";

/** Événement interne permettant de rouvrir le bandeau depuis le pied de page. */
export const EVENEMENT_OUVERTURE = "adonis-yn:ouvrir-cookies";

/**
 * Renvoie "accepte", "refuse", ou null si la personne n'a pas
 * encore fait de choix (ou si le stockage est indisponible).
 */
export function lireConsentement() {
  try {
    const valeur = window.localStorage.getItem(CLE);
    return valeur === "accepte" || valeur === "refuse" ? valeur : null;
  } catch {
    return null;
  }
}

/** Enregistre le choix. */
export function enregistrerConsentement(choix) {
  try {
    window.localStorage.setItem(CLE, choix);
  } catch {
    // Stockage indisponible : le bandeau réapparaîtra à la prochaine visite.
  }
}

/**
 * Indique si la mesure d'audience est autorisée.
 * À appeler avant de charger un éventuel script de statistiques.
 */
export function mesureAutorisee() {
  return lireConsentement() === "accepte";
}

/** Rouvre le bandeau pour permettre de modifier son choix. */
export function ouvrirGestionCookies() {
  window.dispatchEvent(new CustomEvent(EVENEMENT_OUVERTURE));
}
