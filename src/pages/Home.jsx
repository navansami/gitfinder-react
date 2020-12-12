import React, { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import UserList from "../components/users/UserList";
import useGitUsers from "../hooks/useGitUsers";

const Home = ({ searchTerm }) => {
  const [term, setTerm] = useState("");
  const [usersList, search] = useGitUsers("");

  const onSearchTerm = (term) => {
    return searchTerm(term);
  };

  return (
    <div className="container" style={{ padding: "10px 0" }}>
      <SearchBar onFormReceived={search} />
      <UserList usersList={usersList} />
    </div>
  );
};

export default Home;
