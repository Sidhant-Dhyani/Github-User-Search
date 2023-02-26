import React from "react";
import { GithubContext, GithubProvider } from "../../context/context";
import {GoRepo, GoGist} from "react-icons/go";
import {FiUsers, FiUserPlus} from "react-icons/fi";
import "./info.css";

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);

  const { public_repos, public_gists, followers, following } = githubUser;

  const items = [
    {
        id: 1, 
        icon: <GoRepo className="icon"/>,
        label: "repos",
        value: public_repos,
        color: "pink",
    },
    {
        id: 2, 
        icon: <FiUsers className="icon"/>,
        label: "followers",
        value: followers,
        color: "green",
    },
    {
        id: 3, 
        icon: <FiUserPlus className="icon"/>,
        label: "following",
        value: following,
        color: "purple",
    },
    {
        id: 4, 
        icon: <GoGist className="icon"/>,
        label: "gists",
        value: public_gists,
        color: "yellow",
    }
  ];

  return <section className="section">
        {items.map((item)=>{
            return <Item key={item.id} {...item}>{item}</Item>
        })}
  </section>;
};

const Item = ({icon, label, value, color}) => {
    return <article className="item">
        <span className={color}>{icon}</span>
        <div>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    </article>
}


export default UserInfo;
