import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

function Favourites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2>Favourites</h2>
      <div className="flex flex-wrap">
        {favorites.map((favorite, index) => (
          <MovieCard key={index} movieData={favorite} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
