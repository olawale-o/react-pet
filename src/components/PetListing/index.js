import React from 'react';
import HomeContext from '../../context/HomeContext';
import ListingPetCard from '../ListingPetCard';
import Filter from '../Filter';
import './style.scss';

const PetListing = () => {
  console.log('PetListing');
  return (
    <HomeContext.Consumer>
      {({
        prevPageNo,
        nextPageNo,
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
                  onClick={() => paginate(prevPageNo, 'prev')}
                  className="button pagination__button prev"
                  disabled={prevPageNo === null || prevPageNo === undefined || prevPageNo === 0}
                >
                  Previous
                </button>
                <button
                  type="button"
                  title="next"
                  onClick={() => paginate(nextPageNo, 'next')}
                  className="button pagination__button next"
                  disabled={nextPageNo === null || nextPageNo === undefined || nextPageNo === 0}
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
