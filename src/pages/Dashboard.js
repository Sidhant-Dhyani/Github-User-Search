
import React from 'react'
import Info from '../components/Info/Info'
import Repos from '../components/Repos/Repos'
import Search from '../components/Search/Search'
import User from '../components/User/User'
import loadingImage from "../images/preloader.gif";
import { GithubContext } from '../context/context'

const Dashboard = () => {

  const {isLoading} = React.useContext(GithubContext);
  
  if(isLoading){
    return <main>
          <Search/>
          <img src={loadingImage} alt="loading" />
      </main>
  }

  return (
    <main>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  );
};

export default Dashboard

