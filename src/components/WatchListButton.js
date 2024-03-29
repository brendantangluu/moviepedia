// Watch list and Favourites code referenced from Randy Gulak

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function WatchButton({ movieData }) {

    // we destructure like this because of the structure of the array
    // so we dont use favourites, addToFavourites and removeFromFavourites
    // but they are there to make sure we get the proper data and functions

    const { favorites,
      watchlist,
      addToFavorites,
      removeFromFavorites,
      addToWatchlist,
      removeFromWatchlist } = useContext(GlobalContext);

    // determines if the movie is in the watch list
    const isWatched = watchlist.find((w) => w.id === movieData.id);


    function handleWatched(event) {
        event.stopPropagation();

        if (isWatched) {
            removeFromWatchlist(movieData);
        } else {
            addToWatchlist(movieData);
        }
    }
        
    return (
        <button
            onClick={handleWatched}
            className="ml-24 md:ml-44"
        >
            <svg className = "hover:fill-logo duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill = {`${isWatched ? "#3554e9" : "white"}`} viewBox="0 0 24 24">
                <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
            </svg>
        </button>
    );
}

export default WatchButton;