import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../src/assets/shared/logo.svg';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="mainNavbarContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="navLogo" />
        </Link>

        <div className="lineNavbar"></div>
        <div className="navbarLinksContainer">
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
