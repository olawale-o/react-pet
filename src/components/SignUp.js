import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  authSchema,
  authInitialValues,
  CustomInput,
  authModel,
} from '../forms';
import { AuthFormHeader } from './Shared';

const { registerInitialValues } = authInitialValues;
const { registerSchema } = authSchema;
const { register: { formField: { username, registerEmail, registerPassword } } } = authModel;

const SignUp = ({
  onActive,
  isFocus,
  onRegister,
  error,
  clearError,
}) => {
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
      validationSchema={registerSchema}
      initialValues={registerInitialValues}
      onSubmit={auth}
    >
      {({
        handleReset,
        isSubmitting,
        dirty,
        isValid,
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
              {error && (typeof error === 'object')
                && (
                  <ul className="errors">
                    {'username' in error && (
                      error.username.map((e) => (
                        <li className="error" key={e}>{e}</li>
                      ))
                    )}
                  </ul>
                )}
            </div>
            <div className="field">
              <CustomInput type="email" name={registerEmail.name} placeholder="Email" />
              {error && (typeof error === 'object')
                && (
                  <ul className="errors">
                    {'email' in error && (
                      error.email.map((e) => (
                        <li className="error" key={e}>{`Email ${e}`}</li>
                      ))
                    )}
                  </ul>
                )}
            </div>
            <div className="field">
              <CustomInput type="password" name={registerPassword.name} placeholder="Password" />
              {error && (typeof error === 'object')
                && (
                  <ul className="errors">
                    {'password' in error && (
                      error.password.map((e) => (
                        <li className="error" key={e}>{`Password ${e}`}</li>
                      ))
                    )}
                  </ul>
                )}
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

SignUp.defaultProps = {
  error: '' || {},
};

SignUp.propTypes = {
  onActive: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onRegister: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  clearError: PropTypes.func.isRequired,
};
