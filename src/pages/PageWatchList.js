import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

function Favourites() {
  const { favs, watchlist } = useContext(GlobalContext);

  return (
    <div>
      <h2>to watch</h2>
      <div className="flex flex-wrap">
        {watchlist.map((item, index) => (
          <MovieCard key={index} movieData={item} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
