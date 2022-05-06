import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
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
          <ul className="option__list">
            <li className="option">
              <button type="button" className="option__button bookmark">
                <span>
                  <AiOutlineMenu size={30} color="#000" />
                </span>
              </button>
            </li>
          </ul>
          <ul className="nav__list lg">
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
