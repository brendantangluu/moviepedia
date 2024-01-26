import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


function FavouriteButton ( {movieData} ) {
  const {favourites, addtoFavourites, removeFromFavourites} =
  useContext(GlobalContext);

  const isFavourite = favourites.find((fav) => {
    return favourites.id ===  movieData.id;
  })

  function handleFavourite(event){
    event.stopPropagation();
    if(isFavourite){
      removeFromFavourites(movieData);
    } else {
      addtoFavourites(movieData);
    }
  }
  return (
    <button
    onClick={handleFavourite}
    className={`favourite ${isFavourite ? "favourited" : ""}`}
    >
      button
    </button>

  );

}

export default FavouriteButton;
