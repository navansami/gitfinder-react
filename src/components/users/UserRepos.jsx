import React from "react";

const UserRepos = ({ repo }) => {
  return (
    <div className="ui vertical segment">
      <h5>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h5>
      <p>{repo.description}</p>
    </div>
  );
};

export default UserRepos;
