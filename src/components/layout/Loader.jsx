import React from "react";
import spinner from "../../spinner.gif";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="" style={{ height: "70vh", width: "100vw" }} />
    </div>
  );
};

export default Loader;
