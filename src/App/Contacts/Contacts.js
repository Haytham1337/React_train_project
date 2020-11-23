import React, { useEffect } from 'react';
import './Contacts.css';
import avatar from './img/avat.png';
import Profile from './Profile';

const userInfo = {
  username:"Haytham1337",
  name:"Yurii",
  surname:"Yatskiv",
  phone:"0637998295"
}
function Contacts() {

  return (
      <Profile ava = {avatar} userInfo={userInfo}></Profile>
  );
}

export default Contacts;
