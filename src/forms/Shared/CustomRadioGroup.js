import { useField } from 'formik';
import PropType from 'prop-types';

const CustomRadioGroup = ({ fields, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { name } = field;
  const { value, touched, error } = meta;
  const { setValue } = helpers;
  return (
    <>
      <div className="radio__group">
        {
          fields.map((field) => (
            <div key={field.label}>
              <input
                type="radio"
                name={name}
                value={value}
                onChange={() => setValue(field.fieldValue)}
              />
              <span className="radio__label">{field.label}</span>
            </div>
          ))
        }
      </div>
      {touched && error && (<div className="field-error">{ meta.error }</div>)}
    </>
  );
};

export default CustomRadioGroup;

CustomRadioGroup.propTypes = {
  fields: PropType.arrayOf(PropType.shape({
    label: PropType.string.isRequired,
    fieldValue: PropType.string.isRequired,
  })).isRequired,
};
