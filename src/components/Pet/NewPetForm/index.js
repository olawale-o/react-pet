import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PropType from 'prop-types';
import './style.scss';
import { newPetInitialValues, newPetSchema, newPetModel } from '../../../forms';
import createPet from '../../../redux/pet/pet_async_action';
import PetForm from './PetForm';
import PetUploadForm from './PetUploadForm';
import { createDogService } from '../../../services';

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

const NewPetForm = ({ onSubmit }) => {
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
  }, actions) => {
    const formData = new FormData();
    formData.append('dog[name]', petName);
    formData.append('dog[weight]', petWeight);
    formData.append('dog[color]', petColor);
    formData.append('dog[gender]', petGender);
    formData.append('dog[breed_id]', 1);
    formData.append('dog[description]', petDescription);
    petImages.forEach((file) => formData.append('dog[images][]', file));
    if (isLastStep) {
      await onSubmit(formData, createDogService);
    } else {
      actions.setSubmitting(false);
      actions.setTouched({});
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="pet__form">
      <Formik
        initialValues={newPetInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data, service, push) => dispatch(createPet(data, service, push)),
});

NewPetForm.propTypes = {
  onSubmit: PropType.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NewPetForm);
