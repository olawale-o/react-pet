import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import MyPetCard from '../MyPetCard';
import UpdatePetForm from '../Pet/UpdatePetForm';
import { DeleteModal } from '../Shared';
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
  const [toDelete, setToDelete] = React.useState(false);

  const onChoosePet = (petId) => {
    setChoosenPet(petId);
    setIndex(petId);
    toggleOverlayOpen(!overlayOpen);
  };
  const close = () => {
    toggleOverlayOpen(!overlayOpen);
    setChoosenPet(null);
    setToDelete(false);
  };
  const openModal = () => {
    fetchSelectedPet({ petId: index, userId }, getSelectedPetService);
    toggleModalOpen(!modalOpen);
    toggleOverlayOpen(!overlayOpen);
    setChoosenPet(null);
    document.body.style.overflow = 'hidden';
  };

  const handleUpdate = async (formData) => {
    await onSubmit(formData, updatePetService, userId);
  };

  const onPetDelete = (petId) => {
    console.log('delete', petId);
    setToDelete(!toDelete);
    setChoosenPet(null);
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
            onDelete={onPetDelete}
            pet={{
              id: pet.id,
              name: pet.name,
              offerCount: 2,
              likeCount: 5,
              color: pet.color,
              gender: pet.gender,
              image: pet.images[0].url,
            }}
          />
        ))}
      </div>
      {overlayOpen
        && (
          <div
            className={`overlay ${toDelete ? 'bg-dark' : 'bg-transparent'}`}
            aria-hidden="true"
            onClick={close}
          />
        )}
      <UpdatePetForm
        open={modalOpen}
        closePopUp={() => {
          document.body.removeAttribute('style');
          toggleModalOpen(!modalOpen);
        }}
        onSubmit={handleUpdate}
      />
      {toDelete && <DeleteModal />}
    </div>
  );
};

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
