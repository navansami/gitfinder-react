import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import DisplayUser from "./components/users/DisplayUser";

const App = () => {
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
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={DisplayUser} />
      </Switch>
    </Router>
  );
};

export default App;
