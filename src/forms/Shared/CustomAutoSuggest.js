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
  const { name } = field;
  const { setValue } = helpers;
  const { value } = meta;

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
        autoComplete="off"
        onFocus={onFocus}
        value={value}
      />
      <ul className="match__box">
        {list.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => {
                setValue(item);
                onSelected();
              }}
            >
              {item}
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
  list: PropType.arrayOf(PropType.string).isRequired,
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
  onSearch: PropType.func.isRequired,
  onSelected: PropType.func.isRequired,
  onFocus: PropType.func.isRequired,
  isVisible: PropType.bool.isRequired,
};
