import { createContext, useState, useContext} from "react";

const ContextGlobal = createContext()

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [theme, setTheme] = useState('light'); // El valor por defecto es 'light'

  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal);