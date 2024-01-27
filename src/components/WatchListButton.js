import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function WatchButton({ movieData }) {
    const { favorites,
      watchlist,
      addToFavorites,
      removeFromFavorites,
      addToWatchlist,
      removeFromWatchlist } = useContext(GlobalContext);

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
            className={`favorite ${isWatched ? "text-red-500" : ""} text-xl ml-14` }
        >
            button
        </button>
    );
}

export default WatchButton;