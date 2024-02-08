import { useEffect, useId, useState } from 'react';


function SearchBar({ onSearch, setInput }) {
  const id = useId();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(inputValue);
    onSearch();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        setInput(inputValue);
        onSearch();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [inputValue, onSearch, setInput]);


  return (
    <div>
      <form action = {SearchBar} onSubmit={handleSubmit}>
        <label htmlFor={id}>Please specify:</label>
        <input id={id} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
