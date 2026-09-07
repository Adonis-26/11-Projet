import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Presentation from '../Components/Presentation/Presentation';
import Formation from '../Components/Formations/Formation';
import Cv from '../Components/Cv/Cv';
import Competences from '../Components/Competences/Competences';
import Contact from '../Components/Contact/Contact';
import Projets from '../Components/Projets/Projets';
import './Page.css'

function page() {
  return (
    <div className='page'>
        <Header />
            <div>
                <Presentation />
                <Projets /> 
                <Competences />
                <Formation />
                <Cv />
                <Contact />
            </div>
      <Footer />

    </div>
  )
}

export default page