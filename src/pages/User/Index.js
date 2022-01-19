import React from 'react';

const Auth = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  const onActive = () => {
    setIsFocus(!isFocus);
  };
  return (
    <div className="auth-container">
      <div className="container">
        <div className={`form-container ${isFocus ? 'slide' : ''}`}>
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
          <div className="signup-container">
            <form>
              <h1>Getting Started</h1>
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
                <input type="text" placeholder="Username" className="input" />
              </div>
              <div className="field">
                <input type="text" placeholder="Email" className="input" />
              </div>
              <div className="field">
                <input type="text" placeholder="Password" className="input" />
              </div>
              <button type="button" className="auth-btn">Create</button>
            </form>
          </div>
        </div>
        <div className="overlay-container" />
      </div>
    </div>
  );
};

export default Auth;
