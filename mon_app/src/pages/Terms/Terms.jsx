import PageBanner from "../../components/PageBanner/PageBanner";
import "./Terms.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Terms() {
  useDocumentTitle(
    "Conditions générales",
    "Conditions générales de vente et mentions légales du site Adonis-YN."
  );

  return (
    <>
      <PageBanner titre="Conditions générales" sousTitre="Mentions légales" />

      <section className="section">
        <div className="shell page-legale__contenu">
          <h2>Éditeur du site</h2>
          <p>
            Le présent site est édité par Adonis YAMB NDEBY, développeur web
            indépendant, domicilié à Villiers-le-Bel (95400), France. Contact :{" "}
            <a href="mailto:contact@adonis-yn.fr">contact@adonis-yn.fr</a>.
          </p>

          <h2>Objet</h2>
          <p>
            Les présentes conditions générales encadrent l’utilisation du site et
            les prestations de création, de refonte et de maintenance de sites
            internet proposées. Toute commande implique leur acceptation sans
            réserve.
          </p>

          <h2>Prestations</h2>
          <p>
            Les prestations proposées couvrent la conception de sites vitrines, le
            développement d’interfaces sur mesure en HTML, CSS, SCSS et JavaScript,
            la réalisation d’applications React, ainsi que l’optimisation des
            performances et du référencement. Le périmètre exact, les livrables et
            le calendrier sont définis dans le devis signé par le client.
          </p>

          <h2>Devis et commande</h2>
          <p>
            Chaque projet fait l’objet d’un devis gratuit et détaillé. Le devis est
            valable trente jours à compter de sa date d’émission. La commande est
            ferme à réception du devis signé et de l’acompte prévu.
          </p>

          <h2>Tarifs et paiement</h2>
          <p>
            Les prix sont indiqués en euros. Sauf mention contraire, un acompte de
            30 % est demandé au lancement du projet, le solde étant dû à la
            livraison. Tout retard de paiement entraîne l’application de pénalités
            au taux légal en vigueur.
          </p>

          <h2>Obligations du client</h2>
          <p>
            Le client s’engage à fournir, dans les délais convenus, l’ensemble des
            contenus nécessaires à la réalisation du projet (textes, images, accès
            techniques) et à garantir qu’il dispose des droits d’utilisation de ces
            éléments.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les droits d’exploitation du site livré sont cédés au client après
            paiement intégral de la prestation. Les éléments préexistants
            (bibliothèques, frameworks, polices, photographies sous licence)
            demeurent soumis à leurs licences respectives. Le contenu du présent
            site, hors mentions contraires, reste la propriété de son éditeur.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Le prestataire s’engage à une obligation de moyens. Sa responsabilité ne
            saurait être engagée en cas d’indisponibilité liée à l’hébergeur, de
            modification du site par un tiers, ou d’utilisation non conforme des
            livrables.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données collectées via le site est détaillé dans la
            politique de confidentialité, accessible depuis le pied de page.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes conditions sont soumises au droit français. En cas de
            litige, une solution amiable sera recherchée avant toute action
            judiciaire.
          </p>

          <p className="page-legale__maj">Dernière mise à jour : janvier 2026</p>
        </div>
      </section>
    </>
  );
}

export default Terms;
