import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movieData }) {

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

    return (
        <button
            onClick={handleFavorite}
            className={`hover:-translate-y-1 hover:text-red-500 duration-300 ${isFavorited ? "transition ease-in-out delay-50 text-red-500 hover:text-white" : ""} text-2xl ml-14 md:text-4xl 4xl:ml-0` }
        >
            &#9829;
        </button>
    );
}

export default FavoriteButton;