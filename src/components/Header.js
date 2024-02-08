import { useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import Logo from './Logo';
import SearchBar from './SearchBar';


function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        // Clicked outside of the search bar
        setShowSearch(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  const handleSearchClick = (e) => {
    // Toggle the search bar visibility when clicking on the search icon
    if (!searchRef.current.contains(e.target)) {
      setShowSearch(!showSearch);
    }
  };

  const handleInputClick = (e) => {
    // Prevent the click event from reaching the document when clicking inside the input
    e.stopPropagation();
  };

  return (
    <header className='bg-headerBG md:h-24 md:relative'>
      <div className="flex justify-between items-center text-text md:h-24">
        <Logo/>
        <div className='flex'>
          <button onClick={() => setShowSearch(!showSearch)}>
          {/* <SearchBar
          ref={searchRef}
          onClick={handleInputClick}
          className={`${showSearch ? 'block' : 'hidden'}`} /> */}
          </button>
          <button onClick={() => setShowNav(!showNav)} className="text-4xl m-1 p-2 md:hidden">
            ☰
          </button>
        </div>
      </div>
      <Nav className={`${showNav ? 'block' : 'hidden'} md:flex`} />
    </header>
  );
}

export default Header;
