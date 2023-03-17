
import React, { useState } from "react";
import mockUser from "./mockData/mockUser";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);

  const [isLoading, setIsLoading] = useState(false);

const searchGithubUser = async (user) => {
  setIsLoading(true);
  const response = await axios(`${rootUrl}/users/${user}`).catch((err)=>{
    console.log(err);
  });
  setIsLoading(false);
  if (response) {
    setGithubUser(response.data);
    const {login, followers_url} = response.data;
      // repos 
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(response =>setRepos(response.data));
      // followers
      axios(`${followers_url}?per_page=100`).then
      (response => setFollowers(response.data));

  }
}

  return (
    <GithubContext.Provider value={{ githubUser, followers, repos, searchGithubUser }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };

