
import React, { useState } from "react";
import mockUser from "./mockData/mockUser";
import mockFollowers from "./mockData/mockFollowers"


const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={ {githubUser} }>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };

