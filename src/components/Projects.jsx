import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects__work-one">
        <iframe src="https://subtle-naiad-25c016.netlify.app" width='100%' >          
        </iframe>
        <a href="https://subtle-naiad-25c016.netlify.app">CONSUMO API <br/> Pokedex</a>
      </div>
      <div className="projects__work-two">
        <iframe src="https://incomparable-raindrop-41c18e.netlify.app" width='100%' >          
        </iframe>
        <a href="https://incomparable-raindrop-41c18e.netlify.app">E-COMMERCE <br/> Tecnologia</a>
      </div>
      <div className="projects__work-three">
      <iframe src="https://www.epanor.chepeando.com/Vista/Catalogo.php" width='100%' >          
        </iframe>
        <a href="https://www.epanor.chepeando.com/Vista/Catalogo.php">DISTRIBUIDORA <br/> Medicamentos</a>
      </div>
      <div className="projects__work-four">
      <iframe src="https://www.goodlife.etticaz.com/Vista/Catalogo.php" width='100%' >          
        </iframe>
        <a href="https://www.goodlife.etticaz.com/Vista/Catalogo.php"><br/> Aplicacion Nutricional</a>
      </div>
      
    </div>
  )
}

export default Projects