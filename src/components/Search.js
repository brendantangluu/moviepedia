import React from 'react';

function Search({ className }, ref) {
  return (
    <div ref={ref} className={`absolute bg-background w-full top-0 h-20 flex items-center text-black ${className}`}>
      <form action="#">
        <input type="text" placeholder="Search for movies" className="text-background w-full" />
      </form>
    </div>
  );
}

export default React.forwardRef(Search);
