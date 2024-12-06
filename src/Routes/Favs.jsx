import Card from "../Components/Card";
import { useContextGlobal} from '../Components/utils/global.context';

const Favs = () => {
  const {state: {favs, theme}} = useContextGlobal();
  
  return (
    <>
    <div >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map((user)=>(
      <Card key={user.id} user={user} />
      ))}
      </div>
      </div>
    </>
  );
};

export default Favs;
