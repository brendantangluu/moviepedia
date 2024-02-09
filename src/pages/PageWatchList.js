import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

function PageWatchList() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold my-4">Watch List</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {watchlist.map((watchlist, index) => (
          <MovieCard key={index} movieData={watchlist} />
        ))}
      </div>
      
      {watchlist.length > 0 && (
        <div className="flex flex-wrap justify-center gap-12">
          {watchlist.map((favorite, index) => (
            <MovieCard key={index} movieData={favorite} />
          ))}
        </div>
      )}

      {watchlist.length === 0 && (
        <p className='text-2xl'>No movies were added!</p>
      )}

    </div>
  );
}

export default PageWatchList;