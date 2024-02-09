import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movieData, pageStyle }) {
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

    // Default button style
    let buttonStyle = "lg:hover:-translate-y-1 duration-300 transition ease-in-out delay-50 text-2xl md:text-4xl ";

    // Adjust buttonStyle based on pageStyle
    if (pageStyle === "page1") {
        buttonStyle += "lg:hover:text-red-500 ml-14 4xl:ml-0";
    } else if (pageStyle === "single") {
        buttonStyle += " lg:hover:text-red-500 ml-4";
    }

    // Default text style
    let textStyle = "text-white lg:hover:text-red-500";

    // Adjust textStyle based on pageStyle
    if (isFavorited && pageStyle === "page1") {
        textStyle = "text-red-500 lg:hover:text-white";
    } else if(isFavorited && pageStyle === "single"){
        textStyle = "text-red-500 lg:hover:text-white";

    }

    return (
        <button
            onClick={handleFavorite}
            className={`${buttonStyle} ${textStyle}`}
        >
            &#9829;
        </button>
    );
}

export default FavoriteButton;
