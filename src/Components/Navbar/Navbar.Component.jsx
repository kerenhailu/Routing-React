import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>Navbar:</h1>
      <nav>
          <Link to="/Orders">Orders </Link>
          <Link to="/Menu">Menu</Link>
          </nav>
    </div>
  );
};
export default Navbar;
