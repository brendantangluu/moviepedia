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
            className={`lg:hover:-translate-y-1 lg:hover:text-red-500 lg:duration-300 ${isFavorited ? "text-red-500 lg:transition lg:ease-in-out lg:delay-50 lg:hover:text-white" : ""} text-2xl ml-14 md:text-4xl 4xl:ml-0` }
        >
            &#9829;
        </button>
    );
}

export default FavoriteButton;