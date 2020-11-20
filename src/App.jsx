import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/searchbar/SearchBar";

const App = () => {
  const [text, setText] = useState("");

  const navbarOptions = {
    title: "GitFinder",
    theme: "danger", // theme options -> [dark, light, primary, danager, success]
    icon: "fa fa-github",
  };

  console.log(text);

  return (
    <div>
      <Navbar
        title={navbarOptions.title}
        theme={navbarOptions.theme}
        icon={navbarOptions.icon}
      />
      <div className="container" style={{ padding: "10px 0" }}>
        <SearchBar onFormReceived={setText} />
      </div>
    </div>
  );
};

export default App;
