import React from 'react';
import './style.scss';
import MyPetCard from '../MyPetCard';

const ProfileArea = () => {
  console.log('ProfileArea');
  return (
    <div className="profile__area">
      <div className="pets">
        <MyPetCard pet={{
          name: 'Luna',
          offerCount: 2,
          likeCount: 5,
        }}
        />
      </div>
    </div>
  );
};

export default ProfileArea;
