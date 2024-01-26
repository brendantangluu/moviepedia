import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function PageFavourites() {
  
  const {favourites, addtoFavourites, removeFromFavourites} =
  React.useContext(GlobalContext);
  

  return ( <h2>favs</h2> );


}

export default PageFavourites;