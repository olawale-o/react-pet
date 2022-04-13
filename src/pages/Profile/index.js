import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { ProfileSideBar } from '../../components';
import './style.scss';

const Profile = ({ user }) => {
  console.log('Profile');
  return (
    <div className="profile">
      <div className="content">
        <div className="main">
          <ProfileSideBar userId={user.id} />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(Profile);

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
