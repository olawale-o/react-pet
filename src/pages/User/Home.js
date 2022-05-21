import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeContext from '../../context/HomeContext';
import Listings from '../Listings';
import './Home.scss';
import { allDogService } from '../../services';
import { getAllPets } from '../../redux/pet/pet_async_action';

const Home = ({ petIds, fetchPets, searchMeta }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { prev_page: prevPage, next_page: nextPage } = searchMeta;
  const paginate = async (page) => {
    await fetchPets(allDogService, { page });
    setCurrentPage(page);
  };
  React.useEffect(() => {
    fetchPets(allDogService, { page: currentPage });
  }, []);
  if (!petIds) return null;
  return (
    <HomeContext.Provider value={{
      prevPage,
      nextPage,
      paginate,
      petIds,
    }}
    >
      <div className="home">
        <div className="content">
          <div className="main">
            <Listings />
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  petIds: state.pet.petIds,
  searchMeta: state.pet.searchMeta,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPets: (service, page) => dispatch(getAllPets(service, page)),
});

Home.defaultProps = {
  petIds: [],
};

Home.propTypes = {
  petIds: PropTypes.arrayOf(PropTypes.number),
  fetchPets: PropTypes.func.isRequired,
  searchMeta: PropTypes.shape({
    total_items: PropTypes.number,
    current_page: PropTypes.number,
    next_page: PropTypes.number,
    prev_page: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
