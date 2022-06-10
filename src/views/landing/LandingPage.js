import React,{useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import "../../sass/Pages/_landing.scss";




function LandingPage() {
  const { theme } = useContext(ThemeContext);
  return (
  <div className={'div__landingPage --'+theme}>
    <h1 className='title__landing'>
      Landing Page
    </h1>
  </div>)
}

export default LandingPage;