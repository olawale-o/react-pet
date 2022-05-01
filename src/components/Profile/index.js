import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import MyPetCard from '../MyPetCard';
import UpdatePetForm from '../Pet/UpdatePetForm';
import { getSelectedPetService, updatePetService } from '../../services/pet';
import { getSelectedPet, updatePet } from '../../redux/pet/pet_async_action';

const ProfileArea = ({
  myPets,
  fetchSelectedPet,
  userId,
  onSubmit,
}) => {
  const [choosenPet, setChoosenPet] = React.useState(null);
  const [overlayOpen, toggleOverlayOpen] = React.useState(false);
  const [modalOpen, toggleModalOpen] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const onChoosePet = (petId) => {
    fetchSelectedPet({ petId, userId }, getSelectedPetService);
    setChoosenPet(petId);
    setIndex(petId);
    toggleOverlayOpen(!overlayOpen);
  };
  const close = () => {
    toggleOverlayOpen(!overlayOpen);
    setChoosenPet(null);
  };
  const openModal = () => {
    toggleModalOpen(!modalOpen);
    toggleOverlayOpen(!overlayOpen);
    setChoosenPet(null);
  };
  const handleUpdate = async (formData) => {
    await onSubmit(formData, updatePetService, userId);
  };
  return (
    <div className="profile__area">
      <div className="pets">
        {myPets.map((pet) => (
          <MyPetCard
            key={pet.id}
            choosenPet={choosenPet}
            setChoosenPet={setChoosenPet}
            onChoosePet={onChoosePet}
            openModal={openModal}
            modal={modalOpen}
            pet={{
              id: pet.id,
              name: pet.name,
              offerCount: 2,
              likeCount: 5,
              color: pet.color,
              gender: pet.gender,
            }}
          />
        ))}
      </div>
      {overlayOpen
        && (
          <div className="overlay" aria-hidden="true" onClick={close} />
        )}
      <UpdatePetForm
        id={index}
        open={modalOpen}
        closePopUp={() => toggleModalOpen(!modalOpen)}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

// export default ProfileArea;

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSelectedPet: (credential, service) => dispatch(getSelectedPet(credential, service)),
  onSubmit: (formData, service, userId) => dispatch(updatePet(formData, service, userId)),
});

ProfileArea.defaultProps = {
  onSubmit: () => {},
};

ProfileArea.propTypes = {
  myPets: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    name: PropType.string,
    gender: PropType.string,
    color: PropType.string,
  })).isRequired,
  fetchSelectedPet: PropType.func.isRequired,
  userId: PropType.number.isRequired,
  onSubmit: PropType.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileArea);
