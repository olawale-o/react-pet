import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Formik, Form } from 'formik';
import {
  newPetSchema,
  newPetModel,
  newPetInitialValues,
} from '../../../forms';
import PetForm from '../PetForm';

const {
  formField: {
    petName,
    petWeight,
    petColor,
    petBreed,
    petDescription,
    petGender,
  },
} = newPetModel;

const UpdatePetForm = ({
  pet,
  open,
  closePopUp,
  loading,
  breeds,
  onSubmit,
}) => {
  const currentValidationSchema = newPetSchema[0];
  let initialValues = null;
  if (pet) {
    initialValues = {
      [petName.name]: pet.name,
      [petWeight.name]: pet.weight,
      [petColor.name]: pet.color,
      [petBreed.name]: pet.breed,
      [petDescription.name]: pet.description,
      [petGender.name]: pet.gender,
    };
  } else {
    initialValues = newPetInitialValues;
  }

  if (!open) {
    return null;
  }

  const handleSubmit = async ({
    petName,
    petWeight,
    petColor,
    petGender,
    petDescription,
    petBreed,
  }) => {
    const credentials = {
      dog: {
        id: pet.id,
        name: petName,
        weight: petWeight,
        color: petColor,
        description: petDescription,
        gender: petGender,
        breed_id: (breeds.find((obj) => obj.name === petBreed)).id,
      },
    };
    await onSubmit(credentials);
    closePopUp();
  };

  return (
    ReactDOM.createPortal(
      <>
        <div
          className="modal"
          aria-hidden="true"
          onClick={() => {
            closePopUp();
          }}
        >
          {loading && <div className="loading" />}
          {!loading
            && (
              <div className="modal__body" aria-hidden="true" onClick={(e) => e.stopPropagation()}>
                <div className="pet__form w-100">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={currentValidationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                  >
                    {() => (
                      <Form>
                        <PetForm
                          formField={{
                            petName,
                            petWeight,
                            petColor,
                            petBreed,
                            petDescription,
                            petGender,
                          }}
                        />
                        <div className="actions">
                          <button
                            type="submit"
                            className="btn btn__primary"
                          >
                            Update
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
        </div>
      </>,
      document.body,
    )
  );
};

const mapStateToProps = (state) => ({
  pet: state.pet.selectedPet,
  loading: state.pet.loading,
  breeds: state.pet.breeds,
});

export default connect(mapStateToProps, null)(UpdatePetForm);

UpdatePetForm.defaultProps = {
  pet: {},
  breeds: [],
};

UpdatePetForm.propTypes = {
  closePopUp: PropType.func.isRequired,
  open: PropType.bool.isRequired,
  pet: PropType.shape({
    id: PropType.number,
    name: PropType.string,
  }),
  loading: PropType.bool.isRequired,
  breeds: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    name: PropType.string,
  })),
  onSubmit: PropType.func.isRequired,
};
