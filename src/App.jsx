import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import UserList from "./components/users/UserList";
import gitusers from "./apis/gitusers";

const App = () => {
  const [user, setUser] = useState("");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const findUsers = async () => {
      const data = await gitusers.get("/search/users", {
        params: {
          q: user,
        },
      });
      setUsersList(data.data.items);
    };

    if (user) findUsers();
  }, [user]);

  const navbarOptions = {
    title: "GitFinder",
    theme: "danger", // theme options -> [dark, light, primary, danager, success]
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
        <SearchBar onFormReceived={setUser} />
        <UserList usersList={usersList} />
      </div>
    </div>
  );
};

export default App;
