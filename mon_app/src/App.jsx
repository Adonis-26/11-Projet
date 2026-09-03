import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Accueil from './Components/Accueil/Accueil';
import Formation from './Components/Formations/Formation';
import Cv from './Components/Cv/Cv';
import Competences from './Components/Competences/Competences';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
        <Accueil />
        <Competences />
        <Formation />
        <Cv />
        <Contact />
      <Footer />
    </>
    
  );
}

export default App
