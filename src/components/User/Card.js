
import React from "react";
import { GithubContext } from "../../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import "./Card.css";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <header>
      <div>
        <img src={avatar_url} alt={name} />
        <p className="bio">{bio}</p>
      </div>
      <div>
        <div className="name_info">
          <h4>{name}</h4>
          <p>@{twitter_username || "john doe"}</p>
        </div>
        <div className="other_info">
            <p>
                <MdBusiness />
                {company}
            </p>
            <p>
                <MdLocationOn />
                {location}
            </p>
            <p className="blog_link" href={`https//${blog}`}>
                <MdLink />
                {blog}
            </p>
        </div>
      </div>
      <div className="follow">
        <a href={html_url}>Follow</a>
      </div>
    </header>
  );
};

export default Card;

