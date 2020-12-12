import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import DisplayUser from "./components/users/DisplayUser";

const App = () => {
  const [term, setTerm] = useState("");

  const searchTerm = (searchTerm) => {
    setTerm(searchTerm);
  };

  const navbarOptions = {
    title: "GitFinder",
    theme: "dark", // theme options -> [dark, light, primary, danager, success]
    icon: "fa fa-github",
  };

  return (
    <Router>
      <div>
        <Navbar
          title={navbarOptions.title}
          theme={navbarOptions.theme}
          icon={navbarOptions.icon}
        />
      </div>

      <Switch>
        <Route exact path="/" render={() => <Home searchTerm={searchTerm} />} />
        <Route path="/user/:username" component={DisplayUser} />
      </Switch>
    </Router>
  );
};

export default App;
