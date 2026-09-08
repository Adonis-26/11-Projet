import './Presentation.css'

function presentation() {
  return (
    <div className="container">
      <div className="bloc_title"> 
        <h2 id="presentation" >Présentation</h2>
        <div className='bloc_presentation'>
           <img className="presentation_image" src='/profile.webp' alt="Photo de profil" />
           <p >
          Après 10 ans d’expérience en informatique, je me reconvertis dans le <strong>développement web</strong>. 
          Actuellement en formation <strong>Intégrateur Web chez OpenClassrooms</strong>, je mets mon expertise technique et ma rigueur 
          au service de la création d’interfaces <strong>modernes, responsives et accessibles</strong>.
           </p>
        
        </div>
       

      </div>
        
    </div>
  )
}

export default presentation