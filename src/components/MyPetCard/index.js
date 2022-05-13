import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineEllipsis } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import PropType from 'prop-types';
import { titlelize, GENDER_ENUM } from '../../helper';
import { CustomToolTipPopUp, ToolTipButton, ToolTipItem } from '../Shared';
import './style.scss';
import BASE_URI from '../../constants';

const MyPetCard = ({
  petId,
  choosenPet,
  onChoosePet,
  openModal,
  modal,
  onDelete,
  showPhotos,
}) => {
  const actions = [
    {
      id: 1,
      text: 'Delete',
      func: () => onDelete(petId),
    },
    {
      id: 2,
      text: 'Edit',
      func: () => openModal(),
    },
    {
      id: 3,
      text: 'Photos',
      func: () => showPhotos(petId),
    },
  ];
  const pet = useSelector((state) => state.pet.myPets[String(petId)]);
  return (
    <div className="pet__card">
      {choosenPet === petId && !modal
        && (
          <CustomToolTipPopUp>
            {actions.map(({ id, text, func }) => (
              <ToolTipItem key={id}>
                <ToolTipButton
                  text={text}
                  action={func}
                />
              </ToolTipItem>
            ))}
          </CustomToolTipPopUp>
        )}
      <div className="pet__image">
        <button type="button" className="remove__btn" onClick={() => onChoosePet(petId)}>
          <span><AiOutlineEllipsis size={30} color="#fff" /></span>
        </button>
        <img src={`${BASE_URI}${pet.pic_url}`} alt="dog" />
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
            <span>5</span>
          </button>
          <button type="button" className="interaction__btn">
            <span>
              <MdOutlineLocalOffer />
            </span>
            <span>2</span>
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
  petId: PropType.number.isRequired,
  choosenPet: PropType.number,
  onChoosePet: PropType.func.isRequired,
  openModal: PropType.func.isRequired,
  modal: PropType.bool.isRequired,
  onDelete: PropType.func.isRequired,
  showPhotos: PropType.func.isRequired,
};
