import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/header/Logo.svg";
import icon1 from "../../assets/images/header/icon1.svg";
import icon2 from "../../assets/images/header/icon2.svg";
import icon3 from "../../assets/images/header/icon3.svg";
import icon4 from "../../assets/images/header/icon4.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <nav>
          <div className="nav-logo">
            <Link to="/">
              <img src={Logo} alt="Logo..." />
            </Link>
          </div>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Shop">Shop</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </div>
          <div className="nav-icons">
            <Link to="/">
              <img src={icon1} alt="icon1..." />
            </Link>
            <Link to="/">
              <img src={icon2} alt="icon2..." />
            </Link>
            <Link to="/">
              <img src={icon3} alt="icon3..." />
            </Link>
            <Link to="/">
              <img src={icon4} alt="icon4..." />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
