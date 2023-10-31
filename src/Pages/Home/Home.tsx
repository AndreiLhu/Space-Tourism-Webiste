import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css';
import MobileNavbar from '../../Components/MobileNavbar/MobileNavbar';

const Home: React.FC = () => {
  return (
    <div className="home-background ">
      <Navbar />
      <MobileNavbar />
      <div className="main-home-div">
        <div className="text-container">
          <h3 className="title">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="subtitle">SPACE</h1>
          <p className="subtitle-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="main-link-div">
          <NavLink className="home-link" to="/destination">
            EXPLORE
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
