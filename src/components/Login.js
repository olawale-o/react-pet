import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  authInitialValues,
  authSchema,
  authModel,
  CustomInput,
} from '../forms';

const { loginInitialValues } = authInitialValues;
const { loginSchema } = authSchema;
const { login: { formField: { email, password } } } = authModel;

const Login = ({ onActive, isFocus, onLogin }) => {
  const onReset = (resetForm) => {
    if (!isFocus) {
      resetForm();
    }
    onActive();
  };

  const auth = async ({ email, password }) => {
    await onLogin({ email, password });
  };

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      onSubmit={auth}
    >
      {({
        handleReset,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <div className="login-container">
          <Form>
            <h1>Welcome back</h1>
            <div className="switch-buttons">
              <button type="button" className={`switch-btn ${!isFocus ? 'active' : ''}`}>Login</button>
              <button type="button" className={`switch-btn ${isFocus ? 'active' : ''}`} onClick={() => onReset(handleReset)}>Register</button>
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
              <CustomInput type="email" name={email.name} placeholder="Email" />
            </div>
            <div className="field">
              <CustomInput type="password" name={password.name} placeholder="Password" />
            </div>
            <button
              type="submit"
              className="auth-btn"
              disabled={isSubmitting || !(dirty && isValid)}
            >
              Log in
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;

Login.propTypes = {
  onActive: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};
