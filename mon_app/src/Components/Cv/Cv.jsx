import './Cv.css'

function Cv() {
  return (
    <div className="container">
      <div className="bloc_title">
        <h2 id='cv'>Curriculum vitae</h2>
      </div>
    <div class="cv_body">
    <p class="cv_text cv_text--last">J'ai commencé à coder avec freeCodeCamp, puis j'ai enchainé avec les cours libre sur OpenClassRoom. J'ai pris goût et je me suis lancé.</p>

    <a class="cv_download" href="/YAMB NDEBY Adonis.pdf" download>
        Télécharger le CV (PDF)
    </a>
    </div>
  </div>
  )
}

export default Cv