import PageBanner from "../../components/PageBanner/PageBanner";
import "./Privacy.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Privacy() {
  useDocumentTitle(
    "Politique de confidentialité",
    "Traitement des données personnelles collectées sur le site, conformément au RGPD."
  );

  return (
    <>
      <PageBanner
        titre="Politique de confidentialité"
        sousTitre="Protection de vos données"
      />

      <section className="section">
        <div className="shell page-legale__contenu">
          <h2>Données personnelles collectées</h2>
          <p>
            Dans le cadre de l’utilisation du site, différentes données peuvent
            être collectées, notamment lorsque vous utilisez le formulaire de
            contact ou demandez un devis. Les données susceptibles d’être
            collectées sont notamment :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Nom de l’entreprise</li>
            <li>Informations communiquées dans votre message</li>
            <li>Informations relatives à votre projet de création de site web</li>
            <li>Données techniques nécessaires au fonctionnement et à la sécurité du site</li>
          </ul>
          <p>
            Nous collectons uniquement les données nécessaires à la finalité pour
            laquelle elles sont demandées.
          </p>

          <h2>Finalités de la collecte</h2>
          <p>Les données personnelles peuvent être utilisées afin de :</p>
          <ul>
            <li>Répondre aux demandes envoyées via le formulaire de contact</li>
            <li>Répondre aux demandes de devis</li>
            <li>Échanger avec vous concernant votre projet</li>
            <li>Fournir et gérer les services proposés</li>
            <li>Assurer le bon fonctionnement et la sécurité du site</li>
            <li>Améliorer les performances et l’expérience utilisateur du site</li>
            <li>Respecter nos obligations légales et réglementaires</li>
          </ul>
          <p>
            Vos données ne sont pas utilisées à des fins incompatibles avec celles
            pour lesquelles elles ont été collectées.
          </p>

          <h2>Base légale du traitement</h2>
          <p>
            Selon la situation, le traitement de vos données personnelles peut être
            fondé sur :
          </p>
          <ul>
            <li>Votre consentement</li>
            <li>L’exécution de mesures précontractuelles prises à votre demande</li>
            <li>L’exécution d’un contrat</li>
            <li>Le respect d’une obligation légale</li>
            <li>
              L’intérêt légitime du responsable du traitement, notamment pour
              assurer la sécurité et le bon fonctionnement du site
            </li>
          </ul>
          <p>
            Lorsque le traitement repose sur votre consentement, vous pouvez
            retirer celui-ci à tout moment.
          </p>

          <h2>Destinataires des données</h2>
          <p>
            Les données personnelles collectées sont principalement destinées au
            responsable du traitement. Elles peuvent toutefois être transmises à
            certains prestataires techniques lorsque cela est nécessaire au
            fonctionnement du site ou à la réalisation des services, par exemple :
          </p>
          <ul>
            <li>Hébergeur du site</li>
            <li>Fournisseur de messagerie</li>
            <li>Prestataire de formulaire</li>
            <li>Outils d’analyse d’audience</li>
            <li>
              Prestataires techniques participant à la maintenance ou à la sécurité
              du site
            </li>
          </ul>
          <p>
            Ces prestataires n’accèdent qu’aux données nécessaires à la réalisation
            de leurs services.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données personnelles sont conservées pendant une durée limitée et
            proportionnée à leur finalité. Les données transmises via un formulaire
            de contact ou une demande de devis sont conservées pendant le temps
            nécessaire au traitement de la demande et, le cas échéant, pendant la
            durée nécessaire à la gestion de la relation commerciale.
          </p>
          <p>
            Certaines données peuvent être conservées plus longtemps lorsque la loi
            l’impose ou afin de permettre l’exercice ou la défense de droits en
            justice.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies ou technologies similaires afin
            d’assurer son fonctionnement, mesurer son audience ou améliorer
            l’expérience utilisateur. Les cookies strictement nécessaires au
            fonctionnement du site peuvent être utilisés sans consentement lorsque
            la réglementation le permet.
          </p>
          <p>
            Les cookies nécessitant votre consentement ne sont déposés qu’après
            votre accord. Vous pouvez modifier ou retirer votre consentement à tout
            moment depuis le module de gestion des cookies disponible sur le site.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément à la réglementation applicable en matière de protection
            des données personnelles, notamment au Règlement général sur la
            protection des données (RGPD), vous disposez, selon les conditions
            prévues par la réglementation, des droits suivants :
          </p>
          <ul>
            <li>Droit d’accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes ou incomplètes</li>
            <li>Droit à l’effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d’opposition à certains traitements</li>
            <li>Droit à la portabilité de vos données lorsque celui-ci est applicable</li>
            <li>
              Droit de retirer votre consentement lorsque le traitement repose sur
              celui-ci
            </li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez nous contacter à l’adresse
            suivante : <a href="mailto:adonis-yn@outlook.com">adonis-yn@outlook.com</a>.
            Une demande peut nécessiter la vérification de votre identité afin de
            protéger vos données personnelles.
          </p>

          <h2>Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées afin de protéger les données personnelles contre la perte,
            l’utilisation abusive, l’accès non autorisé, la modification ou la
            divulgation. Cependant, aucune transmission ou aucun stockage de
            données sur Internet ne peut être garanti comme étant totalement
            sécurisé.
          </p>

          <h2>Transfert de données hors de l’Union européenne</h2>
          <p>
            Certains prestataires utilisés par le site peuvent traiter des données
            personnelles en dehors de l’Union européenne ou de l’Espace économique
            européen. Lorsque cela est nécessaire, nous veillons à ce que ces
            transferts soient réalisés conformément à la réglementation applicable
            et qu’un niveau de protection approprié soit assuré.
          </p>

          <h2>Liens vers des sites tiers</h2>
          <p>
            Le site peut contenir des liens vers des sites ou services appartenant
            à des tiers. Nous ne sommes pas responsables des pratiques de
            confidentialité, du contenu ou de la sécurité de ces sites externes.
            Nous vous invitons à consulter leurs propres politiques de
            confidentialité avant de leur transmettre des données personnelles.
          </p>

          <h2>Modification de la politique de confidentialité</h2>
          <p>
            La présente politique de confidentialité peut être modifiée ou mise à
            jour à tout moment afin de tenir compte des évolutions légales,
            réglementaires ou techniques. La date de dernière mise à jour est
            indiquée en bas de cette page.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou le
            traitement de vos données personnelles, vous pouvez contacter Adonis
            YAMB NDEBY à l’adresse{" "}
            <a href="mailto:adonis-yn@outlook.com">adonis-yn@outlook.com</a>.
          </p>

          <p className="page-legale__maj">Dernière mise à jour : janvier 2026</p>
        </div>
      </section>
    </>
  );
}

export default Privacy;
