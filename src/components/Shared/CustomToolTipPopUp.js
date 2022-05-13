import PropType from 'prop-types';
import ToolTipPopUp from './ToolTipPopUp';

const CustomToolTipPopUp = ({ children }) => (
  <ToolTipPopUp>
    {children}
  </ToolTipPopUp>
);

export default CustomToolTipPopUp;

CustomToolTipPopUp.propTypes = {
  children: PropType.node.isRequired,
};
