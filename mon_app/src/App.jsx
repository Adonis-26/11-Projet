import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

function Layout() {
  const { pathname } = useLocation();
  // L'accueil passe sous l'en-tête transparent, les autres pages sont décalées.
  const accueil = pathname === "/";

  return (
    <div className="app">
      <Header />
      <main className={`app__contenu${accueil ? "" : " app__contenu--decale"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politique-de-confidentialite" element={<Privacy />} />
          <Route path="/conditions-generales" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
