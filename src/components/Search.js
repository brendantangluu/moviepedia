import React from 'react';

function Search({ className }, ref) {
  return (
    <div ref={ref} className={`absolute bg-headerBG w-full top-0 h-16 flex items-center text-black ${className}`}>
      <form className = "mx-2 w-full" action="#">
        <input className = "w-full p-1 rounded-md" type="text" placeholder="Search for movies"/>
      </form>
    </div>
  );
}

export default React.forwardRef(Search);
