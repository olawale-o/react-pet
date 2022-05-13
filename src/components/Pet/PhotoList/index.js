import React from 'react';
import './style.scss';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import { HiPencil } from 'react-icons/hi';
import BASE_URI from '../../../constants';
import { CustomToolTipPopUp, ToolTipItem, ToolTipButton } from '../../Shared';

const Photo = ({
  photoId,
  stateProps,
  setPhoto,
  close,
}) => {
  const photo = useSelector((state) => state.pet.photos[String(photoId)]);
  const actions = [
    {
      id: 1,
      text: 'Delete',
      func: () => {},
    },
    {
      id: 2,
      text: 'Make profile photo',
      func: () => {},
    },
  ];
  return (
    <div className="photo">
      {stateProps.choosenPhoto === photoId
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
      <img src={`${BASE_URI}${photo.url}`} alt="dog" />
      <button type="button" className="photo__btn" onClick={() => setPhoto(photoId)}>
        <span><HiPencil size={30} color="#fff" /></span>
      </button>
      {stateProps.overlay
        && (
          <div
            className={`overlay ${stateProps.fullOverlay ? 'bg-dark z-index-2000' : 'bg-transparent'}`}
            aria-hidden="true"
            onClick={close}
          />
        )}
    </div>
  );
};

Photo.propTypes = {
  photoId: PropType.number.isRequired,
  setPhoto: PropType.func.isRequired,
  close: PropType.func.isRequired,
  stateProps: PropType.shape({
    choosenPhoto: PropType.number,
    overlay: PropType.bool,
    fullOverlay: PropType.bool,
  }).isRequired,
};

const PhotoList = ({ photos }) => {
  const [state, setState] = React.useState({
    choosenPhoto: 0,
    overlay: false,
    fullOverlay: false,
  });

  return (
    <div className="photo__list">
      {photos.map((photo) => (
        <Photo
          key={photo}
          photoId={photo}
          stateProps={state}
          setPhoto={(photoId) => {
            setState((prevState) => ({
              ...prevState,
              choosenPhoto: photoId,
              overlay: true,
            }));
          }}
          close={() => {
            setState((prevState) => ({
              ...prevState,
              overlay: false,
              fullOverlay: false,
              choosenPhoto: 0,
            }));
          }}
        />
      ))}
    </div>
  );
};

export default PhotoList;

PhotoList.propTypes = {
  photos: PropType.arrayOf(PropType.number).isRequired,
};
