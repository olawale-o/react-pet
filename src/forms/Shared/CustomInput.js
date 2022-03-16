import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const CustomInput = ({
  type, placeholder, ...props
}) => {
  const [field, meta] = useField(props);
  const {
    name, onBlur, onChange, value,
  } = field;
  return (
    <>
      <input
        type={type}
        className="input"
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        required
      />
      <div className="field__error">{meta.touched && meta.error && meta.error}</div>
    </>
  );
};
export default CustomInput;

CustomInput.defaultProps = {
  placeholder: '',
};

CustomInput.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string,
};
