import React from 'react';
import { AiOutlineHeart, AiOutlineEllipsis } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import PropType from 'prop-types';
import secondDog from '../../assets/images/dog2.jpg';
import { titlelize, GENDER_ENUM } from '../../helper';
import PetToolTipPopUp from '../Shared/PetToolTipPopUp';
import './style.scss';

const MyPetCard = ({
  pet,
  choosenPet,
  onChoosePet,
  openModal,
  modal,
  onDelete,
}) => {
  console.log('sungba');
  return (
    <div className="pet__card">
      {choosenPet === pet.id && !modal
        && (
          <PetToolTipPopUp
            action={() => openModal()}
            deleteAction={() => onDelete(pet.id)}
          />
        )}
      <div className="pet__image">
        <button type="button" className="remove__btn" onClick={() => onChoosePet(pet.id)}>
          <span><AiOutlineEllipsis size={30} color="#fff" /></span>
        </button>
        <img src={secondDog} alt="dog" />
      </div>
      <div className="pet__content">
        <h6 className="name">{titlelize(pet.name)}</h6>
        <div className="info">
          <span>{GENDER_ENUM[pet.gender]}</span>
          <span>{titlelize(pet.color)}</span>
        </div>
        <div className="interactions">
          <button type="button" className="interaction__btn">
            <span>
              <AiOutlineHeart size={20} />
            </span>
            <span>{pet.likeCount}</span>
          </button>
          <button type="button" className="interaction__btn">
            <span>
              <MdOutlineLocalOffer />
            </span>
            <span>{pet.offerCount}</span>
          </button>
        </div>
        <button type="button" className="details">Details</button>
      </div>
    </div>
  );
};

export default MyPetCard;

MyPetCard.defaultProps = {
  choosenPet: null,
};

MyPetCard.propTypes = {
  pet: PropType.shape({
    id: PropType.number,
    name: PropType.string,
    offerCount: PropType.number,
    likeCount: PropType.number,
    color: PropType.string,
    gender: PropType.string,
  }).isRequired,
  choosenPet: PropType.number,
  onChoosePet: PropType.func.isRequired,
  openModal: PropType.func.isRequired,
  modal: PropType.bool.isRequired,
  onDelete: PropType.func.isRequired,
};
