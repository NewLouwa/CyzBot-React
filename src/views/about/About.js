import React,{useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
//importer la mise en page de about
import '../../sass/Pages/_about.scss';




function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={'div__aboutPage --'+theme}>
      <h2 className={'title__about --'+theme}>About</h2>
      
    </div>
)
}export default About;
