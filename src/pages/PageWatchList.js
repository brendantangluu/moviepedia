import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

function Watchlist() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2>Watch List</h2>
      <div className="flex flex-wrap">
        {favorites.map((favorite, index) => (
          <MovieCard key={index} movieData={favorite} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
