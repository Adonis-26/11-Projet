import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Apropos from '../Components/Apropos/Apropos';
import Formation from '../Components/Formations/Formation';
import Competences from '../Components/Competences/Competences';
import Contact from '../Components/Contact/Contact';
import Galerie from '../Components/Galerie/Galerie';
import Banner from '../Components/Banner/Banner';
import bannerImg from '../assets/Image de Glenn Carstens-Peters.avif';
import './Page.css';

const images = [
  { src: "/src/assets/qwenta.webp", alt: "qwenta" },
  { src: "/src/assets/argent.webp", alt: "ARGENT" },
  { src: "/src/assets/724events.webp", alt: "724events" },
  { src: "/src/assets/Nina.webp", alt: "nina" },
  { src: "/src/assets/sophie.webp", alt: "sophie" },
  { src: "/src/assets/kasa.webp", alt: "kasa" },
  { src: "/src/assets/ohmyfood.webp", alt: "ohmyfood" },
  { src: "/src/assets/bookii.webp", alt: "booki" },
  { src: "/src/assets/riding.webp", alt: "ridind" },
];

function Page() {
  return (
    <div className="page">
      <Header />
      <Banner
        title="Adonis"
        subtitle="DEVELOPPEUR WEB"
        image={bannerImg}
      />
      <div>
        <Apropos />
        <Galerie images={images} duree={300} />
        <Competences />
        <Formation />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Page;