import React, { useContext } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context';


const Home = () => {
  const {apiData,theme} = useContext(ContextGlobal);
  
  return (
    <main style={{backgroundColor:theme.background,color: theme.front}}>
      <h1>Home</h1>
      <div className='card-grid'>
        {apiData.map((user)=>(
          <Card key={user.id} user={user}/>
        ))}
      </div>
    </main>
  );
};

export default Home