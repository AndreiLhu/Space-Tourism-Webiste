import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className=" mainHomeDiv">
      <Navbar />

      <h1 className=" titleDiv">
        <span className=" titleSpan">SO, YOU WANT TO TRAVEL TO</span>
        Space
      </h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <div className="mainLinkDiv">
        <NavLink className=" homeLink" to="/destination">
          Explore
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
