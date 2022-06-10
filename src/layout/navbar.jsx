import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import icon from "./icon.svg" 

import '../sass/Layout/_navbar.scss'
import '../main.scss'

//refactorer le code pour sass dans sass


function Navbar(){
  const hamburgerToggler = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links__container");
  const {theme} = useContext(ThemeContext);

  const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")
    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)
    navLinksContainer.classList.toggle("open")//quand setToggle on set la valeur à l'uinverse de sa valeur actuelle
  }

  return (
    <nav className={"nav--"+theme}>

      <img src={icon} alt="dev icon" className='nav__icon'></img>
      
      <div className="main-navlinks">
        <button className="hamburger" type="button" onClick={toggleNav} aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div className={"nav-links__container --"+theme}>
          <Link to="/" onClick={toggleNav} className={"nav-links__button --"+theme}>Accueil</Link>
          <Link to="/blog" onClick={toggleNav} className={"nav-links__button --"+theme}>Blog</Link>
          <Link to="/projects" onClick={toggleNav} className={"nav-links__button --"+theme} >Mes projets</Link>
          <Link to="/about" onClick={toggleNav}  className={"nav-links__button --"+theme} >À propos</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;


