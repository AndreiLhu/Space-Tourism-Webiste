import React from 'react';
import { Link } from 'react-router-dom';
import './mobileNavbar.css';
import logo from '../../assets/shared/logo.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

// interface IMobileNavbar {
//   isMobileMenuOpen: boolean;
//   toggleMobileMenu: () => void;
// }

const MobileNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className=" mainMobileNavbarContainer">
      <div className="logoNavContainer">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="navMobileLogo" />
          </Link>
        </div>
        <div>
          <button
            className="mobileNavbarButton"
            type="button"
            onClick={() => toggleMobileMenu()}
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="navList">
          <div>
            <Link to="/" onClick={() => toggleMobileMenu()}>
              <span>00</span>home
            </Link>
          </div>
          <div>
            <Link to="/destination" onClick={() => toggleMobileMenu()}>
              <span>01</span>destination
            </Link>
          </div>
          <div>
            <Link to="/crew" onClick={() => toggleMobileMenu()}>
              <span>02</span>crew
            </Link>
          </div>
          <div>
            <Link to="/technology" onClick={() => toggleMobileMenu()}>
              <span>03</span>technology
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
