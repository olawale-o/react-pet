import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PropType from 'prop-types';
import './style.scss';
import { newPetInitialValues, newPetSchema, newPetModel } from '../../../forms';
import { createPet } from '../../../redux/pet/pet_async_action';
import PetForm from '../PetForm';
import PetUploadForm from './PetUploadForm';
import { createDogService } from '../../../services';
import { useNavigator } from '../../../helper';
import { setError } from '../../../redux/global';

const { formField } = newPetModel;

const renderForm = (step, setFieldValue) => {
  switch (step) {
    case 0:
      return <PetForm formField={formField} />;
    case 1:
      return <PetUploadForm formField={formField} setFieldValue={setFieldValue} />;
    default:
      return <div>Form Not found</div>;
  }
};

const NewPetForm = ({
  onSubmit,
  userId,
  breeds,
  error,
  clearError,
}) => {
  const { pushAndReplace } = useNavigator(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = newPetSchema[activeStep];
  const steps = ['Bio', 'Images'];
  const isLastStep = activeStep === steps.length - 1;
  const handleSubmit = async ({
    petName,
    petWeight,
    petColor,
    petGender,
    petDescription,
    petImages,
    petBreed,
  }, actions) => {
    const formData = new FormData();
    formData.append('dog[name]', petName);
    formData.append('dog[weight]', petWeight);
    formData.append('dog[color]', petColor);
    formData.append('dog[gender]', petGender);
    formData.append('dog[breed_id]', (breeds.find((obj) => obj.name === petBreed)).id);
    formData.append('dog[description]', petDescription);
    petImages.forEach((file) => formData.append('dog[images][]', file));
    if (isLastStep) {
      clearError();
      await onSubmit(formData, createDogService, pushAndReplace, userId);
    } else {
      actions.setSubmitting(false);
      actions.setTouched({});
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="pet__form">
      <Formik
        validationSchema={currentValidationSchema}
        initialValues={newPetInitialValues}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <ul className="errors">
              {error
                && Object.values(error).map((err) => (
                  <li className="error" key={err}>{err}</li>
                ))}
            </ul>
            {renderForm(activeStep, setFieldValue)}
            <div className="actions">
              {activeStep !== 0 && (
                <button
                  type="submit"
                  className="btn btn__secondary"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </button>
              )}
              <button type="submit" className="btn btn__primary">
                {isLastStep ? 'Create' : 'Next'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  breeds: state.pet.breeds,
  error: state.global.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data, service, push, userId) => dispatch(createPet(data, service, push, userId)),
  clearError: () => dispatch(setError('')),
});

NewPetForm.defaultProps = {
  error: '' || {},
};

NewPetForm.propTypes = {
  onSubmit: PropType.func.isRequired,
  userId: PropType.number.isRequired,
  breeds: PropType.arrayOf(PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
  })).isRequired,
  error: PropType.oneOfType([
    PropType.string,
    PropType.shape({}),
  ]),
  clearError: PropType.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPetForm);
