import {createContext, useEffect, useState} from "react";

export const GlobalContext = createContext();

export function GlobalProvider({children}){
    function loadFromlocalStorage(){
        const localData = localStorage.getItem("favorites");
        return localData ? JSON.parse(localData) : [];
    }

    const [favorites, setFavorites] = useState(loadFromlocalStorage());

    function addToFavorites(favorite){
        const newFavorites = [...favorites, favorite];
        setFavorites(newFavorites);
        console.log(newFavorites)
    }


    function removeFromFavorites(favorite){
        const newFavorites = favorites.filter((fav)=>{
            return fav.id !== favorite.id;
        });
        setFavorites(newFavorites);
        console.log(newFavorites);
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites]);

    
    return(
        <GlobalContext.Provider
            value={{
                favorites: favorites,
                addToFavorites: addToFavorites,
                removeFromFavorites: removeFromFavorites,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );


}