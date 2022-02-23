import React from 'react';
import ListingPetCard from '../ListingPetCard';
import Filter from '../Filter';
import './style.scss';

const PetListing = () => {
  console.log('ListingPet');

  return (
    <div className="listings">
      <Filter />
      <div className="listing__pet">
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
        <ListingPetCard />
      </div>
    </div>
  );
};

export default PetListing;
