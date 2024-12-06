import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal} from "./utils/global.context";


const Card = ({ user }) => {
  const { dispatch, state } = useContextGlobal();

  const findFav = state.favs.some((fav) => fav.id === user.id);
  console.log(findFav);
  const FavClick = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: user });
  };
  
  return (
    <div className="card">
      <Link to={`/dentist/${user.id}`}>
      <h2>{user.name}</h2> 
      <h4>{user.username}</h4>
      </Link>
  
        <button onClick={FavClick} className="favButton">{findFav ? "Remove fav" : "Add fav" }</button>
    </div>
  );
};

export default Card;
