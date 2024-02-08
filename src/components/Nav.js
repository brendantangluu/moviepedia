import { NavLink } from 'react-router-dom';

function Nav({ className }) {
  return (
    <nav className={`bg-headerBG text-text w-full h-44 ${className}`}>
      <ul className='text-2xl text-center lg:text-3xl'>
        <li className='m-4'>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
        <li className='m-4'>
          <NavLink to="/watchlist">Watch List</NavLink>
        </li>
        <li className='m-4'>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;