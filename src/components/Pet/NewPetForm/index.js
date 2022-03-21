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

const renderForm = (step) => {
  switch (step) {
    case 0:
      return <PetForm formField={formField} />;
    case 1:
      return <PetUploadForm formField={formField} />;
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
  }, actions) => {
    if (isLastStep) {
      await onSubmit({
        dog: {
          name: petName,
          weight: petWeight,
          color: petColor,
          gender: petGender,
        },
      }, createDogService);
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
        {() => (
          <Form>
            {renderForm(activeStep)}
            <div className="actions">
              {activeStep !== 0 && (<button type="submit" className="btn btn--primary">Back</button>)}
              <button type="submit" className="btn btn--primary">
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
