/* =========================================================
   Nettoyage et validation des champs du formulaire
   ========================================================= */

/**
 * Caractères autorisés dans un prénom / nom : lettres de n'importe quel
 * alphabet (accents compris), espace, apostrophe et trait d'union.
 * Permet « Jean-Pierre », « N'Diaye » ou « Van Der Berg ».
 */
const CARACTERES_INTERDITS_NOM = /[^\p{L}\s'’-]/gu;

/**
 * Motif équivalent pour la validation native du navigateur.
 * Le tiret est échappé : l'attribut `pattern` est compilé avec le drapeau
 * `v`, qui refuse un « - » non échappé en fin de classe de caractères.
 */
export const MOTIF_NOM = "[\\p{L}]+([\\s'’\\-][\\p{L}]+)*";

/**
 * Retire des champs nom et prénom tout ce qui n'est pas une lettre,
 * puis réduit les espaces multiples.
 */
export function nettoyerNom(valeur) {
  return valeur.replace(CARACTERES_INTERDITS_NOM, "").replace(/\s{2,}/g, " ");
}

/**
 * Motifs retirés du message : tout ce qui permettrait d'injecter
 * puis d'exécuter du code dans un client mail ou une page web.
 */
const MOTIFS_DANGEREUX = [
  // Balises complètes ou fermantes, y compris <script>, <img>, <iframe>...
  // Le « < » doit être collé au nom : « a < b » reste du texte ordinaire.
  /<\/?[a-z][^>]*>/gi,
  // Balise tronquée en fin de saisie (« <scr », « </di »)
  /<\/?[a-z][^>]*$/gi,
  // Commentaires HTML, sections CDATA, doctype
  /<!--[\s\S]*?(-->|$)/g,
  /<!\[CDATA\[[\s\S]*?(\]\]>|$)/gi,
  /<!/g,
  // Balises de traitement serveur (<?php, <% ... %>)
  /<[?%][\s\S]*?([?%]>|$)/g,
  // Pseudo-protocoles exécutables
  /javascript\s*:/gi,
  /vbscript\s*:/gi,
  /data\s*:\s*text\s*\/\s*html/gi,
  // Gestionnaires d'événements (onclick=, onerror=, onload=...)
  /\bon[a-z]{3,}\s*=/gi,
  // Appels de fonctions sensibles
  /\b(eval|new\s+Function|setTimeout|setInterval|import)\s*\(/gi,
  // Accès au document / à la fenêtre
  /\b(document|window|globalThis)\s*[.[]/gi,
  // Expressions CSS exécutables
  /expression\s*\(/gi,
];

/**
 * Nettoie le message : supprime tout contenu susceptible d'être exécuté.
 *
 * Une balise commence forcément par « < » suivi d'une lettre, d'un « / »,
 * d'un « ! » ou d'un « ? » : ces cas sont tous couverts ci-dessus, y
 * compris lorsque la balise est encore incomplète pendant la frappe. Un
 * chevron isolé est donc conservé, pour pouvoir écrire « a < b ».
 *
 * Renvoie la valeur nettoyée et un indicateur signalant qu'un contenu a
 * été retiré, afin d'en avertir la personne qui saisit.
 */
export function nettoyerMessage(valeur) {
  let resultat = valeur;

  for (const motif of MOTIFS_DANGEREUX) {
    resultat = resultat.replace(motif, "");
  }

  return { valeur: resultat, filtre: resultat !== valeur };
}
