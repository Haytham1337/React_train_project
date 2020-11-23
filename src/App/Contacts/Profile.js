import React, { useEffect, useState } from 'react';
import './Contacts.css';

function Profile(props) {
    let [editMode,EditChange] = useState(false);
    let [UserInfo,EditUserInfo] = useState(props.userInfo.name);

    const EditModeOn = () =>{
        EditChange(true);
    }
    const EditModeOff = () =>{
        EditChange(false);
    }
    const OnStatusChange = (e)=>{
        EditUserInfo(e.currentTarget.value);
    }

  return (
      <div className="ContactsWrapper">
          {!editMode &&
                    <div>
                      <h1>Your Profile</h1>
                      <img className="Avatar" src={props.ava} alt="Mountain"></img>
                      <div className="UserInfo">
                        <h3> User Name:{UserInfo}</h3>
                        <h3> Name : </h3>
                        <h3> Surname : Yatskiv</h3>
                        <h3> Phone : +380637998295</h3>
                      </div>
                      <span className="UserEditBtn" onClick={EditModeOn}> Edit</span>
                    </div>
          }
          {editMode &&
              <div>
                <h1>Your Profile</h1>
                 <img className="Avatar" src={props.ava} alt="Mountain"></img>
                 <div className="UserInfo">
                  <h3>User Name:<input onChange={OnStatusChange}></input></h3>
                  <h3>Name     :<input></input></h3>
                  <h3>Surname  :<input></input></h3>
                  <h3>Phone    :<input></input></h3>
                 </div>
                 <span className="UserEditBtn" onClick={EditModeOff}> Save</span>
              </div>
          }

      </div>

  );
}

export default Profile;
