import React from 'react';
import PropTypes from 'prop-types';
import { PetListing, SideSearchPanel } from '../../components';

const Listings = ({
  petIds,
  prevPage,
  nextPage,
  paginate,
}) => (
  <>
    <SideSearchPanel />
    <PetListing
      petIds={petIds}
      prevPage={prevPage}
      nextPage={nextPage}
      paginate={paginate}
    />
  </>
);

Listings.defaultProps = {
  prevPage: undefined,
  nextPage: undefined,
};

Listings.propTypes = {
  petIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
  paginate: PropTypes.func.isRequired,
};
export default Listings;
