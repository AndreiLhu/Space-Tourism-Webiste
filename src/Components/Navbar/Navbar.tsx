import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbarContainer">
        <Link to="/">
          <span>00</span>home
        </Link>

        <Link to="/destination">
          <span>01</span>destination
        </Link>

        <Link to="/crew">
          <span>02</span>crew
        </Link>

        <Link to="/technology">
          <span>03</span>technology
        </Link>
      </div>
    </>
  );
};
export default Navbar;
