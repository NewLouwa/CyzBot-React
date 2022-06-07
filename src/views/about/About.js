import React,{useContext} from 'react'
//importer la mise en page de about
import '../../sass/Pages/_about.scss'
import { ThemeContext } from '../../context/ThemeContext';



function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='div__aboutPage'>
      <h2 className='title__about'>About</h2>
      
    </div>
)
}export default About;
