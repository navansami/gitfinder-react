import React from "react";
import Navbar from "./components/layout/Navbar";

const App = () => {
  const navbarOptions = {
    title: "GitFinder",
    theme: "danger", // theme options -> [dark, light, primary, danager, warning success]
    icon: "fa fa-github",
  };

  return (
    <div>
      <Navbar
        title={navbarOptions.title}
        theme={navbarOptions.theme}
        icon={navbarOptions.icon}
      />
      <div className="container"></div>
    </div>
  );
};

export default App;
