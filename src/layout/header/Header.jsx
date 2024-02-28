import { Link } from "react-router-dom";
import "./Header.scss";

const Links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About US" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Home" },
  { to: "/counter", label: "Counter" },
];

const Header = () => {
  return (
    <header className="app-header">
      <div>LOGO </div>
      <nav>
        <ul>
          {Links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>Sign out</div>
    </header>
  );
};
export default Header;
