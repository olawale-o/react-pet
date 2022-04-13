import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './style.scss';

const Navbar = () => (
  <AuthContext.Consumer>
    {({ user }) => (
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/" className="link logo_link">Paws</Link>
          </div>
          <ul className="nav__list">
            {!user && (
              <li className="nav__item">
                <Link to="/" type="button" className="btn__link btn-login">Login</Link>
              </li>
            )}
            {user && (
              <li className="nav__item">
                <Link to="/" type="button" className="btn__link btn-login">Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )}
  </AuthContext.Consumer>
);

export default Navbar;
