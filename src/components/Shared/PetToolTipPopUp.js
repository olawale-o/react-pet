import PropType from 'prop-types';
import ToolTipItem from './ToolTipItem';
import PetActionButton from './PetActionButton';
import ToolTipPopUp from './ToolTipPopUp';

const PetToolTipPopUp = ({ action, deleteAction }) => (
  <ToolTipPopUp>
    <ToolTipItem>
      <PetActionButton
        text="Delete"
        action={() => deleteAction()}
      />
    </ToolTipItem>
    <ToolTipItem>
      <PetActionButton
        text="Edit"
        action={() => action()}
      />
    </ToolTipItem>
  </ToolTipPopUp>
);

export default PetToolTipPopUp;

PetToolTipPopUp.propTypes = {
  action: PropType.func.isRequired,
  deleteAction: PropType.func.isRequired,
};
