import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Headertest() {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  const handleSearchSubmit = (inputValue) => {

  };


  return (
    <header className='bg-headerBG'>
      <div className="flex justify-between align-middle items-center text-text">
        <Logo />
        <div className='flex'>
          {/* onClick={() => setShowSearch(!showSearch)} */}
        <SearchBar
              onSearch={handleSearchSubmit}
              className={`${showSearch ? 'block' : 'hidden'}`}
        />
          {/* search icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-4xl m-1 p-2">
            {/* Conditional rendering of search or exit icon based on showSearch state */}
            {showSearch ? (
              <svg
              fill='currentColor'
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:hidden"
            >
              <path d="M5.293 6.707a1 1 0 1 1 1.414-1.414L12 10.586l5.293-5.293a1 1 0 0 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707z" />
            </svg>


          ) : (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 lg:hidden"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>  
          )}
        </button>

        
          <button onClick={() => setShowNav(!showNav)} className="text-4xl m-1 p-2">
            ☰
          </button>
        </div>
      </div>

      <Nav className={`${showNav ? 'block' : 'hidden'}`} />
    </header>
  );
}

export default Headertest;
