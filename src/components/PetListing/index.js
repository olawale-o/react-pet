import React from 'react';
import HomeContext from '../../context/HomeContext';
import ListingPetCard from '../ListingPetCard';
import Filter from '../Filter';
import './style.scss';

const PetListing = () => {
  console.log('petlisting');
  return (
    <HomeContext.Consumer>
      {({
        prevPage,
        nextPage,
        paginate,
        petIds,
      }) => (
        <div className="listings">
          <Filter />
          <div className="listing__pet">
            {petIds.map((petId) => (
              <ListingPetCard key={petId} petId={petId} />
            ))}
            <div className="pagination">
              <div className="pagination__buttons">
                <button
                  type="button"
                  title="prev"
                  onClick={() => paginate(prevPage)}
                  className="button pagination__button prev"
                  disabled={prevPage === null || prevPage === undefined}
                >
                  Previous
                </button>
                <button
                  type="button"
                  title="next"
                  onClick={() => paginate(nextPage)}
                  className="button pagination__button next"
                  disabled={nextPage === null || nextPage === undefined}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </HomeContext.Consumer>
  );
};

export default PetListing;
