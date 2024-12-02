import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const[user,setUser] = useState({});

  const {id} =  useParams();
  console.log(id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url).then(({data}) => {
      console.log(data)
      setUser(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      <h1>Información del dentista</h1>
      <img src ={user.image} alt=""/>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h3>{user.phone}</h3>
      <h3>{user.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail