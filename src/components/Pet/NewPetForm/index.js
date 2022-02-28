import { Formik, Form } from 'formik';
import './style.scss';
import { newPetInitialValues, newPetSchema, newPetModel } from '../../../forms';
import PetForm from './PetForm';

const { formField } = newPetModel;

const renderForm = () => (
  <PetForm formField={formField} />
);

const NewPetForm = () => {
  console.log('new pet form');
  return (
    <div className="pet__form">
      <Formik
        initialValues={newPetInitialValues}
        validationSchema={newPetSchema}
        handleSubmit={() => {}}
      >
        {() => (
          <Form>
            {renderForm()}
            <div className="actions">
              <button type="submit" className="btn btn--primary">Next</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPetForm;
