import PropType from 'prop-types';

const ToolTipButton = ({ text, action, item }) => (
  <button
    type="button"
    className="action__btn"
    onClick={() => action(item && item)}
  >
    {text}
  </button>
);

export default ToolTipButton;

ToolTipButton.defaultProps = {
  item: 0,
};

ToolTipButton.propTypes = {
  text: PropType.string.isRequired,
  action: PropType.func.isRequired,
  item: PropType.oneOfType([PropType.number, PropType.string]),
};
