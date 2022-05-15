import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineCamera } from 'react-icons/ai';
import { titlelize, GENDER_ENUM } from '../../helper';
import BASE_URI from '../../constants';
import './style.scss';

const ListingPetCard = ({ petId }) => {
  const pet = useSelector((state) => state.pet.allPets[String(petId)]);

  return (
    <div className="listing__dog">
      <div className="img">
        <img src={`${BASE_URI}${pet.pic_url}`} alt="dog" />
        <div className="media">
          <div className="camera">
            <span className="icon mx-2"><AiOutlineCamera size={15} aria-label="camera" /></span>
            <span>{pet.images.length}</span>
          </div>
        </div>
      </div>
      <div className="details">
        <h1>{titlelize(pet.name)}</h1>
        <div className="middle">
          <span className="for">BREEDER</span>
          <p>
            <span className="icon"><VscLocation size={15} aria-label="location" /></span>
            <span>Lagos</span>
          </p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor.
        </p>

        <div className="bottom">
          <span className="tag">{titlelize(pet.name)}</span>
          <div className="dot" />
          <span className="tag">{GENDER_ENUM[pet.gender]}</span>
        </div>
      </div>
      <div className="interaction">
        <span>$ 4000</span>
        <span className="icon rounded">
          <AiOutlineHeart size={15} color="#E9547C" aria-label="like" />
        </span>
      </div>
    </div>
  );
};

ListingPetCard.propTypes = {
  petId: PropTypes.number.isRequired,
};

export default ListingPetCard;
