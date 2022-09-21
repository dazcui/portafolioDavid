import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  const [isMobile, setIsMobile] = useState(false)




  return (
    <div className="App">
      <header >
        <nav className="header__nav">

          <div className='nav__title'>
            <div className='nav__logo'>
              <img className='nav__logo-img' src="./img/logo_rev4.png" alt="" />
            </div>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? (
                <i className='fas fa-times'></i>
              ) : (
                <i className='fas fa-bars'></i>
              )}
            </button>
            <div className='nav-links-box'>
              <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                <li>
                  <Link to="/">
                    <img className='nav-links-img' src="./img/home.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/aboutme">
                    <img className='nav-links-img' src="./img/persona.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <img className='nav-links-img' src="./img/check.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <img className='nav-links-img' src="./img/contact.png" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <aside className='aside__left'>
        <div className="aside__left-info">
          <img className='aside__img' src="./img/arr.png" alt=""  />
        </div>
        <div className="aside__left-info">          
          <a href="https://www.linkedin.com/in/david-azcui-358360241/" ><img src="./img/in.png" className='aside__img' alt=""  /> </a>
        </div>
      </aside>

      <article>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </article>
      <footer className='footer__boton'>
        <h5>Copyright © 2022 David Azcui</h5>
      </footer>

    </div>
  )
}

export default App
