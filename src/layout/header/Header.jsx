import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="app-header">
      <div>LOGO </div>

      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>

          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <div>Sign out</div>
    </header>
  );
};
export default Header;
// To be continue tomorrow: connect the Links with the routes
