import './style.scss';
import PropType from 'prop-types';
import { HiPencil } from 'react-icons/hi';
import BASE_URI from '../../../constants';

const PhotoList = ({ photos }) => (
  <div className="photo__list">
    {photos.map((photo) => (
      <div className="photo" key={photo.url}>
        <img src={`${BASE_URI}${photo.url}`} alt="dog" />
        <button type="button" className="photo__btn" onClick={() => {}}>
          <span><HiPencil size={30} color="#fff" /></span>
        </button>
      </div>
    ))}
  </div>
);

export default PhotoList;

PhotoList.propTypes = {
  photos: PropType.arrayOf(PropType.shape({
    url: PropType.string,
  })).isRequired,
};
