import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../../src/assets/shared/logo.svg';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="main-navbar-container">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <div className="navbar-links-container">
          <Link to="/">00HOME</Link>

          <Link to="/destination">01DESTINATION</Link>

          <Link to="/crew">02CREW</Link>

          <Link to="/technology">03TECHNOLOGY</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
