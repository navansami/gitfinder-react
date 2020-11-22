import React from "react";
import User from "./User";

const UserList = ({ usersList }) => {
  const renderedUser = usersList.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {" "}
      {renderedUser}{" "}
    </div>
  );
};

export default UserList;
