import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  authInitialValues,
  authSchema,
  CustomInput,
  authModel,
} from '../forms';
import AuthFormHeader from './Shared';

const { registerInitialValues } = authInitialValues;
const { registerSchema } = authSchema;
const { register: { formField: { username, registerEmail, registerPassword } } } = authModel;

const SignUp = ({ onActive, isFocus, onRegister }) => {
  const onReset = (resetForm) => {
    if (isFocus) {
      resetForm();
    }
    onActive();
  };

  const auth = async ({ username, email, password }) => {
    await onRegister({ username, email, password });
  };
  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerSchema}
      onSubmit={auth}
    >
      {({
        handleReset,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <div className="signup-container">
          <Form>
            <AuthFormHeader
              title="Getting Started"
              isFocus={isFocus}
              onReset={() => onReset(handleReset)}
            />
            <div className="field">
              <CustomInput type="text" name={username.name} placeholder="Username" />
            </div>
            <div className="field">
              <CustomInput type="email" name={registerEmail.name} placeholder="Email" />
            </div>
            <div className="field">
              <CustomInput type="password" name={registerPassword.name} placeholder="Password" />
            </div>
            <button
              type="submit"
              className="button button-primary"
              disabled={isSubmitting || !(dirty && isValid)}
            >
              Create
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;

SignUp.propTypes = {
  onActive: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onRegister: PropTypes.func.isRequired,
};
