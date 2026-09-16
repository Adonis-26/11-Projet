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
            Salut, je m'appelle <strong className='nom'>Adonis</strong>.

            Ayant suivi la <strong> formation Intégrateur Web chez OpenClassrooms</strong>, je 
            mets à profit mon expertise technique, ma rigueur et mon expérience 
            pour concevoir des interfaces <strong>modernes, responsives et accessibles</strong>. 
            Mon objectif : créer des expériences web à la fois fonctionnelles, 
            soignées et adaptées aux besoins des utilisateurs.
            </p> 
            <a id="contact_presentation" href="#contact">
            contact
            </a>
            <a className="cv_download" href="/Adonis.pdf" download>
            Télécharger le CV
            </a>

         
           </article>
          
        </div>
       

      </div>
        
    </div>
  )
}

export default presentation