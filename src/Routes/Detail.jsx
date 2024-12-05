import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {ContextGlobal} from '../Components/utils/global.context';

const Detail = () => {
  const {apiData,theme} = useContext(ContextGlobal);

  const {id} =  useParams();
  console.log(id);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const [dentist, setDentist] = useState({});  // Mantener los datos específicos de un dentista
  
  useEffect(() => {
    axios(url).then(({data}) => {
      console.log(data)
      setDentist(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  if (!dentist) return <div>Cargando...</div>;

  return (
    <div style={{ backgroundColor: theme.background, color: theme.front }}>
      <h1>Información del dentista</h1>
      <h2>{dentist.name}</h2>
      <h2>{dentist.email}</h2>
      <h3>{dentist.phone}</h3>
      <h3>{dentist.website}</h3>
    </div>
  );
};

export default Detail