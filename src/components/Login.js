import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  authSchema,
  authInitialValues,
  authModel,
  CustomInput,
} from '../forms';
import { AuthFormHeader } from './Shared';

const { loginInitialValues } = authInitialValues;
const { loginSchema } = authSchema;
const { login: { formField: { email, password } } } = authModel;

const Login = ({
  onActive,
  isFocus,
  onLogin,
  error,
  clearError,
}) => {
  const onReset = (resetForm) => {
    if (!isFocus) {
      resetForm();
    }
    onActive();
    clearError();
  };

  const auth = async ({ email, password }) => {
    await onLogin({ email, password });
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={loginInitialValues}
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
            <AuthFormHeader
              title="Welcome Back"
              isFocus={isFocus}
              onReset={() => onReset(handleReset)}
            />
            <ul className="errors">
              <li className="error">{error}</li>
            </ul>
            <div className="field">
              <CustomInput type="email" name={email.name} placeholder="Email" />
            </div>
            <div className="field">
              <CustomInput type="password" name={password.name} placeholder="Password" />
            </div>
            <button
              type="submit"
              className="button button-primary"
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

Login.defaultProps = {
  error: '',
};

Login.propTypes = {
  onActive: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};
