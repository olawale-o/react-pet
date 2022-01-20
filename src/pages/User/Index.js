import React from 'react';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

const Auth = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  const onActive = () => {
    setIsFocus(!isFocus);
  };
  return (
    <div className="auth-container">
      <div className="container">
        <div className={`form-container ${isFocus ? 'slide' : ''}`}>
          <Login onActive={onActive} isFocus={isFocus} />
          <SignUp onActive={onActive} isFocus={isFocus} />
        </div>
        <div className="overlay-container" />
      </div>
    </div>
  );
};

export default Auth;
