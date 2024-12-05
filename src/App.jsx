import { Route, Routes } from "react-router-dom";
import Home from  "./Routes/Home";
import Contact from  "./Routes/Contact";
import Detail from  "./Routes/Detail";
import Favs from  "./Routes/Favs";
import { routes } from "./Components/utils/routes";
import Layout from "./Layout/Layout";


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout/>}>      
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.detail} element={<Detail/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path={routes.pnf} element={<h1>Page not found - Error 404</h1>}/>
      </Route>
    </Routes>
  </>
  );
}

export default App;
