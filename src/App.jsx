import React from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import UserList from "./components/users/UserList";
import useGitUsers from "./hooks/useGitUsers";
import Loader from "./components/layout/Loader";

const App = () => {
  const [usersList, search] = useGitUsers("");

  const navbarOptions = {
    title: "GitFinder",
    theme: "dark", // theme options -> [dark, light, primary, danager, success]
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
        <SearchBar onFormReceived={search} clearButton={usersList.length} />
        <UserList usersList={usersList} />
      </div>
    </div>
  );
};

export default App;
