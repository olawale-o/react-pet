import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PropType from 'prop-types';
import './style.scss';
import { newPetInitialValues, newPetSchema, newPetModel } from '../../../forms';
import createPet from '../../../redux/pet/pet_async_action';
import PetForm from './PetForm';
import { createDogService } from '../../../services';

const { formField } = newPetModel;

const renderForm = () => (
  <PetForm formField={formField} />
);

const NewPetForm = ({ onSubmit }) => {
  const handleSubmit = async ({
    petName,
    petWeight,
    petColor,
    petGender,
  }) => {
    await onSubmit({
      dog: {
        name: petName,
        weight: petWeight,
        color: petColor,
        gender: petGender,
      },
    }, createDogService);
  };

  return (
    <div className="pet__form">
      <Formik
        initialValues={newPetInitialValues}
        validationSchema={newPetSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            {renderForm()}
            <div className="actions">
              <button type="submit" className="btn btn--primary">Next</button>
            </div>
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
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
