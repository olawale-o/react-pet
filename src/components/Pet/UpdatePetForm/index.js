import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Formik, Form } from 'formik';
import {
  newPetSchema,
  newPetModel,
  newPetInitialValues,
  CustomInput,
  CustomSlider,
  CustomAutoSuggest,
  CustomTextArea,
} from '../../../forms';
import petColors from '../../../constants/pet_colors';
import usePopUp from '../../../composables';

const {
  formField: {
    petName,
    petWeight,
    petColor,
    petBreed,
    petDescription,
  },
} = newPetModel;

const UpdatePetForm = ({
  pet,
  open,
  closePopUp,
  loading,
  breeds,
}) => {
  const currentValidationSchema = newPetSchema[0];
  const rangeValueElement = React.useRef();
  const [pawColors, setPawColors] = React.useState(petColors);
  const [dogBreeds, setDogBreeds] = React.useState(breeds);
  const searchPetColorRef = React.useRef();
  const searchPetBreedRef = React.useRef();
  const petColorPopUp = usePopUp(searchPetColorRef, false);
  const petBreedPopUp = usePopUp(searchPetBreedRef, false);
  let initialValues = null;
  if (pet) {
    initialValues = {
      [petName.name]: pet.name,
      [petWeight.name]: pet.weight,
      [petColor.name]: pet.color,
      [petBreed.name]: pet.breed,
      [petDescription.name]: pet.description,
    };
  } else {
    initialValues = newPetInitialValues;
  }

  if (!open) {
    return null;
  }
  const handleSubmit = () => {
    console.log('submit');
  };

  const onSlideBlur = () => rangeValueElement.current.classList.remove('show');

  const onSliderMove = (value) => {
    rangeValueElement.current.style.left = `${value / 2}%`;
    rangeValueElement.current.classList.add('show');
  };

  const onSearch = (value) => {
    if (value.trim() === '') {
      setPawColors(petColors);
    } else {
      const filterColors = petColors.filter((color) => color.name.startsWith(value.toLowerCase()));
      if (filterColors.length > 0) {
        setPawColors(filterColors);
      } else {
        setPawColors([value]);
      }
    }
  };

  const onSearchBreeds = (value) => {
    if (value.trim() === '') {
      setDogBreeds(breeds);
    } else {
      const filterBreeds = dogBreeds.filter(({ name }) => name.startsWith(value.toLowerCase()));
      if (filterBreeds.length > 0) {
        setDogBreeds(filterBreeds);
      } else {
        setDogBreeds([{ id: breeds.length - 1, name: value }]);
      }
    }
  };

  console.log('pet', pet);

  return (
    ReactDOM.createPortal(
      <>
        <div className="modal" onClick={closePopUp} aria-hidden="true" />
        {loading && <div className="loading">Loading...</div>}
        {!loading
          && (
            <div className="modal__body">
              <div className="pet__form w-100">
                <Formik
                  initialValues={initialValues}
                  validationSchema={currentValidationSchema}
                  onSubmit={handleSubmit}
                  enableReinitialize
                >
                  {() => (
                    <Form>
                      <div>
                        <div className="field">
                          <CustomInput
                            type="text"
                            name={petName.name}
                            placeholder="Pet name"
                          />
                        </div>
                        <div className="field">
                          <span className="label">Weight</span>
                          <CustomSlider
                            name={petWeight.name}
                            onBlur={onSlideBlur}
                            onSliderMove={onSliderMove}
                            el={rangeValueElement}
                          />
                        </div>
                        <div className="field">
                          <CustomAutoSuggest
                            type="text"
                            name={petColor.name}
                            autoComplete="off"
                            placeholder="Pet color"
                            onSearch={onSearch}
                            onSelected={() => petColorPopUp.setIsVisible(false)}
                            list={pawColors}
                            el={searchPetColorRef}
                            onFocus={() => petColorPopUp.setIsVisible(true)}
                            isVisible={petColorPopUp.isVisible}
                          />
                        </div>
                        <div className="field">
                          <CustomAutoSuggest
                            type="text"
                            name={petBreed.name}
                            autoComplete="off"
                            placeholder="Pet breed"
                            onSearch={onSearchBreeds}
                            onSelected={() => petBreedPopUp.setIsVisible(false)}
                            list={dogBreeds}
                            el={searchPetBreedRef}
                            onFocus={() => petBreedPopUp.setIsVisible(true)}
                            isVisible={petBreedPopUp.isVisible}
                          />
                        </div>
                        <div className="field">
                          <CustomTextArea name={petDescription.name} placeholder="Description" />
                        </div>
                        <div className="actions">
                          <button type="submit" className="btn btn__primary">
                            Update
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}
      </>,
      document.body,
    )
  );
};

const mapStateToProps = (state) => ({
  pet: state.pet.selectedPet,
  loading: state.global.loading,
  breeds: state.pet.breeds,
});

export default connect(mapStateToProps, null)(UpdatePetForm);

UpdatePetForm.defaultProps = {
  pet: {},
  breeds: [],
};

UpdatePetForm.propTypes = {
  closePopUp: PropType.func.isRequired,
  open: PropType.bool.isRequired,
  pet: PropType.shape({
    id: PropType.number,
    name: PropType.string,
  }),
  loading: PropType.bool.isRequired,
  breeds: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    name: PropType.string,
  })),
};
