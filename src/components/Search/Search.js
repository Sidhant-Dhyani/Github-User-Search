
import React from "react";
import { MdSearch } from "react-icons/md";
import "./Search.css";
const Search = () => {

    const handleSubmit = () =>{

    }
  return (
    <div className="Search-Container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="left-control">
          <MdSearch />
          <input type="text" placeholder="Enter Github User" />
          </div>
          <button className="btn" type="Submit">Search</button>
        </div>
      </form>
      <h3 className="two">Requests : 60/60</h3>
    </div>
  );
};

export default Search;

