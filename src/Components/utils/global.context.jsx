import { createContext, useReducer, useEffect} from "react";
import axios from 'axios';

export const themes ={
  light:{
    front:'black',
    background: 'white'
  },
  dark:{
    front:'lightgrey',
    background:'grey'
  },
};

const initialState ={
  theme:themes.light,
  apiData: [],
  favorite : JSON.parse(localStorage.getItem("favorites")) || [],
};

const TOGGLE_THEME = 'Cambia claro/oscuro';
const SET_API_DATA ='Guarda los datos de API';
const SET_FAV = "Guarda los dentistas favoritos";

const reducer = (state,action) =>{
  switch (action.type){
    case TOGGLE_THEME:
      return{
        ...state,
        theme: state.theme === themes.light ? themes.dark : themes.light,
      };
      case SET_API_DATA:
        return {
          ...state,
          apiData: action.payload,
        };
      case SET_FAV:
        return{
          ...state, 
          favorite: action.payload,
        }
      default:
        return state;
    }
  };

const ContextGlobal = createContext(initialState);

const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState); 
 
  const handleChangeTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  // Función para agregar o quitar favoritos
  const addFav = (user) => {
    const updatedFavorites = [...state.favorite, user];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Guardamos los favoritos en localStorage
    dispatch({ type: SET_FAV, payload: updatedFavorites });
  };

  const removeFav = (userId) => {
    const updatedFavorites = state.favorite.filter((user) => user.id !== userId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Actualizamos el localStorage
    dispatch({ type: SET_FAV, payload: updatedFavorites });
  };

    // Función para guardar la respuesta de la API
  const setApiData = (data) => {
    dispatch({ type: SET_API_DATA, payload: data });
  };

  const url= 'https://jsonplaceholder.typicode.com/users';
   // Llamada a la API con axios
   useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setApiData(res.data)
    }); 
  }, []);

  return (
    <ContextGlobal.Provider value={{theme: state.theme, handleChangeTheme, apiData: state.apiData, favorite:state.favorite, addFav,removeFav}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export { ContextProvider, ContextGlobal};
