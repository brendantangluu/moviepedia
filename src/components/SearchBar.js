import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch, className }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);  

    // we use navigate to go to the search page
    navigate(`/search/${inputValue}`, { state: { input: inputValue } });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSearch(inputValue);  
        navigate('/search', { state: { input: inputValue } });
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [inputValue, onSearch, navigate]);


  return (
      <form className={`${className} lg:block`} onSubmit={handleSubmit}>
        <input
          className='w-full border rounded border-solid border-neutral-300 bg-slate-300 px-3 text-black mt-[20px]'
          value={inputValue}
          placeholder='search'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="" />
      </form>
  );
}

export default SearchBar;
