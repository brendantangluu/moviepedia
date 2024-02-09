import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

function Favourites() {
  const { favorites } = useContext(GlobalContext);

  return (
  <div className="text-center h-dvh">
      <h2 className="text-4xl font-bold my-4">Favourites</h2>
      
      {favorites.length > 0 && (
        <div className="flex flex-wrap justify-center gap-12">
          {favorites.map((favorite, index) => (
            <MovieCard key={index} movieData={favorite} />
          ))}
        </div>
      )}

      {favorites.length === 0 && (
        <p className='text-2xl'>No movies were added!</p>
      )}


    </div>
  );
}

export default Favourites;
