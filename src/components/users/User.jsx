import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5> {user.login} </h5>
        <a href="#" className="btn btn-dark btn-block">
          See more
        </a>
      </div>
    </div>
  );
};

export default User;
