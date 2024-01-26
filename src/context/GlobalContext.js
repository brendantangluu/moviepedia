import { createContext, useEffect, useState } from "react";


//make 'global context for reusable variables'
export const GlobalContext = createContext();

//making component for reading, adding and deleting

//we imput an object into global provider
export function GlobalProvider ( {children} ) {
  function loadFromLocalStorage(){
    const localData =  localStorage.getItem('favourites');
    //we have to use json.parse because we stored it as a json object if we do have something stored else return empty array

    return localData ? JSON.parse(localData) : [];
  }

    //initial state we set it to whatever we get from local load from storage
    const [favourites, setFavourites] = useState(loadFromLocalStorage);

    //now we can use useEffect with useState to update state of favourites everytime the favourites array changes
    function addToFavourites(favourite){
      
        const newFavourites = [...favourites, favourite];
        setFavourites(newFavourites);
    }

    function removeFromFavourites(favourite){
      const newFavourites = favourites.filter((fav) =>{
        return fav.id !== favourite.id;
      });
      setFavourites(newFavourites);
    }

    useEffect(() => {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);


    return (
      <GlobalContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: addToFavourites,
        removeFromFavourites: removeFromFavourites
      }}>{children}</GlobalContext.Provider>
    );
}

