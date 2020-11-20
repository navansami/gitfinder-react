import React, { useState } from "react";

const SearchBar = ({ onFormReceived }) => {
  const [text, setText] = useState("");

  const onFormSubmitted = (e) => {
    e.preventDefault();
    onFormReceived(text);
    setText("");
  };

  return (
    <form onSubmit={(e) => onFormSubmitted(e)}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Find a git user"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
};

export default SearchBar;
