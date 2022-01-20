import PropTypes from 'prop-types';

const Login = ({ onActive, isFocus }) => {
  console.log('Login');
  return (
    <div className="login-container">
      <form>
        <h1>Welcome back</h1>
        <div className="switch-buttons">
          <button type="button" className={`switch-btn ${!isFocus ? 'active' : ''}`} onClick={onActive}>Login</button>
          <button type="button" className={`switch-btn ${isFocus ? 'active' : ''}`} onClick={onActive}>Register</button>
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
          <input type="text" placeholder="Email" className="input" />
        </div>
        <div className="field">
          <input type="text" placeholder="Password" className="input" />
        </div>
        <button type="button" className="auth-btn">Log in</button>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  onActive: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
