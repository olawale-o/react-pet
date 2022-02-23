import React from 'react';
import { ProfileSideBar, ProfileArea } from '../../components';
import './style.scss';

const Profile = () => {
  console.log('Profile');
  return (
    <div className="profile">
      <div className="content">
        <div className="main">
          <ProfileSideBar />
          <ProfileArea />
        </div>
      </div>
    </div>
  );
};

export default Profile;
