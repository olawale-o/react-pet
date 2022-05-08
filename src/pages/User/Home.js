import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Listings from '../Listings';
import './Home.scss';
import { allDogService } from '../../services';
import { getAllPets } from '../../redux/pet/pet_async_action';

const Home = ({ pets, fetchPets }) => {
  React.useEffect(() => {
    fetchPets(allDogService);
  }, []);
  if (!pets) return null;
  return (
    <div className="home">
      <div className="content">
        <div className="main">
          <Listings pets={pets} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pets: state.pet.allPets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPets: (service) => dispatch(getAllPets(service)),
});

Home.defaultProps = {
  pets: [],
};

Home.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  fetchPets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
