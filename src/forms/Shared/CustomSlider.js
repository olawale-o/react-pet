import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const CustomSlider = ({
  onSliderMove,
  onBlur,
  el,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { name } = field;
  const { value, error, touched } = meta;
  const { setValue } = helpers;

  const onSliderChange = (e) => {
    const { target: { value } } = e;
    setValue(value);
    onSliderMove(value);
  };

  const onSliderBlur = () => {
    onBlur();
  };

  return (
    <>
      <div className="range">
        <div className="range__value">
          <span ref={el}>{value}</span>
        </div>
        <div className="range__field">
          <div className="value left">0</div>
          <input
            type="range"
            name={name}
            value={value}
            min="0"
            max="200"
            steps="1"
            onChange={onSliderChange}
            onBlur={onSliderBlur}
          />
          <div className="value right">200</div>
        </div>
      </div>
      <div className="field__error">{touched && error && error}</div>
    </>
  );
};
export default CustomSlider;

CustomSlider.propTypes = {
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
  onSliderMove: PropType.func.isRequired,
  onBlur: PropType.func.isRequired,
};
