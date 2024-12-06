export const reducer = (state,action) =>{
    switch (action.type){
      case "TOGGLE_THEME":
        return{...state, theme: state.theme === 'light' ? 'dark': 'light'};
      case "SET_API_DATA":
        return {...state, apiData: action.payload};
      case "ADD_FAV":
        return{...state, favs:[...state.favs, action.payload]};
      case "DELETE_FAV":
        const filterFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
        return {...state, favs: filterFavs };
    }
};