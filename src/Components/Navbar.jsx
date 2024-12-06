import React from 'react'
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context';


const Navbar = () => {
  const {dispatch, state:{theme}} = useContextGlobal();
  
  const handleChangeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className="navbar">
      <h1>DH Odonto</h1>
      <Link to={routes.home}><h4>Home</h4></Link> 
      <Link to={routes.contact}><h4>Contact</h4></Link> 
      <Link to={routes.favs}><h4>Favs</h4></Link> 
  
      <button onClick={handleChangeTheme} >
      {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar