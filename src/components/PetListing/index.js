import React from 'react';
import PropTypes from 'prop-types';
import ListingPetCard from '../ListingPetCard';
import Filter from '../Filter';
import './style.scss';

const PetListing = ({
  petIds,
  prevPage,
  nextPage,
  paginate,
}) => {
  console.log(prevPage, nextPage);
  return (
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
  );
};

PetListing.defaultProps = {
  prevPage: undefined,
  nextPage: undefined,
};

PetListing.propTypes = {
  petIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
  paginate: PropTypes.func.isRequired,
};
export default PetListing;
