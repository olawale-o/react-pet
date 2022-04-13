import PropTypes from 'prop-types';

const AuthFormHeader = ({ title, isFocus, onReset }) => (
  <>
    <h1>{title}</h1>
    <div className="switch-buttons">
      <button
        type="button"
        className="button button-outline"
        disabled={!isFocus}
        onClick={onReset}
      >
        Login
      </button>
      <button
        type="button"
        className="button button-outline"
        disabled={isFocus}
        onClick={onReset}
      >
        Register
      </button>
    </div>
    <div className="continue-with">
      <button type="button" className="button button-social google w-100">Google</button>
      <button type="button" className="button button-social facebook w-100">Facebook</button>
    </div>
    <div className="or">
      <span className="left" />
      <span className="text">or</span>
      <span className="right" />
    </div>
  </>
);

export default AuthFormHeader;

AuthFormHeader.propTypes = {
  isFocus: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
