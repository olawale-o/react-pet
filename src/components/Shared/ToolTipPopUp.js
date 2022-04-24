import PropType from 'prop-types';

const ToolTipPopUp = ({ children }) => (
  <ul className="action__card">{children}</ul>
);

export default ToolTipPopUp;

ToolTipPopUp.propTypes = {
  children: PropType.node.isRequired,
};
