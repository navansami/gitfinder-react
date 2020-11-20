import React from "react";

const Navbar = ({ title, theme, icon }) => {
  //determines color of text color against background color in navbar
  const themeColorOptions = ["dark", "primary", "danger", "success"];
  const textColor = themeColorOptions.includes(theme) ? "dark" : "light";

  return (
    <div>
      <nav className={`navbar navbar-${textColor} bg-${theme}`}>
        <span className="navbar-brand mb-0 h1">
          <i className={icon}></i> {title}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
