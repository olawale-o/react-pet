import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProfileSideBar } from '../../components';
import './style.scss';

const Profile = () => {
  console.log('Profile');
  return (
    <div className="profile">
      <div className="content">
        <div className="main">
          <ProfileSideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
