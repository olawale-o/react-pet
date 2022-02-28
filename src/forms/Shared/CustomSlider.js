import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const CustomSlider = ({ el, ...props }) => {
  const [field] = useField(props);
  const {
    name, onBlur, onChange, value,
  } = field;
  return (
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
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="value right">200</div>
      </div>
    </div>
  );
};
export default CustomSlider;

CustomSlider.propTypes = {
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
};
