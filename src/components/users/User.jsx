import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5> {user.login} </h5>
        <Link
          to={{
            pathname: `/user/${user.login}`,
            login: `?${user.login}`,
          }}
          className="btn btn-dark btn-block"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default User;
