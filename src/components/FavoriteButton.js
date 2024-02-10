// Watch list and Favourites code referenced from Randy Gulak

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import useMediaQuery from '@mui/material/useMediaQuery';

function FavoriteButton({ movieData, pageStyle }) {
     // we destructure like this because of the structure of the array
    // so we dont use watchlist, addToWatchlst and removeFromWatchlist
    // but they are there to make sure we get the proper data and functions
    const { favorites, watchlist, addToFavorites, removeFromFavorites , addToWatchlist, removeFromWatchlist } = useContext(GlobalContext);

    const isFavorited = favorites.find((fav) => fav.id === movieData.id);

    function handleFavorite(event) {
        event.stopPropagation();

        if (isFavorited) {
            removeFromFavorites(movieData);
        } else {
            addToFavorites(movieData);
        }
    }

    // Default button style
    let buttonStyle = "lg:hover:-translate-y-1 duration-150 transition ease-in-out delay-50";

    // Adjust buttonStyle based on pageStyle
    if (pageStyle === "page1") {
        buttonStyle += "lg:hover:fill-red-500 ml-14 4xl:ml-0";
    } else if (pageStyle === "single") {
        buttonStyle += " lg:hover:fill-red-500 ml-4";
    }

    const matches = useMediaQuery('(min-width:720px)');

    const favoritedOrNo = isFavorited 
    ? <svg className={buttonStyle} xmlns="http://www.w3.org/2000/svg" width={matches ? "38" : "24"} height={matches ? "38" : "24"} fill="red" viewBox="0 0 24 24">
        <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
    </svg>

    :<svg className={buttonStyle} xmlns="http://www.w3.org/2000/svg" width={matches ? "38" : "24"} height={matches ? "38" : "24"} fill="white" viewBox="0 0 24 24">
        <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
    </svg>

    return (
        <button
            onClick={handleFavorite}
            className="mt-1"
        >
           {favoritedOrNo}
        </button>
    );
}

export default FavoriteButton;
