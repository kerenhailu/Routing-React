import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className='Navbar'>
          <Link className='Links' to="/Orders">Orders </Link>
          <Link className='Links' to="/Menu">Menu</Link>
          <Link className='Links' to="/">Home</Link>
          </nav>
  );
};
export default Navbar;
