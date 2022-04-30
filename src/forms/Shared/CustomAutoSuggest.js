import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const CustomAutoSuggest = ({
  type,
  placeholder,
  list,
  el,
  onSearch,
  onSelected,
  onFocus,
  isVisible,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { name, onBlur } = field;
  const { setValue } = helpers;
  const { value, touched, error } = meta;

  return (
    <div ref={el} className={`search__input ${isVisible ? 'active' : ''}`}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e.target.value);
        }}
        onBlur={onBlur}
        autoComplete="off"
        onFocus={onFocus}
        value={value}
      />
      <div className="field__error">{touched && error && error}</div>
      <ul className="match__box">
        {list.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => {
                setValue(item.name);
                onSelected();
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomAutoSuggest;

CustomAutoSuggest.defaultProps = {
  placeholder: '',
};

CustomAutoSuggest.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string,
  list: PropType.arrayOf(PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
  })).isRequired,
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
  onSearch: PropType.func.isRequired,
  onSelected: PropType.func.isRequired,
  onFocus: PropType.func.isRequired,
  isVisible: PropType.bool.isRequired,
};
