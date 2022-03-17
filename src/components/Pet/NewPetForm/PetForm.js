import React from 'react';
import PropType from 'prop-types';
import {
  CustomInput,
  CustomSlider,
  CustomRadioGroup,
  CustomTextArea,
  CustomAutoSuggest,
} from '../../../forms';
import petColors from '../../../constants/pet_colors';

const PetForm = ({ formField }) => {
  const rangeValueElement = React.useRef();
  const [pawColors, setPawColors] = React.useState(petColors);
  const searchPetColorRef = React.useRef();
  const searchPetBreedRef = React.useRef();
  const [isPetColorListVisible, setIsPetColorListVisible] = React.useState(false);
  const [isPetBreedListVisible, setIsetBreedListVisible] = React.useState(false);

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
      const filterColors = petColors.filter((color) => color.startsWith(value.toLowerCase()));
      if (filterColors.length > 0) {
        setPawColors(filterColors);
      } else {
        setPawColors([value]);
      }
    }
  };

  React.useEffect(() => {
    const onOutSideClick = (event) => {
      if (searchPetColorRef.current && !searchPetColorRef.current.contains(event.target)) {
        setIsPetColorListVisible(false);
      }
      if (searchPetBreedRef.current && !searchPetBreedRef.current.contains(event.target)) {
        setIsetBreedListVisible(false);
      }
    };
    document.addEventListener('click', onOutSideClick);
    return () => document.removeEventListener('click', onOutSideClick);
  }, []);

  return (
    <div>
      <div className="field">
        <CustomInput type="text" name={petName.name} placeholder="Pet name" />
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
      </div>
      <div className="field">
        <CustomAutoSuggest
          type="text"
          name={petColor.name}
          autoComplete="off"
          placeholder="Pet Color"
          onSearch={onSearch}
          onSelected={() => setIsPetColorListVisible(false)}
          list={pawColors}
          el={searchPetColorRef}
          onFocus={() => setIsPetColorListVisible(true)}
          isVisible={isPetColorListVisible}
        />
      </div>
      <div className="field">
        <CustomAutoSuggest
          type="text"
          name={petBreed.name}
          autoComplete="off"
          placeholder="Pet Breed"
          onSearch={onSearch}
          onSelected={() => setIsetBreedListVisible(false)}
          list={pawColors}
          el={searchPetBreedRef}
          onFocus={() => setIsetBreedListVisible(true)}
          isVisible={isPetBreedListVisible}
        />
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
      </div>
      <div className="field">
        <CustomTextArea name={petDescription.name} placeholder="Description" />
      </div>
    </div>
  );
};

export default PetForm;

PetForm.defaultProps = {
  errors: {},
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
};
