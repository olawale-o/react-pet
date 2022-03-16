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
export default CustomTextArea;

CustomTextArea.defaultProps = {
  placeholder: '',
};

CustomTextArea.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string,
};
