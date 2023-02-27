
import React from 'react'
import Card from './Card';
import Followers from "../Followers/Followers";
import "./User.css";

const User = () => {
  return (
    <section className='card_follow'>
        <Card/>
        <Followers/>
    </section>
  )
}

export default User;

