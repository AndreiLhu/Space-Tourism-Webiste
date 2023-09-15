import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <>
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
    </>
  );
};
export default Navbar;
