import React from 'react';
import { AiOutlineHeart, AiOutlineEllipsis } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import PropType from 'prop-types';
import secondDog from '../../assets/images/dog2.jpg';
import { titlelize, GENDER_ENUM, useNavigator } from '../../helper';
import './style.scss';
import { PetUpdateForm } from '../Shared';

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef();
  const modalPetRef = React.useRef();
  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    // Cleanup the event listener
    return () => document.removeEventListener('click', checkIfClickedOutside);
  }, [isOpen]);

  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (index && modalPetRef.current && !modalPetRef.current.contains(e.target)) {
        setIndex(0);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => document.removeEventListener('click', checkIfClickedOutside);
  }, [index]);
  return (
    <>
      <div className="pet__card">
        {isOpen
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
                onClick={() => setIndex(id)}
              >
                Edit
              </button>
            </li>
          </ul>
          )}
        <div className="pet__image">
          <button type="button" className="remove__btn" onClick={() => setIsOpen(!isOpen)}>
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
      <PetUpdateForm
        el={modalPetRef}
        selectedPetIndex={index}
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
