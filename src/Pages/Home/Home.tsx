import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css';
import MobileNavbar from '../../Components/MobileNavbar/MobileNavbar';

const Home: React.FC = () => {
  return (
    <div className="homeBackground ">
      <Navbar />
      <MobileNavbar />
      <div className="mainHomeDiv">
        <div className="textContainer">
          <h3 className=" title">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="subtitle">SPACE</h1>
          <p className="subtitleText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="mainLinkDiv">
          <NavLink className="homeLink" to="/destination">
            EXPLORE
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
