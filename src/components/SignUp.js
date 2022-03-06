import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  authInitialValues,
  authSchema,
  CustomInput,
  authModel,
} from '../forms';

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
    console.log({ username, email, password });
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
            <h1>Getting Started</h1>
            <div className="switch-buttons">
              <button type="button" className={`switch-btn ${!isFocus ? 'active' : ''}`} onClick={() => onReset(handleReset)}>Login</button>
              <button type="button" className={`switch-btn ${isFocus ? 'active' : ''}`}>Register</button>
            </div>
            <div className="continue-with">
              <button type="button" className="google">Google</button>
              <button type="button" className="facebook">Facebook</button>
            </div>
            <div className="or">
              <span className="left" />
              <span className="text">or</span>
              <span className="right" />
            </div>
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
              className="auth-btn"
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
