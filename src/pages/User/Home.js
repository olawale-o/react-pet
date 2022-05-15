import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Listings from '../Listings';
import './Home.scss';
import { allDogService } from '../../services';
import { getAllPets } from '../../redux/pet/pet_async_action';

const Home = ({ petIds, fetchPets }) => {
  React.useEffect(() => {
    fetchPets(allDogService);
  }, []);
  if (!petIds) return null;
  return (
    <div className="home">
      <div className="content">
        <div className="main">
          <Listings petIds={petIds} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  petIds: state.pet.petIds,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPets: (service) => dispatch(getAllPets(service)),
});

Home.defaultProps = {
  petIds: [],
};

Home.propTypes = {
  petIds: PropTypes.arrayOf(PropTypes.number),
  fetchPets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
