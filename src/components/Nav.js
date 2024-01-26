import { NavLink } from 'react-router-dom';

function Nav({ className }) {
  return (
    <nav className={`bg-headerBG text-text w-full h-52 ${className}`}>
      <ul className='text-2xl text-center'>
        <li className='m-4'>
          <NavLink to="/">Profile</NavLink>
        </li>
        <li className='m-4'>
          <NavLink to="/PageWatchList">Watch List</NavLink>
        </li>
        <li className='m-4'>
          <NavLink to="/portfolio">Favourites</NavLink>
        </li>
        <li className='m-4'>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
