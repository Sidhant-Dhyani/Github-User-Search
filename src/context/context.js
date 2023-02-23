
import React, { useState } from "react";
import mockUser from "./mockData/mockUser";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);

  return (
    <GithubContext.Provider value={ {githubUser} }>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };

