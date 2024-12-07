import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useContextGlobal } from '../Components/utils/global.context';


const Detail = () => {
  const { state: { theme } } = useContextGlobal();

  const [dentist, setDentist] = useState({});  
  const {id} =  useParams();
  console.log(id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
 

  useEffect(() => {
    axios(url).then(({data}) => {
      console.log(data)
      setDentist(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  return (
    <div>
      <h1>Información del dentista</h1>
      <h2>Nombre: {dentist.name}</h2>
      <h2>Email: {dentist.email}</h2>
      <h3>Teléfono: {dentist.phone}</h3>
      <h3>Sitio web: {dentist.website}</h3>
    </div>
  );
};

export default Detail