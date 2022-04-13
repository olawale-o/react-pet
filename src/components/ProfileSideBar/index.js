import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const ProfileSideBar = ({ userId }) => (
  <div className="profile__sidebar">
    <nav className="nav-container">
      <ul className="nav_list">
        <li className="nav_item">
          <Link to="/" className="link nav_link">
            <span className="link_text">Notifications</span>
          </Link>
        </li>
        <li className="nav_item">
          <Link to={`/${userId}/pets`} className="link nav_link">
            <span className="link_text">Pets</span>
          </Link>
        </li>
        <li className="nav_item">
          <Link to={`/${userId}/pets/new`} className="link nav_link">
            <span className="link_text primary_link-text d-block text-center">Add Pet</span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default ProfileSideBar;

ProfileSideBar.propTypes = {
  userId: PropTypes.number.isRequired,
};
