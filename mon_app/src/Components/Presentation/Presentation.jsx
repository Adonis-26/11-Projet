import './Presentation.css'

function presentation() {
  return (
    <div className="container">
      <div className="bloc_title"> 
        <h2 id="presentation"  >Présentation</h2>
        <div className='line'>
            <div className='carre'/>
            <hr />
        </div>
        <div className='bloc_presentation'>
           <img className="presentation_image" src='/profile.webp' alt="Photo_de_profil" fetchPriority="high" />
           <article>
            <p className='text_presentation'>
            Salut je m'appelle <strong>Adonis,</strong> <br />
            J’ai commencé à coder avec <strong>freeCodeCamp</strong>, puis j’ai approfondi 
            mes connaissances grâce aux <strong>cours en libre accès d’OpenClassrooms</strong>. 
            Au fil de mes apprentissages, j’ai pris goût au développement web et 
            j’ai décidé d’en faire une nouvelle orientation professionnelle. <br />

            <br /> <strong>Fort de 10 ans d’expérience dans le domaine de l’informatique</strong>, 
            je me reconvertis aujourd’hui dans le développement web. 
            Ayant suivi la <strong> formation Intégrateur Web chez OpenClassrooms</strong>, je 
            mets à profit mon expertise technique, ma rigueur et mon expérience 
            pour concevoir des interfaces <strong>modernes, responsives et accessibles</strong>. 
            Mon objectif : créer des expériences web à la fois fonctionnelles, 
            soignées et adaptées aux besoins des utilisateurs.
            </p> 
            <a id="contact_presentation" href="#contact">
            contact
            </a>
            <a className="cv_download" href="/adonis-YN-DEV.pdf" download>
            Télécharger le CV
            </a>
         
           </article>
          
        </div>
       

      </div>
        
    </div>
  )
}

export default presentation