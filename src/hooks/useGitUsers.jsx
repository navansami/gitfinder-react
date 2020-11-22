import { useState, useEffect } from "react";
import gitusers from "../apis/gitusers";

const useGitUsers = (user) => {
  const [users, setUsersList] = useState([]);

  useEffect(() => {
    if (user) findUsers();
  }, [user]);

  const findUsers = async (user) => {
    const data = await gitusers.get("/search/users", {
      params: {
        q: user,
      },
    });
    if (data) {
      setUsersList(data.data.items);
    }
  };

  return [users, findUsers];
};

export default useGitUsers;
