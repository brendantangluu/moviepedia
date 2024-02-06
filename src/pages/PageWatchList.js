import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

function Watchlist() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold my-4">Watch List</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {favorites.map((favorite, index) => (
          <MovieCard key={index} movieData={favorite} className="w-48 sm:w-1/2 md:w-1/3 lg:w-1/4" />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
