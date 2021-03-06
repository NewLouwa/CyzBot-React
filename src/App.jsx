import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
//import des pages de l'app
import Connect from './views/connect/Connect';
import Blog from './views/blog/Blog';
import About from './views/about/About';
import LandingPage from './views/landing/LandingPage';
import Projects from './views/projects/Projects';
import NotFound from './views/NotFound/NotFound'; 
//import navbar et theme
import Footer from './layout/footer';
import Navbar from './layout/navbar';
import ThemeButton from './components/themeButton';
//on importe le style du theme
import './main.scss';
import './sass/Base/_base.scss';
import { ThemeContext } from './context/ThemeContext';



function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={"App --"+theme}>
        <Navbar />
        <ThemeButton />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
