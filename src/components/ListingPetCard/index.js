import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link className="link-overlay" to={`listings/${pet.id}`}>
        {' '}
      </Link>
      <div className="inner">
        <div className="img">
          <img src={`${BASE_URI}${pet.pic_url}`} alt="dog" title={pet.name} />
          <div className="media">
            <div className="camera">
              <span className="icon mx-2" title="media">
                <AiOutlineCamera size={20} aria-label="camera" title="media" />
              </span>
              <span>{pet.images.length}</span>
            </div>
          </div>
        </div>
        <div className="details">
          <h1>
            <span className="pet_name">
              {titlelize(pet.name)}
            </span>
            {' '}
            <Link className="owner_name" to="/#">
              @
              {titlelize(pet.owner)}
            </Link>
          </h1>
          <div className="middle">
            <span className="for">BREEDER</span>
            <p>
              <span className="icon">
                <VscLocation size={15} aria-label="location" />
              </span>
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
          <button type="button" className="interaction__btn" title="like" onClick={() => console.log('cliked')}>
            <span className="icon" title="like">
              <AiOutlineHeart size={20} color="#E9547C" aria-label="like" title="like" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

ListingPetCard.propTypes = {
  petId: PropTypes.number.isRequired,
};

export default ListingPetCard;
