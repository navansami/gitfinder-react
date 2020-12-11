import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gitusers from "../../apis/gitusers";
import UserRepos from "./UserRepos";
import "./User.css";

const DisplayUser = () => {
  let { username } = useParams();
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const data = await gitusers.get(`/users/${username}`);
      return setUser(data.data);
    };

    if (username) getUser();
  }, [username]);

  useEffect(() => {
    const getRepos = async () => {
      const data = await gitusers.get(`/users/${username}/repos`);
      return setRepos(data.data);
    };

    if (username) getRepos();
  }, [username]);

  const { avatar_url, login, location, name, bio, html_url } = user;
  const renderedRepos = repos.map((repo) => {
    return <UserRepos key={repo.id} repo={repo} />;
  });

  return (
    <div className="container">
      <div className="profile_card">
        <div className="profile_card__avatar">
          <img src={avatar_url} alt={login} style={{ height: "12rem" }} />
          <h2>{login}</h2>
          <h5>Location: {location ? location : "unknown"}</h5>
        </div>
        <div className="profile_card__bio">
          <h4>Bio of {name ? name : login}</h4>
          {bio}
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Visit Github Profile
          </a>
        </div>
      </div>
      <div>{renderedRepos}</div>
    </div>
  );
};

export default DisplayUser;
