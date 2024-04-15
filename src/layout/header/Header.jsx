import { NavLink } from "react-router-dom";
import "./Header.scss";

const Links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About US" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Home" },
  { to: "/counter", label: "Counter" },
  { to: "/investment-calculator", label: "Investment Calculator" },
];
const Header = () => {
  return (
    <header className="app-header">
      <div>LOGO</div>
      <nav>
        <menu>
          {Links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : "disabled")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </menu>
      </nav>
      <div>Sign out</div>
    </header>
  );
};
export default Header;
