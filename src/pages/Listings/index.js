import React from 'react';
import PropTypes from 'prop-types';
import { PetListing, SideSearchPanel } from '../../components';

const Listings = ({ pets }) => (
  <>
    <SideSearchPanel />
    <PetListing pets={pets} />
  </>
);

Listings.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default Listings;
