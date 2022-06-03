import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import { authenticate } from '../../redux/auth/auth_async_action';
import { loginService, registerService } from '../../services';
import { useNavigator } from '../../helper';
import { setError } from '../../redux/global';

const Auth = ({ error, onSubmit, clearError }) => {
  const { pushAndReplace } = useNavigator(true);
  const [isFocus, setIsFocus] = React.useState(true);
  const onActive = () => {
    setIsFocus(!isFocus);
    clearError();
  };

  const onLogin = async ({ email, password }) => {
    await onSubmit({ user: { email, password } }, loginService, pushAndReplace);
  };

  const onRegister = async ({ username, email, password }) => {
    await onSubmit({
      user: {
        username,
        email,
        password,
      },
    }, registerService, pushAndReplace);
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className={`form-container ${isFocus ? 'slide' : ''}`}>
          <Login
            onActive={onActive}
            isFocus={isFocus}
            onLogin={onLogin}
            error={error}
            clearError={clearError}
          />
          <SignUp onActive={onActive} isFocus={isFocus} onRegister={onRegister} />
        </div>
        <div className="overlay-container" />
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  error: state.global.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data, service, push) => dispatch(authenticate(data, service, push)),
  clearError: () => dispatch(setError('')),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Auth);

Auth.defaultProps = {
  error: '',
};

Auth.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};
