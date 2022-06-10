
import "../../sass/Pages/_blog.scss";
import React,{useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';


function Blog() {
  const { theme } = useContext(ThemeContext);
  return (
  <div className={'div__blogPage --'+theme}>
      <h2 className='title__blog'>Blog</h2>
  </div>
    
)
}
export default Blog;
