import React from 'react';
import PropTypes from 'prop-types';
import ListingPetCard from '../ListingPetCard';
import Filter from '../Filter';
import './style.scss';

const PetListing = ({ pets }) => {
  console.log('ListingPet');

  return (
    <div className="listings">
      <Filter />
      <div className="listing__pet">
        {pets.map((pet) => (
          <ListingPetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

PetListing.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};
export default PetListing;
