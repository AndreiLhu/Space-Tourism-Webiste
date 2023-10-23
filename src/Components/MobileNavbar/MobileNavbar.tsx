import React from 'react';
import { Link } from 'react-router-dom';
import './mobileNavbar.css';

interface IMobileNavbar {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className=" mainMobileNavbarContainer">
      <input
        type="button"
        value={isMobileMenuOpen ? 'Close' : 'Open'}
        onClick={() => toggleMobileMenu()}
      />
      {isMobileMenuOpen && (
        <div className="NavList">
          <Link to="/">
            <span>00</span>home
          </Link>

          <Link to="/destination">
            <span>01</span>destination
          </Link>
          <div>
            <Link to="/crew">
              <span>02</span>crew
            </Link>
          </div>

          <Link to="/technology">
            <span>03</span>technology
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
