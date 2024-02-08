import { NavLink } from 'react-router-dom';

function Nav({ className }) {
  return (
    <nav className={`bg-headerBG text-text w-full h-36 md:bg-none md:h-16 md:w-auto md:justify-end md:absolute md:top-4 md:right-16 ${className}`}>
      <ul className='text-2xl text-center md:flex md:text-xl lg:text-2xl'>
        <li className='m-4 hover:text-logo xl:mx-16'>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
        <li className='m-4 hover:text-logo xl:mx-16'>
          <NavLink to="/watchlist">Watch List</NavLink>
        </li>
        <li className='m-4 hover:text-logo xl:mx-16'>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
