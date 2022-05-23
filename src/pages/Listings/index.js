import React from 'react';
import PropTypes from 'prop-types';
import { PetListing, SideSearchPanel } from '../../components';

const Listings = ({ setPawColor, onColorSelected }) => (
  <>
    <SideSearchPanel
      setPawColor={setPawColor}
      onColorSelected={onColorSelected}
    />
    <PetListing />
  </>
);

export default Listings;

Listings.propTypes = {
  setPawColor: PropTypes.func.isRequired,
  onColorSelected: PropTypes.func.isRequired,
};
