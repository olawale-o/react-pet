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

  const formFields = [
    {
      key: 'email',
      name: email.name,
      type: 'email',
      placeholder: 'Email',
    },
    {
      key: 'password',
      name: password.name,
      type: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={loginInitialValues}
      onSubmit={auth}
    >
      {({
        handleReset,
        isSubmitting,
        dirty,
        isValid,
      }) => (
        <div className="login-container">
          <Form>
            <AuthFormHeader
              title="Welcome Back"
              isFocus={isFocus}
              onReset={() => onReset(handleReset)}
            />
            {error && (typeof error !== 'object')
              && (
                <ul className="errors">
                  <li className="error">{error}</li>
                </ul>
              )}
            {formFields.map((field) => (
              <div className="field" key={field.key}>
                <CustomInput
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
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
  error: '' || {},
};

Login.propTypes = {
  onActive: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  clearError: PropTypes.func.isRequired,
};
