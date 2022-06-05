import React from 'react';
import { useSelector } from 'react-redux';
import PropType from 'prop-types';
import {
  CustomInput,
  CustomSlider,
  CustomRadioGroup,
  CustomTextArea,
  CustomAutoSuggest,
} from '../../forms';
import petColors from '../../constants/pet_colors';
import petSelector from '../../redux/pet/pet_selector';
import usePopUp from '../../composables';

const PetForm = ({ formField, error }) => {
  const { breeds } = useSelector(petSelector);
  const rangeValueElement = React.useRef();
  const [pawColors, setPawColors] = React.useState(petColors);
  const [dogBreeds, setDogBreeds] = React.useState(breeds);
  const searchPetColorRef = React.useRef();
  const searchPetBreedRef = React.useRef();
  const petColorPopUp = usePopUp(searchPetColorRef, false);
  const petBreedPopUp = usePopUp(searchPetBreedRef, false);

  const {
    petName,
    petWeight,
    petGender,
    petColor,
    petDescription,
    petBreed,
  } = formField;
  const onSliderMove = (value) => {
    rangeValueElement.current.style.left = `${value / 2}%`;
    rangeValueElement.current.classList.add('show');
  };

  const onSlideBlur = () => rangeValueElement.current.classList.remove('show');

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

  return (
    <div>
      <div className="field">
        <CustomInput type="text" name={petName.name} placeholder="Pet name" />
        {error && (
          <ul className="errors">
            {'name' in error && (
              error.name.map((e) => (
                <li className="error" key={e}>{e}</li>
              ))
            )}
          </ul>
        )}
      </div>
      <div className="field">
        <span className="label">Weight</span>
        <CustomSlider
          name={petWeight.name}
          sliderValue="10"
          onBlur={onSlideBlur}
          onSliderMove={onSliderMove}
          el={rangeValueElement}
        />
        {error && (
          <ul className="errors">
            {'weight' in error && (
              error.weight.map((e) => (
                <li className="error" key={e}>{e}</li>
              ))
            )}
          </ul>
        )}
      </div>
      <div className="field">
        <CustomAutoSuggest
          name={petColor.name}
          placeholder="Pet Color"
          onSearch={onSearch}
          onSelected={() => petColorPopUp.setIsVisible(false)}
          list={pawColors}
          el={searchPetColorRef}
          onFocus={() => petColorPopUp.setIsVisible(true)}
          isVisible={petColorPopUp.isVisible}
        />
        {error && (
          <ul className="errors">
            {'color' in error && (
              error.color.map((e) => (
                <li className="error" key={e}>{e}</li>
              ))
            )}
          </ul>
        )}
      </div>
      <div className="field">
        <CustomAutoSuggest
          name={petBreed.name}
          placeholder="Pet Breed"
          onSearch={onSearchBreeds}
          onSelected={() => petBreedPopUp.setIsVisible(false)}
          list={dogBreeds}
          el={searchPetBreedRef}
          onFocus={() => petBreedPopUp.setIsVisible(true)}
          isVisible={petBreedPopUp.isVisible}
        />
        {error && (
          <ul className="errors">
            {'breed' in error && (
              error.breed.map((e) => (
                <li className="error" key={e}>{e}</li>
              ))
            )}
          </ul>
        )}
      </div>
      <div className="field">
        <span className="label">Gender</span>
        <CustomRadioGroup
          name={petGender.name}
          fields={[
            {
              label: 'Male',
              fieldValue: 'm',
            },
            {
              label: 'Female',
              fieldValue: 'f',
            },
          ]}
        />
        {error && (
          <ul className="errors">
            {'gender' in error && (
              error.gender.map((e) => (
                <li className="error" key={e}>{e}</li>
              ))
            )}
          </ul>
        )}
      </div>
      <div className="field">
        <CustomTextArea name={petDescription.name} placeholder="Description" />
        {error && (
          <ul className="errors">
            {'description' in error && (
              error.description.map((e) => (
                <li className="error" key={e}>{e}</li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PetForm;

PetForm.defaultProps = {
  errors: {},
  error: '' || {},
};

PetForm.propTypes = {
  formField: PropType.shape({
    petName: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    petWeight: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    petGender: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    petColor: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    petDescription: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    petBreed: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
  errors: PropType.shape({}),
  error: PropType.oneOfType([
    PropType.string,
    PropType.shape({}),
  ]),
};
