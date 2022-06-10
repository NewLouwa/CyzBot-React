import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

function Footer() {
    const year = new Date().getFullYear(); 
    const {theme} = useContext(ThemeContext);
  return (
    <footer>
        <p className={'footer --'+theme}>
            Copyright © {year}, Louis Aubert
        </p>
    </footer>
  )
}export default Footer
