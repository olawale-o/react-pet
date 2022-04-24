import PropType from 'prop-types';
import ToolTipItem from './ToolTipItem';
import PetActionButton from './PetActionButton';
import ToolTipPopUp from './ToolTipPopUp';
import { useNavigator } from '../../helper';

const PetToolTipPopUp = ({ action }) => {
  const { pushAndReplace } = useNavigator();
  return (
    <ToolTipPopUp>
      <ToolTipItem>
        <PetActionButton
          text="Delete"
          action={() => pushAndReplace('/listings')}
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
};

export default PetToolTipPopUp;

PetToolTipPopUp.propTypes = {
  action: PropType.func.isRequired,
};
