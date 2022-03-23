import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import { authenticate } from '../../redux/auth/auth_async_action';
import { loginService, registerService } from '../../services';
import { useNavigator } from '../../helper';

const Auth = ({ onSubmit }) => {
  const { pushAndReplace } = useNavigator(true);
  const [isFocus, setIsFocus] = React.useState(true);
  const onActive = () => {
    setIsFocus(!isFocus);
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
          <Login onActive={onActive} isFocus={isFocus} onLogin={onLogin} />
          <SignUp onActive={onActive} isFocus={isFocus} onRegister={onRegister} />
        </div>
        <div className="overlay-container" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data, service, push) => dispatch(authenticate(data, service, push)),
});

export default connect(null, mapDispatchToProps)(Auth);

Auth.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
