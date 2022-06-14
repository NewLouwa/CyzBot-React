
import "../../sass/Pages/_NotFound.scss";


 //https://media.giphy.com/media/m12EDnP8xGLy8/giphy.gif which one ?

function NotFound() {
  return (
  <div className='div__NotFound'>
    <img className="img__NotFound" src="https://media.giphy.com/media/9SJazLPHLS8roFZMwZ/giphy.gif" alt="404"/>
    <h1 className='title__NotFound'>
      Erreur 404
    </h1>
    La page que vous recherchez n'existe pas
  </div>)
}

export default NotFound;