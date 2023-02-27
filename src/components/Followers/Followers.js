
import React from 'react'
import { GithubContext } from "../../context/context";
import "./Followers.css";

const Followers = () => {
    const { followers } = React.useContext(GithubContext);
  return (
    <div className='followers'>
        {
            followers.map((follower, index) => {
                const {avatar_url: img, html_url, login} = follower;
                return <article key={index}>
                    <img className='followers_detail' src={img} alt={login} />
                    <div className='followers_detail link'>
                        <h4>{login}</h4>
                        <a href={html_url}>{html_url}</a>
                    </div>
                </article>
            })
        }
    </div>
  )
}

export default Followers

