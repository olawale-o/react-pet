import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';
import PropType from 'prop-types';
import Photo from '../Photo';
import { setProfilePhoto } from '../../../redux/pet/pet_async_action';
import { setProfilePhotoService } from '../../../services';

const PhotoList = ({ photos, setProfilePhoto }) => {
  const { petId } = useParams();
  const [state, setState] = React.useState({
    choosenPhoto: 0,
    overlay: false,
    fullOverlay: false,
  });

  const makeProfilePhoto = (url) => {
    setState((prevState) => ({
      ...prevState,
      overlay: false,
      fullOverlay: false,
      choosenPhoto: 0,
    }));
    setProfilePhoto({ petId, photo: { url } }, setProfilePhotoService);
  };

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
          makeProfilePhoto={makeProfilePhoto}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProfilePhoto: (data, service) => dispatch(setProfilePhoto(data, service)),
});

export default connect(null, mapDispatchToProps)(PhotoList);

PhotoList.propTypes = {
  photos: PropType.arrayOf(PropType.number).isRequired,
  setProfilePhoto: PropType.func.isRequired,
};
