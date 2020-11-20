import React from "react";

const Navbar = ({ title, theme, icon }) => {
  //determins color of text color against background color in navbar
  const themeColorOptions = ["dark", "primary", "danger", "success"];
  const textColor = themeColorOptions.includes(theme) ? "dark" : "light";

  return (
    <div>
      <nav class={`navbar navbar-${textColor} bg-${theme}`}>
        <span class="navbar-brand mb-0 h1">
          <i class={icon}></i> {title}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
