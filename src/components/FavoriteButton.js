import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movieData }) {
    const { favorites, wl, addToFavorites, removeFromFavorites , a2w, rfw } = useContext(GlobalContext);

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
            className={`favorite ${isFavorited ? "text-red-500" : ""} text-xl ml-14` }
        >
            &#9829;
        </button>
    );
}

export default FavoriteButton;