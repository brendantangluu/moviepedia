import { useState, useEffect } from 'react';
import MoviesContainer from '../components/MoviesContainer';
import { discoverMovies } from '../utilities/api';
import SearchBar from '../components/SearchBar';

function PageSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState('');

  const handleSearch = () => {
    discoverMovies(input)
      .then((data) => {
        setSearchResults(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [input]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} setInput={setInput} />
      <MoviesContainer title="Search Results" moviesData={searchResults} />
    </div>
  );
}

export default PageSearch;
