import './style.scss';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import { HiPencil } from 'react-icons/hi';
import BASE_URI from '../../../constants';

const Photo = ({ photoId }) => {
  const photo = useSelector((state) => state.pet.photos[String(photoId)]);
  return (
    <div className="photo">
      <img src={`${BASE_URI}${photo.url}`} alt="dog" />
      <button type="button" className="photo__btn" onClick={() => {}}>
        <span><HiPencil size={30} color="#fff" /></span>
      </button>
    </div>
  );
};

Photo.propTypes = {
  photoId: PropType.number.isRequired,
};

const PhotoList = ({ photos }) => (
  <div className="photo__list">
    {photos.map((photo) => <Photo key={photo} photoId={photo} />)}
  </div>
);

export default PhotoList;

PhotoList.propTypes = {
  photos: PropType.arrayOf(PropType.number).isRequired,
};
