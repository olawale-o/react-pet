import React from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeContext from '../../context/HomeContext';
import Listings from '../Listings';
import './Home.scss';
import { allDogService } from '../../services';
import { getAllPets } from '../../redux/pet/pet_async_action';
import { genders } from '../../constants';

const Home = ({ petIds, fetchPets, searchMeta }) => {
  const [search, setSearch] = useSearchParams();
  const [gender, setGender] = React.useState('b');
  const [breed, setBreed] = React.useState('both');
  const [pawColor, setPawColor] = React.useState('all');
  const [currentPage, setCurrentPage] = React.useState(0);
  const [direction, setDirection] = React.useState('next');
  const {
    prev_page_no: prevPageNo,
    next_page_no: nextPageNo,
  } = searchMeta;

  const paginate = (page, direction) => {
    const gender = search.get('gender');
    fetchPets(allDogService, { page, gender, direction });
    setCurrentPage(page);
    setDirection(direction);
  };
  const onGenderSelected = (e) => {
    const { target: { value } } = e;
    setGender(value);
    setSearch({ gender: value, breeder: breed, color: pawColor });
    fetchPets(allDogService, { page: currentPage, gender: value, direction });
  };

  const onBreedSelected = (e) => {
    const { target: { value } } = e;
    setBreed(value);
    setSearch({
      gender,
      breeder: value,
      color: pawColor,
      direction,
    });
  };

  const onColorSelected = (value) => {
    setSearch({
      gender,
      breeder: breed,
      color: value,
      direction,
    });
  };

  React.useEffect(() => {
    setSearch({
      gender: 'b',
      breeder: 'b',
      color: 'all',
    });
    fetchPets(allDogService,
      {
        page: currentPage,
        breeder: 'b',
        color: 'all',
        direction: 'next',
      });
  }, []);
  if (!petIds) return null;
  return (
    <HomeContext.Provider value={{
      genders,
      gender,
      onGenderSelected,
      breed,
      onBreedSelected,
      pawColor,
      prevPageNo,
      nextPageNo,
      paginate,
      petIds,
    }}
    >
      <div className="home">
        <div className="content">
          <div className="main">
            <Listings
              setPawColor={setPawColor}
              onColorSelected={onColorSelected}
            />
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
  fetchPets: (service, credential) => dispatch(getAllPets(service, credential)),
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
    next_page_no: PropTypes.number,
    prev_page_no: PropTypes.number,
    total_current_items: PropTypes.number,
    is_last_item: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
