import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { discoverMovies } from '../utilities/api';
import MoviesContainer from '../components/MoviesContainer';

function SearchPage() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const input = location.state && location.state.input;

  useEffect(() => {
    if (input) {
      discoverMovies(input)
        .then((data) => {
          setSearchResults(data.results);
          console.log(data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [input]);

  return (
    <div>
      <h2>Search Results for "{input}"</h2>
      <MoviesContainer title="Search Results" moviesData={searchResults} />
    </div>
  );
}

export default SearchPage;
