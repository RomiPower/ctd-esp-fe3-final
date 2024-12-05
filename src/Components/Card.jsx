import {useContext} from "react";
import { Link } from "react-router-dom";
import { ContextGlobal} from "./utils/global.context";


const Card = ({ user }) => {
  const { favorite, addFav, removeFav, apiData } = useContext(ContextGlobal);

 
  const isFavorite = Array.isArray(favorite) && favorite.some(fav => fav.id === user.id);

  const FavClick = () => {
    if (isFavorite) {
      removeFav(user.id); // Elimina el favorito
    } else {
      addFav(user); // Agrega a favoritos
    }
  };
  
  
  return (
    <div className="card">
      <Link to={`/dentist/${user.id}`}>
      <h2>{user.name}</h2> 
      <h4>{user.username}</h4>
      </Link>
  
        <button onClick={FavClick} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
