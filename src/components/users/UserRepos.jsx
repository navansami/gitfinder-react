import React from "react";

const UserRepos = ({ repo }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserRepos;
