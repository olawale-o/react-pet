import PropType from 'prop-types';

const PetActionButton = ({ text, action, item }) => (
  <button
    type="button"
    className="action__btn"
    onClick={() => action(item && item)}
  >
    {text}
  </button>
);

export default PetActionButton;

PetActionButton.defaultProps = {
  item: 0,
};

PetActionButton.propTypes = {
  text: PropType.string.isRequired,
  action: PropType.func.isRequired,
  item: PropType.oneOfType([PropType.number, PropType.string]),
};
