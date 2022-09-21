import React from 'react'
import './home.css'

const Home = () => {





  return (
    <div className='home__fullstack'>
      <div className='home__box'>
        <div className="home__box-name">
          <h2 className='home__box-name-name'>David &nbsp; <span> Azcui </span></h2>
        </div>
        <div className="home__box-name">
          <h2 className='home__box-name-caracteristic'>Full-stack developer</h2>
        </div>
        <div className="home__box-name">
          <a className='home__box-name-button' href="./public/img/documentation/cv_david_azcui.pdf" download>descargar cv pdf</a>
        </div>
      </div>
      <div className="presentation">
        <div className="presentation__img">
          <img src="./public/img/engrane.png" alt="" />
        </div>
      </div>


    </div>
  )
}

export default Home