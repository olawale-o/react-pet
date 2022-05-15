import React from 'react';
import PropTypes from 'prop-types';
import { PetListing, SideSearchPanel } from '../../components';

const Listings = ({ petIds }) => (
  <>
    <SideSearchPanel />
    <PetListing petIds={petIds} />
  </>
);

Listings.propTypes = {
  petIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Listings;
