import React from 'react';
import Card from '../Components/Card'
import {useContextGlobal} from '../Components/utils/global.context';


const Home = () => {
  const {state: {apiData, theme}} = useContextGlobal();
  
  return (
    <main>
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