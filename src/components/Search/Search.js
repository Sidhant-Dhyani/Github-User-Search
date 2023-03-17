
import React from "react";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../../context/context";
import "./Search.css";
const Search = () => {

    const [user, setUser] = React.useState("");
    const {searchGithubUser} = React.useContext(GithubContext);
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(user){
        searchGithubUser(user);
      }
    }
  return (
    <div className="Search-Container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="left-control">
          <MdSearch />
          <input type="text" placeholder="Enter Github User" value={user} onChange={(e) => setUser(e.target.value)}/>
          </div>
          <button className="btn" type="Submit">Search</button>
        </div>
      </form>
      <h3 className="two">Requests : 60/60</h3>
    </div>
  );
};

export default Search;

