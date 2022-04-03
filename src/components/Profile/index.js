import React from 'react';
import PropType from 'prop-types';
import './style.scss';
import MyPetCard from '../MyPetCard';

const ProfileArea = ({ myPets }) => (
  <div className="profile__area">
    <div className="pets">
      {myPets.map((pet) => (
        <MyPetCard
          key={pet.id}
          pet={{
            name: pet.name,
            offerCount: 2,
            likeCount: 5,
            color: pet.color,
            gender: pet.gender,
          }}
        />
      ))}
    </div>
  </div>
);

export default ProfileArea;

ProfileArea.propTypes = {
  myPets: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    name: PropType.string,
    gender: PropType.string,
    color: PropType.string,
  })).isRequired,
};
