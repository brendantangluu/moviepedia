import { useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import Search from './Search';
import Logo from './Logo';


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
    <header className='bg-headerBG'>
      <div className="flex justify-between items-center text-text">
        <Logo/>
        <div className='flex'>
          <button onClick={() => setShowSearch(!showSearch)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 pt-2 lg:hidden">
              <path fill="#efefef" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path>
            </svg>
          </button>
          <button onClick={() => setShowNav(!showNav)} className="text-4xl m-1 p-2">
            ☰
          </button>
        </div>
      </div>
      <Search
        ref={searchRef}
        onClick={handleInputClick}
        className={`${showSearch ? 'block' : 'hidden'}`} />
      <Nav className={`${showNav ? 'block' : 'hidden'}`} />
    </header>
  );
}

export default Header;
