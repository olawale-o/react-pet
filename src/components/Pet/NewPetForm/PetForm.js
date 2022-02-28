import React from 'react';
import PropType from 'prop-types';
import { CustomInput, CustomSlider } from '../../../forms';

const PetForm = ({ formField }) => {
  const rangeValueElement = React.useRef();
  const { petName, petWeight, petGender } = formField;
  const onSliderMove = (value) => {
    rangeValueElement.current.style.left = `${value / 2}%`;
    rangeValueElement.current.classList.add('show');
  };

  const onSlideBlur = () => rangeValueElement.current.classList.remove('show');

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
        <span className="label">Gender</span>
        <CustomInput type="radio" name={petGender.name} value="1" />
        <span className="radio__label">Male</span>
        <CustomInput type="radio" name={petGender.name} value="2" />
        <span className="radio__label">Female</span>
      </div>
    </div>
  );
};

export default PetForm;

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
  }).isRequired,
};
