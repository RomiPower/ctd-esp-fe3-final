import {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal} from '../Components/utils/global.context';

const Favs = () => {
  const {theme, favorite, apiData} = useContext(ContextGlobal);
  return (
    <>
    <div style={{ backgroundColor: theme.background, color: theme.front }} >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {apiData.map((user)=>(
      <Card key={user.id} user={user} />
      ))}
      </div>
      </div>
    </>
  );
};

export default Favs;
