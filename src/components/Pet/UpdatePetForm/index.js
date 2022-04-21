import PropType from 'prop-types';
import './style.scss';

const UpdatePetForm = ({ selectedPetIndex, el }) => {
  if (!selectedPetIndex) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal__body" ref={el}>
        Modal
        {selectedPetIndex}
      </div>
    </div>
  );
};

export default UpdatePetForm;

UpdatePetForm.propTypes = {
  selectedPetIndex: PropType.oneOfType([PropType.bool, PropType.number]).isRequired,
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
};
