import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import PropType from 'prop-types';
import secondDog from '../../assets/images/dog2.jpg';

const MyPetCard = ({ pet: { name, offerCount, likeCount } }) => (
  <div className="pet__card">
    <div className="pet__image">
      <img src={secondDog} alt="dog" />
    </div>
    <div className="pet__content">
      <h6 className="name">{name}</h6>
      <div className="info">
        <span>Female</span>
        <span>Black</span>
      </div>
      <div className="interactions">
        <button type="button" className="btn">
          <span>
            <AiOutlineHeart size={20} />
          </span>
          <span>{likeCount}</span>
        </button>
        <button type="button" className="btn">
          <span>
            <MdOutlineLocalOffer />
          </span>
          <span>{offerCount}</span>
        </button>
      </div>
      <button type="button" className="details">Details</button>
    </div>
  </div>
);

export default MyPetCard;

MyPetCard.propTypes = {
  pet: PropType.shape({
    name: PropType.string,
    offerCount: PropType.number,
    likeCount: PropType.number,
  }).isRequired,
};
