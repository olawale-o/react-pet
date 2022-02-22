import React from 'react';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineCamera } from 'react-icons/ai';
import './style.scss';

const ListingPetCard = () => {
  console.log('Dogs');

  return (
    <div className="listing__dog">
      <div className="img">
        <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" alt="dog" />
        <div className="media">
          <div className="camera">
            <span className="icon mx-2"><AiOutlineCamera size={15} aria-label="camera" /></span>
            <span>2</span>
          </div>
        </div>
      </div>
      <div className="details">
        <h1>Doggokk</h1>
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
          <span className="tag">Bullmastiff</span>
          <div className="dot" />
          <span className="tag">Female</span>
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

export default ListingPetCard;
