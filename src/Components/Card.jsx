import React from "react";
import { Link } from "react-router-dom";


const Card = ({ user }) => {
  const{id,name,username,email,phone,website} = user;
 
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
      <h2>{name} - {username}</h2>
      <h3>ID: {id}</h3>
      </Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
