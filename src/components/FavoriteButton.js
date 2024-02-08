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
            className={`hover:-translate-y-1 hover:text-red-500 duration-300 ${isFavorited ? "transition ease-in-out delay-50 text-red-500 hover:text-white" : ""} text-xl ml-14 lg:text-4xl` }
        >
            &#9829;
        </button>
    );
}

export default FavoriteButton;