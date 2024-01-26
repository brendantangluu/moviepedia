import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function WatchListButton({ movieData }) {
    const { favourites ,watchlist, a2f, rfromfavs, addToWatchlist, removeFromWatchlist } = useContext(GlobalContext);

    const isFavorited = watchlist.find((fav) => fav.id === movieData.id);

    function handleFavorite(event) {
        event.stopPropagation();

        if (isFavorited) {
            removeFromWatchlist(movieData);
            console.log(removeFromWatchlist(movieData))
        } else {
            addToWatchlist(movieData);
        }
    }

    return (
        <button
            onClick={handleFavorite}
            className={`favorite ${isFavorited ? "text-red-500" : ""} text-xl ml-14` }
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"></path>
</svg>  
        </button>
    );
}

export default WatchListButton;