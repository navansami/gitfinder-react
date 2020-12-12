import React from "react";
import SearchBar from "../components/searchbar/SearchBar";
import UserList from "../components/users/UserList";
import useGitUsers from "../hooks/useGitUsers";

const Home = ({ userSelected }) => {
  const [usersList, search] = useGitUsers("");

  return (
    <div className="container" style={{ padding: "10px 0" }}>
      <SearchBar onFormReceived={search} />
      <UserList usersList={usersList} userSelected={userSelected} />
    </div>
  );
};

export default Home;
