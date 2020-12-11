import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, theme, icon }) => {
  //determines color of text color against background color in navbar
  const themeColorOptions = ["dark", "primary", "danger", "success"];
  const textColor = themeColorOptions.includes(theme) ? "dark" : "light";

  return (
    <div>
      <nav className={`navbar navbar-${textColor} bg-${theme}`}>
        <Link to="/" className="navbar-brand mb-0 h1">
          <i className={icon}></i> {title}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
