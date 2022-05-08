import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import MyPetCard from '../MyPetCard';
import UpdatePetForm from '../Pet/UpdatePetForm';
import { DeleteModal } from '../Shared';
import { updatePetService } from '../../services/pet';
// getSelectedPetService
import { getSelectedPet, updatePet } from '../../redux/pet/pet_async_action';
import { useNavigator } from '../../helper';

const ProfileArea = ({
  myPets,
  fetchSelectedPet,
  userId,
  onSubmit,
  pets,
}) => {
  const { pushAndReplace } = useNavigator();
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
    const pet = pets[index];
    fetchSelectedPet(pet);
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

  const onPetPhoto = (petId) => {
    pushAndReplace(`/${userId}/pets/${petId}/photos`);
  };

  return (
    <div className="profile__area">
      <div className="pets">
        {myPets.map((pet) => (
          <MyPetCard
            key={pet}
            choosenPet={choosenPet}
            setChoosenPet={setChoosenPet}
            onChoosePet={onChoosePet}
            openModal={openModal}
            modal={modalOpen}
            onDelete={onPetDelete}
            showPhotos={onPetPhoto}
            petId={pet}
          />
        ))}
      </div>
      {overlayOpen
        && (
          <div
            className={`overlay ${toDelete ? 'bg-dark z-index-2000' : 'bg-transparent'}`}
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
  pets: state.pet.myPets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSelectedPet: (petId) => dispatch(getSelectedPet(petId)),
  onSubmit: (formData, service, userId) => dispatch(updatePet(formData, service, userId)),
});

ProfileArea.defaultProps = {
  onSubmit: () => {},
  pets: {},
};

ProfileArea.propTypes = {
  myPets: PropType.arrayOf(PropType.number).isRequired,
  fetchSelectedPet: PropType.func.isRequired,
  userId: PropType.number.isRequired,
  onSubmit: PropType.func,
  pets: PropType.shape({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileArea);
