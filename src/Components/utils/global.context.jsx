import React, { createContext, useReducer, useEffect, useContext} from "react";
import axios from 'axios';
import { reducer } from "../../Reducers/reducer";

const ContextGlobal = createContext();

const initialState ={
  theme:'light',
  apiData: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  
  const url= 'https://jsonplaceholder.typicode.com/users';
 
 
  const setApiData = (data) => {
    dispatch({ type: "SET_API_DATA", payload: data });
  };

   useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setApiData(res.data)
    }); 
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  
  useEffect(() => {
    document.documentElement.setAttribute('theme', state.theme);
  }, [state.theme]);
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

const useContextGlobal = () => useContext(ContextGlobal);
export {ContextProvider, useContextGlobal} ;