import React from "react";
import Navbar from "./components/layout/Navbar";

const App = () => {
  /*
    Themes colors can include:
      - primary
      - dark
      - light
  */
  const navbarOptions = {
    title: "GitFinder",
    theme: "light",
  };

  return (
    <div>
      <Navbar title={navbarOptions.title} theme={navbarOptions.theme} />
      <div className="container"></div>
    </div>
  );
};

export default App;
