import React from 'react';
import PropTypes from 'prop-types';
import ListingPetCard from '../ListingPetCard';
import Filter from '../Filter';
import './style.scss';

const PetListing = ({ petIds }) => {
  console.log('ListingPet');

  return (
    <div className="listings">
      <Filter />
      <div className="listing__pet">
        {petIds.map((petId) => (
          <ListingPetCard key={petId} petId={petId} />
        ))}
        <div className="pagination">
          <button type="button" title="prev" onClick={() => {}} className="button pagination__button prev">Previous</button>
          <button type="button" title="next" onClick={() => {}} className="button pagination__button next">Next</button>
        </div>
      </div>
    </div>
  );
};

PetListing.propTypes = {
  petIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default PetListing;
