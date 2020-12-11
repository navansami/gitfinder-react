import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gitusers from "../../apis/gitusers";
import "./User.css";

const DisplayUser = () => {
  let { username } = useParams();
  const [user, setUser] = useState("");
  // setUser(username);

  useEffect(() => {
    const getUser = async () => {
      const data = await gitusers.get(`/users/${username}`);
      return setUser(data.data);
    };

    if (username) getUser();
  }, [username]);

  const { avatar_url, login, location, name, bio, html_url } = user;

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
          <a href={html_url} target="_blank" className="btn btn-dark">
            Visit Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
