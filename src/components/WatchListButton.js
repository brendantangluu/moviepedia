import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movieData }) {
    const { favorites, addToFavorites, removeFromFavorites } = useContext(GlobalContext);

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
            className={`favorite ${isFavorited ? "text-red-500" : ""} text-xl ml-14`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" fill={`${isFavorited ? "blue" : "white"}`} viewBox="0 0 30 30">
                <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
            </svg>
        </button>
    );
}

export default FavoriteButton;
