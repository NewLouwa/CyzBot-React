import React , {useContext} from 'react';
import{ThemeContext} from '../context/ThemeContext';
import '../main.scss';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';


export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    function icn(){
        if(theme === 'Light'){
            return sun;
        }else if (theme === 'Dark'){
            return moon ;
        }
    };
    function themeName(){
      if(theme === 'Light'){
          return 'theme__button --goLight';
      }else if (theme === 'Dark'){
          return 'theme__button --goDark';
      }
  };    
  console.log('2'+theme);
  return (
    <div onClick={toggleTheme} className={themeName()}>
    <img src={icn()} alt='icon theme'></img>

    </div>
  );
}