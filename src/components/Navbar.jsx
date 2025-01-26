import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='flex w-10 h-10 rounded-lg bg-white items-center justify-center font-bold shadow-md'
      >
        <p className='blue-gradient_text'>CZ</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive === true ? 'text-blue-500' : 'text-gray-700'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive === true ? 'text-blue-500' : 'text-gray-700'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
