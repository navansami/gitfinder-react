import React from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/searchbar/SearchBar";

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
      <div className="container" style={{ padding: "10px 0" }}>
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
