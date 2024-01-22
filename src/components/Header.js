import { useState } from 'react';
import Nav from './Nav';

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className='bg-headerBG'>
      <div className="flex justify-between items-center text-text">
        <div className='flex p-2 text-3xl'>
            <h2>M</h2>
            <h2 className='text-logo'>P</h2>
       </div>
        <button onClick={() => setShowNav(!showNav)} className="text-4xl m-1 p-2">
          ☰
        </button>
      </div>
      <Nav className={`${showNav ? 'block' : 'hidden'}`} />
    </header>
  );
}

export default Header;
