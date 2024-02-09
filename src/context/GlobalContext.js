// GlobalContext code referenced from Randy Gulak

import {createContext, useEffect, useState} from "react";

export const GlobalContext = createContext();

export function GlobalProvider({children}){
    function loadFromlocalStorage(){ 
        const localData = localStorage.getItem("favorites");
        return localData ? JSON.parse(localData) : [];
    }
    
    function loadFromlocalStorageWatchlist(){   
        const localData = localStorage.getItem("watchlist");
        return localData ? JSON.parse(localData) : [];
    }

    const [favorites, setFavorites] = useState(loadFromlocalStorage());
    const [watchlist, setWatchlist] = useState(loadFromlocalStorageWatchlist());

    function addToFavorites(favorite){
        const newFavorites = [...favorites, favorite];
        setFavorites(newFavorites);
    }


    function removeFromFavorites(favorite){
        const newFavorites = favorites.filter((fav)=>{
            return fav.id !== favorite.id;
        });
        setFavorites(newFavorites);
    }

    function addToWatchlist(watchlistitem){
        const newWatchlist = [...watchlist, watchlistitem];
        setWatchlist(newWatchlist);
    }


    function removeFromWatchlist(watchlistitem){
        const newWatchlist = watchlist.filter((wl)=>{
            return wl.id !== watchlistitem.id;
        });
        setWatchlist(newWatchlist);
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites]);

    
    return(
        <GlobalContext.Provider
            value={{
                favorites: favorites,
                watchlist: watchlist,
                addToFavorites: addToFavorites,
                removeFromFavorites: removeFromFavorites,
                addToWatchlist: addToWatchlist,
                removeFromWatchlist: removeFromWatchlist
            }}
        >
            {children}
        </GlobalContext.Provider>
    );


}