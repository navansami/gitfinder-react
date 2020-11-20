import React from "react";

const User = ({ user }) => {
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={user.avatar_url}
        className="card-img-top"
        alt=""
        style={{ borderRadius: "50%", width: "50%", display: "block" }}
      />
      <div className="card-body">
        <h5> {user.login} </h5>
        <a href="#" className="btn btn-dark">
          See more
        </a>
      </div>
    </div>
  );
};

export default User;
