import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Presentation from '../Components/Presentation/Presentation';
import Formation from '../Components/Formations/Formation';
import Cv from '../Components/Cv/Cv';
import Competences from '../Components/Competences/Competences';
import Contact from '../Components/Contact/Contact';
import Projets from '../Components/Projets/Porjets';
import './Page.css'

function page() {
  return (
    <div>
        <Header />
            <div>
                <Presentation />
                  <hr className="section-separator" />
                <Projets /> 
                  <hr className="section-separator" />
                <Competences />
                  <hr className="section-separator" />
                <Formation />
                  <hr className="section-separator" />
                <Cv />
                  <hr className="section-separator" />
                <Contact />
            </div>
      <Footer />

    </div>
  )
}

export default page