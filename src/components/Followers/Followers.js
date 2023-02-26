import React from 'react'

const Followers = () => {
    const {followers} = React.useContext(GithubContext);
  return (
    <div>
        {followers.map((follower, index)=>{
            
        })}
    </div>
  )
}

export default Followers