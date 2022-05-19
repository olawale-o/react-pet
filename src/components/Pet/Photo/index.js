import { useSelector } from 'react-redux';
import PropType from 'prop-types';
import { HiPencil } from 'react-icons/hi';
import BASE_URI from '../../../constants';
import { CustomToolTipPopUp, ToolTipItem, ToolTipButton } from '../../Shared';

const Photo = ({
  photoId,
  stateProps,
  setPhoto,
  close,
  makeProfilePhoto,
}) => {
  const photo = useSelector((state) => state.pet.photos[String(photoId)]);
  const actions = [
    {
      id: 1,
      text: 'Delete',
      func: () => {},
    },
    {
      id: 2,
      text: 'Make profile photo',
      func: () => makeProfilePhoto(photo.url),
    },
  ];
  return (
    <div className="photo">
      {stateProps.choosenPhoto === photoId
        && (
          <CustomToolTipPopUp>
            {actions.map(({ id, text, func }) => (
              <ToolTipItem key={id}>
                <ToolTipButton
                  text={text}
                  action={func}
                />
              </ToolTipItem>
            ))}
          </CustomToolTipPopUp>
        )}
      <img src={`${BASE_URI}${photo.url}`} alt="dog" />
      <button type="button" className="photo__btn" onClick={() => setPhoto(photoId)}>
        <span><HiPencil size={30} color="#fff" /></span>
      </button>
      {stateProps.overlay
        && (
          <div
            className={`overlay ${stateProps.fullOverlay ? 'bg-dark z-index-2000' : 'bg-transparent'}`}
            aria-hidden="true"
            onClick={close}
          />
        )}
    </div>
  );
};

export default Photo;

Photo.propTypes = {
  photoId: PropType.number.isRequired,
  setPhoto: PropType.func.isRequired,
  close: PropType.func.isRequired,
  makeProfilePhoto: PropType.func.isRequired,
  stateProps: PropType.shape({
    choosenPhoto: PropType.number,
    overlay: PropType.bool,
    fullOverlay: PropType.bool,
  }).isRequired,
};
