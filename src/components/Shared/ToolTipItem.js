import PropType from 'prop-types';

const ToolTipItem = ({ children }) => (
  <li className="action__card-item">{children}</li>
);

export default ToolTipItem;

ToolTipItem.propTypes = {
  children: PropType.node.isRequired,
};
