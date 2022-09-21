import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div className='about'>
      <div className='about__my'>        
        <div className='about__my-img'>
          <div>
            <img src="./img/David_A-removebg.png" alt="" />
          </div>
          <div>
            <h2>Sobre mi</h2>
            <p>Mi motivacion es poder desarrollar aplicaciones
              para muchos usos y satisfacer al cliente. Cuento
              con experiencia en front-end y back-end. Soy un
              apacionado de la programacion por lo que tome la
              desicion de ser un Full-stack.</p>
          </div>
        </div>
      </div>
      <div className='about__tecnology'>
        <h2>Tecnologias</h2>
        <br />
        <h3>Frondend</h3>
        <div className='about__frontend'>
          <div className='about__frontend-box'>
            <img className='about__html' src="./img/html.png" alt="" />
          </div>
          <div className='about__frontend-box'>
            <img className='about__css' src="./img/css.png" alt="" />
          </div>
          <div className='about__frontend-box'>
            <img className='about__js' src="./img/js.png" alt="" />
          </div>

          <div className='about__frontend-box'>
            <img className='about__react' src="./img/react.png" alt="" />
          </div>
        </div>
        <h3>Backend</h3>
        <div className="about__backend">
          <div className='about__backend-box'>
            <img className='about__node' src="./img/node.png" alt="" />
          </div>
          <div className='about__backend-box'>
            <img className='about__mysql' src="./img/mySql.png" alt="" />
          </div>
        </div>
        <h3>Otros</h3>
        <div className="about__otros">
          <div className='about__otros-box'>
            <img className='about__hh' src="./img/hh.png" alt="" />
          </div>
          <div className='about__otros-box'>
            <img className='about__net' src="./img/netlify.png" alt="" />
          </div>
          <div className='about__otros-box'>
            <img className='about__php' src="./img/php.png" alt="" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default AboutMe