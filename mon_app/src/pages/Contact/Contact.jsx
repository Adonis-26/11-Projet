import PageBanner from "../../components/PageBanner/PageBanner";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import ContactForm from "../../components/ContactForm/ContactForm";
import illustration from "../../assets/images/contact.jpg";
import "./Contact.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Contact() {
  useDocumentTitle(
    "Contact",
    "Parlons de votre prochain projet web : demande de devis et prise de contact."
  );

  return (
    <>
      <PageBanner titre="Contact" />

      <section className="section contact-contenu">
        <div className="shell contact-contenu__grille">
          <div className="contact-contenu__visuel">
            <img
              src={illustration}
              alt="Bureau de travail avec ordinateur portable et plante verte"
            />
          </div>

          <div className="contact-contenu__bloc">
            <SectionLabel as="h2">Contactez-nous</SectionLabel>
            <p className="contact-contenu__accroche">
              Parlez-nous de votre prochain projet ?
            </p>
            <hr className="contact-contenu__separateur" />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
