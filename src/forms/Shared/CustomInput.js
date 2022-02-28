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
      {
        meta.touched && meta.error && (
          <div className="field-error">
            { meta.error }
          </div>
        )
      }
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
