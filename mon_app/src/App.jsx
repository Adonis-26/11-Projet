import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Accueil from './Components/Accueil/Accueil';
import Formation from './Components/Formations/Formation';
import Cv from './Components/Cv/Cv';
import Competences from './Components/Competences/Competences';

function App() {
  return (
    <>
      <Header />
        <Accueil />
        <Competences />
        <Formation />
        <Cv />
      <Footer />
    </>
    
  );
}

export default App
