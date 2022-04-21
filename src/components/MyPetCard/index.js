import React from 'react';
import { AiOutlineHeart, AiOutlineEllipsis } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import PropType from 'prop-types';
import secondDog from '../../assets/images/dog2.jpg';
import { titlelize, GENDER_ENUM, useNavigator } from '../../helper';
import './style.scss';
import UpdatePetForm from '../Pet/UpdatePetForm';
import usePopUp from '../../composables';

const MyPetCard = ({
  pet: {
    id,
    name,
    offerCount,
    likeCount,
    gender,
    color,
  },
}) => {
  const { pushAndReplace } = useNavigator();
  const ref = React.useRef();
  const modalPetRef = React.useRef();
  const card = usePopUp(ref, false);
  const modal = usePopUp(modalPetRef, 0);
  return (
    <>
      <div className="pet__card">
        {card.isVisible
          && (
          <ul className="action__card" ref={ref}>
            <li className="action__card-item">
              <button
                type="button"
                className="action__btn"
                onClick={() => pushAndReplace('/listings')}
              >
                Delete
              </button>
            </li>
            <li className="action__card-item">
              <button
                type="button"
                className="action__btn"
                onClick={() => modal.setIsVisible(id)}
              >
                Edit
              </button>
            </li>
          </ul>
          )}
        <div className="pet__image">
          <button type="button" className="remove__btn" onClick={() => card.setIsVisible(!card.isVisible)}>
            <span><AiOutlineEllipsis size={30} color="#fff" /></span>
          </button>
          <img src={secondDog} alt="dog" />
        </div>
        <div className="pet__content">
          <h6 className="name">{titlelize(name)}</h6>
          <div className="info">
            <span>{GENDER_ENUM[gender]}</span>
            <span>{titlelize(color)}</span>
          </div>
          <div className="interactions">
            <button type="button" className="interaction__btn">
              <span>
                <AiOutlineHeart size={20} />
              </span>
              <span>{likeCount}</span>
            </button>
            <button type="button" className="interaction__btn">
              <span>
                <MdOutlineLocalOffer />
              </span>
              <span>{offerCount}</span>
            </button>
          </div>
          <button type="button" className="details">Details</button>
        </div>
      </div>
      <UpdatePetForm
        el={modalPetRef}
        selectedPetIndex={modal.isVisible}
      />
    </>
  );
};

export default MyPetCard;

MyPetCard.propTypes = {
  pet: PropType.shape({
    id: PropType.number,
    name: PropType.string,
    offerCount: PropType.number,
    likeCount: PropType.number,
    color: PropType.string,
    gender: PropType.string,
  }).isRequired,
};
