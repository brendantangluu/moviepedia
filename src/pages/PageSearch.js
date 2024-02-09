import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { discoverMovies } from '../utilities/api';
import MoviesContainer from '../components/MoviesContainer';

function SearchPage() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  // https://reactrouter.com/en/6.22.0/hooks/use-location 
  // this is used with navigate for our search
  const input = location.state && location.state.input;

  useEffect(() => {
    if (input) {
      discoverMovies(input)
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [input]);

  return (
    <div>
      <h2 className='ml-2 p-4 pt-6 text-xl'>Search Results for "{input}"</h2>
      <MoviesContainer title="" moviesData={searchResults} />
    </div>
  );
}

export default SearchPage;
