import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PetListing, SideSearchPanel } from '../../components';
import { getAllPets } from '../../redux/pet/pet_async_action';
import { allDogService } from '../../services';

const Listings = ({ pets, fetchPets }) => {
  React.useEffect(() => {
    fetchPets(allDogService);
  }, []);
  if (!pets) return null;
  return (
    <>
      <SideSearchPanel />
      <PetListing pets={pets} />
    </>
  );
};

const mapStateToProps = (state) => ({
  pets: state.pet.allPets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPets: (service) => dispatch(getAllPets(service)),
});

Listings.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  fetchPets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
