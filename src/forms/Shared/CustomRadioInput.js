import { useField } from 'formik';
import PropType from 'prop-types';

const CustomRadioInput = ({ label, fieldValue, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { name } = field;
  const { value } = meta;
  const { setValue } = helpers;
  return (
    <div>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={() => setValue(fieldValue)}
      />
      <span className="radio__label">{label}</span>
    </div>
  );
};

export default CustomRadioInput;

CustomRadioInput.propTypes = {
  label: PropType.string.isRequired,
  fieldValue: PropType.string.isRequired,
};
