import React,{useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import "../../sass/Pages/_projects.scss";


 function Projects() {
  const { theme } = useContext(ThemeContext);
  return (  
    <div className={"div__projectsPage --"+theme}>
    <h2 className='title__projects'>Projects</h2>
    </div>
  )
}export default Projects;
