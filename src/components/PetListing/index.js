import React from 'react';
import ListingPetCard from '../ListingPetCard';
import './style.scss';

const PetListing = () => {
  console.log('ListingPet');

  return (
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
  );
};

export default PetListing;
