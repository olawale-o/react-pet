import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { getSelectedPetService } from '../../../services/pet';
import { getSelectedPet } from '../../../redux/pet/pet_async_action';

const UpdatePetForm = ({
  id,
  pet,
  fetchSelectePet,
  userId,
  open,
  closePopUp,
  loading,
}) => {
  if (!open) {
    return null;
  }
  console.log(pet);
  React.useEffect(() => {
    if (id) {
      fetchSelectePet({ petId: id, userId }, getSelectedPetService);
    }
  }, [id]);
  return (
    ReactDOM.createPortal(
      <>
        <div className="modal" onClick={closePopUp} aria-hidden="true" />
        {loading && <div className="loading">Loading...</div>}
        {!loading
          && (
            <div className="modal__body">
              Modal
              {id}
            </div>
          )}
      </>,
      document.body,
    )
  );
};

const mapStateToProps = (state) => ({
  pet: state.pet.selectedPet,
  userId: state.auth.user.id,
  loading: state.global.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSelectePet: (credential, service) => dispatch(getSelectedPet(credential, service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePetForm);

UpdatePetForm.defaultProps = {
  pet: {},
};

UpdatePetForm.propTypes = {
  closePopUp: PropType.func.isRequired,
  open: PropType.bool.isRequired,
  id: PropType.number.isRequired,
  userId: PropType.number.isRequired,
  pet: PropType.shape({
    id: PropType.number,
  }),
  fetchSelectePet: PropType.func.isRequired,
  loading: PropType.bool.isRequired,
};
