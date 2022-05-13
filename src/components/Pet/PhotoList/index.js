import React from 'react';
import './style.scss';
import PropType from 'prop-types';
import Photo from '../Photo';

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
