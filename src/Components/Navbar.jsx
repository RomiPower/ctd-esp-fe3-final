import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { ContextGlobal, themes } from './utils/global.context';

const Navbar = () => {
  const {theme, handleChangeTheme} = useContext(ContextGlobal);

  return (
    <nav className="navbar" style={{background:theme.background, color:theme.front}}>
      <h1>DH Odonto</h1>
      <Link to={routes.home}><h4>Home</h4></Link> 
      <Link to={routes.contact}><h4>Contact</h4></Link> 
      <Link to={routes.favs}><h4>Favs</h4></Link> 
  
      <button onClick={handleChangeTheme} style={{background:theme.background, color:theme.font}}>
      {theme === themes.light ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar