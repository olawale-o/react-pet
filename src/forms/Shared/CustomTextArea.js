import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const CustomTextArea = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const {
    name, onBlur, onChange, value,
  } = field;
  return (
    <>
      <textarea
        className="textarea"
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        required
        rows="10"
      />
      <div className="field__error">{meta.touched && meta.error && meta.error}</div>
    </>
  );
};
export default CustomTextArea;

CustomTextArea.defaultProps = {
  placeholder: '',
};

CustomTextArea.propTypes = {
  placeholder: PropType.string,
};
