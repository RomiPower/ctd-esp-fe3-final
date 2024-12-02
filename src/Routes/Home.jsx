import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(()=>{
    axios(url).then((res)=>{
    console.log(res.data);
    setUsers(res.data);
  })
  .catch((err) =>{
    console.log(err);
  });
},[]);
  
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map((user)=>(
          <Card key={user.id} user={user}/>
        ))}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home