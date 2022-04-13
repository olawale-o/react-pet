import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const ProfileSideBar = ({ userId }) => (
  <div className="profile__sidebar">
    <div className="container">
      <ul className="list">
        <li className="item">
          <Link to="/" className="nav__link">
            <span className="text">Notifications</span>
          </Link>
        </li>
        <li className="item">
          <Link to={`/${userId}/pets`} className="nav__link">
            <span className="text">Pets</span>
          </Link>
        </li>
        <li className="item">
          <Link to={`/${userId}/pets/new`} className="nav__link">
            <span className="text add">Add Pet</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default ProfileSideBar;

ProfileSideBar.propTypes = {
  userId: PropTypes.number.isRequired,
};
