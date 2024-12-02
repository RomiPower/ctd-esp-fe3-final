import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, setTheme} = useContextGlobal();

  return (
    <nav className={`navbar ${theme}`}>
      <h1>DH Odonto</h1>
      <Link to={routes.home}><h4>Home</h4></Link> 
      <Link to={routes.contact}><h4>Contact</h4></Link> 
      <Link to={routes.favs}><h4>Favs</h4></Link> 
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={setTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar